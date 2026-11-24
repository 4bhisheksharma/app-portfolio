import React, { createContext, useContext, useEffect, useState } from 'react'
import type { App, AppIcon, AppStatus, SiteConfig } from '../types/app'
import { apps as defaultApps } from '../data/apps'
import { siteConfig as defaultSiteConfig } from '../data/site'
import { db, subscribeToDoc } from '../lib/firebase'

export interface PortfolioContextType {
  apps: App[]
  siteConfig: SiteConfig
  isLoading: boolean
  isFirebaseConnected: boolean
}

const PortfolioContext = createContext<PortfolioContextType>({
  apps: defaultApps,
  siteConfig: defaultSiteConfig,
  isLoading: false,
  isFirebaseConnected: false,
})

interface FirestoreProjectItem {
  id: string
  title?: string
  description?: string
  category?: string
  categoryLabel?: string
  tag?: string
  image?: string
  status?: string
  closedTesting?: boolean
  isNew?: boolean
  links?: Array<{ label: string; href: string; type?: string }>
}

interface FirestoreProjectsDoc {
  items?: FirestoreProjectItem[]
  updatedAt?: string
}

interface FirestoreAppsDoc {
  items?: App[]
  totalCount?: number
  updatedAt?: string
}

interface FirestoreSiteDoc {
  name?: string
  title?: string
  subtitle?: string
  logo?: string
  contact?: {
    email?: string
    [key: string]: any
  }
  [key: string]: any
}

function normalizeAppIconImage(imagePath?: string, fallbackPath?: string): string | undefined {
  const raw = imagePath || fallbackPath
  if (!raw) return undefined
  if (raw.startsWith('data:') || raw.startsWith('http://') || raw.startsWith('https://')) {
    return raw
  }
  const filename = raw.split('/').pop()?.split('?')[0]
  if (!filename) return raw
  return `/apps/${filename}`
}

function resolveAppIcon(project: FirestoreProjectItem): AppIcon {
  const text = `${project.tag || ''} ${project.title || ''} ${project.categoryLabel || ''} ${project.category || ''}`.toLowerCase()
  if (text.includes('vpn') || text.includes('privacy') || text.includes('shield')) return 'shield'
  if (text.includes('game') || text.includes('imposter')) return 'game'
  if (text.includes('widget') || text.includes('mosaic') || text.includes('grid')) return 'grid'
  if (text.includes('toggle') || text.includes('switchly') || text.includes('setting')) return 'toggle'
  if (text.includes('news') || text.includes('times')) return 'newspaper'
  if (text.includes('compass') || text.includes('travel') || text.includes('vastu') || text.includes('nepal')) return 'compass'
  if (text.includes('voice') || text.includes('pulse') || text.includes('capsule')) return 'pulse'
  if (text.includes('health') || text.includes('dhrms')) return 'wallet'
  if (text.includes('municipality') || text.includes('building') || text.includes('palika')) return 'building'
  if (text.includes('home') || text.includes('real estate') || text.includes('property')) return 'home'
  if (text.includes('ledger') || text.includes('jft')) return 'ledger'
  if (text.includes('finance') || text.includes('khata')) return 'finance'
  return 'grid'
}

function mergeProjectsWithApps(baseApps: App[], projects: FirestoreProjectItem[]): App[] {
  if (!projects || projects.length === 0) return baseApps

  const projectMap = new Map<string, FirestoreProjectItem>()
  projects.forEach((p) => {
    if (p.id) projectMap.set(p.id.toLowerCase().trim(), p)
  })

  // 1. Update existing apps with the freshest data from projects
  const updatedApps = baseApps.map((app) => {
    const matched = projectMap.get(app.id.toLowerCase().trim())
    if (!matched) return app

    const playStore = matched.links?.find(
      (l) => l.href?.includes('play.google.com') || l.label?.toLowerCase().includes('play store')
    )?.href
    const appStore = matched.links?.find(
      (l) => l.href?.includes('apps.apple.com') || l.label?.toLowerCase().includes('app store')
    )?.href
    const chromeStore = matched.links?.find(
      (l) => l.href?.includes('chromewebstore.google.com') || l.label?.toLowerCase().includes('chrome store')
    )?.href
    const github = matched.links?.find(
      (l) => l.type === 'github' || l.href?.includes('github.com') || l.label?.toLowerCase().includes('github')
    )?.href
    const privacy = matched.links?.find(
      (l) => l.href?.includes('/privacy') || l.label?.toLowerCase().includes('privacy')
    )?.href
    const website = matched.links?.find(
      (l) =>
        (l.type === 'live' || l.label?.toLowerCase() === 'web') &&
        !l.href?.includes('play.google.com') &&
        !l.href?.includes('apps.apple.com')
    )?.href
    const download = matched.links?.find(
      (l) => l.label?.toLowerCase().includes('download') || l.href?.includes('/releases')
    )?.href

    let status: AppStatus = app.status
    if (matched.status === 'live' || matched.status === 'closed_testing' || matched.status === 'coming_soon') {
      status = matched.status
    } else if (matched.closedTesting) {
      status = 'closed_testing'
    }

    return {
      ...app,
      name: matched.title || app.name,
      description: matched.description || app.description,
      tag: matched.tag || app.tag,
      category: matched.categoryLabel || app.category,
      iconImage: normalizeAppIconImage(matched.image, app.iconImage),
      status,
      closedTesting: typeof matched.closedTesting === 'boolean' ? matched.closedTesting : app.closedTesting,
      isNew: typeof matched.isNew === 'boolean' ? matched.isNew : app.isNew,
      playStoreUrl: playStore || app.playStoreUrl,
      appStoreUrl: appStore || app.appStoreUrl,
      chromeStoreUrl: chromeStore || app.chromeStoreUrl,
      githubUrl: github || app.githubUrl,
      privacyUrl: privacy || app.privacyUrl,
      websiteUrl: website || app.websiteUrl,
      downloadUrl: download || app.downloadUrl,
    }
  })

  // 2. Add any new mobile/app projects from Firestore that aren't in baseApps yet (only if they have a store link)
  const existingIds = new Set(updatedApps.map((a) => a.id.toLowerCase().trim()))
  const newAppProjects = projects.filter((p) => {
    if (!p.id || existingIds.has(p.id.toLowerCase().trim())) return false
    const cat = (p.category || '').toLowerCase()
    const isMobileOrGame = cat === 'mobile' || cat === 'games' || p.categoryLabel?.toLowerCase().includes('app')
    const hasStoreLink = p.links?.some(
      (l) =>
        l.href?.includes('play.google.com') ||
        l.href?.includes('apps.apple.com') ||
        l.href?.includes('chromewebstore.google.com') ||
        l.label?.toLowerCase().includes('play store') ||
        l.label?.toLowerCase().includes('app store')
    )
    return isMobileOrGame && Boolean(hasStoreLink)
  })

  const appendedApps: App[] = newAppProjects.map((p, idx) => {
    const playStore = p.links?.find(
      (l) => l.href?.includes('play.google.com') || l.label?.toLowerCase().includes('play store')
    )?.href
    const appStore = p.links?.find(
      (l) => l.href?.includes('apps.apple.com') || l.label?.toLowerCase().includes('app store')
    )?.href
    const chromeStore = p.links?.find(
      (l) => l.href?.includes('chromewebstore.google.com') || l.label?.toLowerCase().includes('chrome store')
    )?.href
    const github = p.links?.find(
      (l) => l.type === 'github' || l.href?.includes('github.com') || l.label?.toLowerCase().includes('github')
    )?.href
    const privacy = p.links?.find(
      (l) => l.href?.includes('/privacy') || l.label?.toLowerCase().includes('privacy')
    )?.href
    const website = p.links?.find(
      (l) =>
        (l.type === 'live' || l.label?.toLowerCase() === 'web') &&
        !l.href?.includes('play.google.com') &&
        !l.href?.includes('apps.apple.com')
    )?.href
    const download = p.links?.find(
      (l) => l.label?.toLowerCase().includes('download') || l.href?.includes('/releases')
    )?.href

    let status: AppStatus = 'live'
    if (p.status === 'live' || p.status === 'closed_testing' || p.status === 'coming_soon') {
      status = p.status
    } else if (p.closedTesting) {
      status = 'closed_testing'
    }

    const num = String(updatedApps.length + idx + 1).padStart(2, '0')

    return {
      id: p.id,
      number: num,
      tag: p.tag || 'Mobile',
      category: p.categoryLabel || 'App',
      name: p.title || p.id,
      description: p.description || '',
      icon: resolveAppIcon(p),
      status,
      iconImage: normalizeAppIconImage(p.image),
      playStoreUrl: playStore,
      appStoreUrl: appStore,
      chromeStoreUrl: chromeStore,
      githubUrl: github,
      privacyUrl: privacy,
      websiteUrl: website,
      downloadUrl: download,
      closedTesting: p.closedTesting,
      isNew: p.isNew,
    }
  })

  return [...updatedApps, ...appendedApps]
}

export function PortfolioProvider({ children }: { children: React.ReactNode }) {
  const [apps, setApps] = useState<App[]>(defaultApps)
  const [siteConfig, setSiteConfig] = useState<SiteConfig>(defaultSiteConfig)
  const [isLoading, setIsLoading] = useState<boolean>(Boolean(db))
  const [isFirebaseConnected, setIsFirebaseConnected] = useState<boolean>(Boolean(db))

  useEffect(() => {
    if (!db) {
      setIsLoading(false)
      setIsFirebaseConnected(false)
      return
    }

    setIsFirebaseConnected(true)

    // 1. Subscribe to /portfolio/apps
    const unsubApps = subscribeToDoc<FirestoreAppsDoc>(
      'apps',
      (docData) => {
        if (docData && Array.isArray(docData.items) && docData.items.length > 0) {
          const sanitized = docData.items.map((item) => ({
            ...item,
            iconImage: normalizeAppIconImage(item.iconImage),
          }))
          setApps(sanitized)
          setIsLoading(false)
        }
      },
      { items: defaultApps }
    )

    // 2. Subscribe to /portfolio/projects to enrich apps or serve as primary dynamic source
    const unsubProjects = subscribeToDoc<FirestoreProjectsDoc>(
      'projects',
      (docData) => {
        if (docData && Array.isArray(docData.items) && docData.items.length > 0) {
          setApps((prevApps) => mergeProjectsWithApps(prevApps.length > 0 ? prevApps : defaultApps, docData.items || []))
          setIsLoading(false)
        }
      },
      { items: [] }
    )

    // 3. Subscribe to /portfolio/site to synchronize site-level metadata
    const unsubSite = subscribeToDoc<FirestoreSiteDoc>(
      'site',
      (siteDoc) => {
        if (siteDoc && siteDoc.name) {
          setSiteConfig((prev) => ({
            ...prev,
            name: siteDoc.name || prev.name,
            subtitle: siteDoc.subtitle || prev.subtitle,
            logo: siteDoc.logo || prev.logo,
            testingContactEmail: siteDoc.contact?.email || prev.testingContactEmail,
          }))
        }
      },
      defaultSiteConfig as any
    )

    return () => {
      unsubApps()
      unsubProjects()
      unsubSite()
    }
  }, [])

  return (
    <PortfolioContext.Provider
      value={{
        apps,
        siteConfig,
        isLoading,
        isFirebaseConnected,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  )
}

export function usePortfolioData(): PortfolioContextType {
  return useContext(PortfolioContext)
}
