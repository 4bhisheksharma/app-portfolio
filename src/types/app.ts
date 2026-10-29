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
  | 'toggle'
  | 'newspaper'

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
  downloadUrl?: string
  websiteUrl?: string
  githubUrl?: string
  privacyUrl?: string
  iosComingSoon?: boolean
  closedTesting?: boolean
  /** Recently released; shows a "New" badge */
  isNew?: boolean
}

export interface SiteConfig {
  name: string
  subtitle: string
  portfolioUrl: string
  logo: string
  testingContactEmail: string
}
