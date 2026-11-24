import { useMemo } from 'react'
import { AppsSection } from '../components/apps/AppsSection'
import { PageShell } from '../components/layout/PageShell'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { usePortfolioData } from '../context/PortfolioContext'

export function HomePage() {
  const { apps, siteConfig } = usePortfolioData()

  // Only count listings anyone can install (closed tests are invite-only)
  const publicOnPlay = useMemo(
    () => apps.filter((app) => app.status === 'live' && app.playStoreUrl).length,
    [apps]
  )
  const onAppStore = useMemo(
    () => apps.filter((app) => app.appStoreUrl).length,
    [apps]
  )

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
