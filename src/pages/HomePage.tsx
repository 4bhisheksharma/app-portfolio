import { AppsSection } from '../components/apps/AppsSection'
import { PageShell } from '../components/layout/PageShell'
import { SiteFooter } from '../components/layout/SiteFooter'
import { SiteHeader } from '../components/layout/SiteHeader'
import { apps } from '../data/apps'
import { siteConfig } from '../data/site'

export function HomePage() {
  return (
    <PageShell>
      <SiteHeader config={siteConfig} />
      <AppsSection apps={apps} />
      <SiteFooter config={siteConfig} />
    </PageShell>
  )
}
