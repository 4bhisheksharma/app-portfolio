import type { App } from '../../types/app'
import { AppsGrid } from './AppsGrid'

interface AppsSectionProps {
  apps: App[]
}

export function AppsSection({ apps }: AppsSectionProps) {
  return (
    <section aria-label="Apps showcase">
      <AppsGrid apps={apps} />
    </section>
  )
}
