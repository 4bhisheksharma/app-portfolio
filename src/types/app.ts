export type AppStatus = 'coming_soon' | 'live'

export type AppAccent = 'orange' | 'emerald' | 'violet' | 'rose'

export type AppIcon = 'finance' | 'ledger' | 'shield' | 'wallet'

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
  screenshot?: string
  appStoreUrl?: string
  playStoreUrl?: string
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
}
