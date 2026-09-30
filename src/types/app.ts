export type AppStatus = 'coming_soon' | 'live' | 'closed_testing'

export type AppIcon =
  | 'finance'
  | 'ledger'
  | 'shield'
  | 'wallet'
  | 'pulse'
  | 'home'
  | 'compass'
  | 'building'
  | 'grid'
  | 'game'

export interface App {
  id: string
  number: string
  tag: string
  category: string
  name: string
  description: string
  icon: AppIcon
  status: AppStatus
  iconImage?: string
  appStoreUrl?: string
  playStoreUrl?: string
  chromeStoreUrl?: string
  websiteUrl?: string
  githubUrl?: string
  privacyUrl?: string
  iosComingSoon?: boolean
  closedTesting?: boolean
}

export interface SiteConfig {
  name: string
  subtitle: string
  portfolioUrl: string
  logo: string
  testingContactEmail: string
}
