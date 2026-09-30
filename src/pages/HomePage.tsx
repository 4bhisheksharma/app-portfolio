import { AppsSection } from '../components/apps/AppsSection'
import { PageShell } from '../components/layout/PageShell'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { apps } from '../data/apps'
import { siteConfig } from '../data/site'

// Only count listings anyone can install (closed tests are invite-only)
const publicOnPlay = apps.filter((app) => app.status === 'live' && app.playStoreUrl).length
const onAppStore = apps.filter((app) => app.appStoreUrl).length

export function HomePage() {
  return (
    <PageShell>
      <SiteHeader
        config={siteConfig}
        appCount={apps.length}
        playCount={publicOnPlay}
        appStoreCount={onAppStore}
      />
      <AppsSection apps={apps} />
      <SiteFooter config={siteConfig} />
    </PageShell>
  )
}
