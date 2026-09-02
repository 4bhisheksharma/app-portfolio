export type AppStatus = 'coming_soon' | 'live' | 'closed_testing'

export type AppAccent = 'orange' | 'emerald' | 'violet' | 'rose' | 'amber'

export type AppIcon =
  | 'finance'
  | 'ledger'
  | 'shield'
  | 'wallet'
  | 'pulse'
  | 'home'
  | 'compass'
  | 'building'

export interface App {
  id: string
  number: string
  tag: string
  category: string
  name: string
  description: string
  accent: AppAccent
  icon: AppIcon
  status: AppStatus
  iconImage?: string
  screenshot?: string
  appStoreUrl?: string
  playStoreUrl?: string
  chromeStoreUrl?: string
  websiteUrl?: string
  iosComingSoon?: boolean
  closedTesting?: boolean
}

export interface NavLink {
  label: string
  href?: string
}

export interface SiteConfig {
  name: string
  title: string
  subtitle: string
  sectionLabel: string
  appCount: number
  portfolioUrl: string
  navLinks: NavLink[]
  testingContactEmail: string
}
