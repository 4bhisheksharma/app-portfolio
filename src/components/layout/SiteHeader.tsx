import type { SiteConfig } from '../../types/app'
import { SectionLabel } from '../ui/SectionLabel'
import { PillNav } from '../ui/PillNav'

interface SiteHeaderProps {
  config: SiteConfig
}

export function SiteHeader({ config }: SiteHeaderProps) {
  return (
    <header className="mb-16 text-center">
      <SectionLabel label={config.sectionLabel} />
      <h1 className="mt-4 text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
        {config.title}
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-zinc-500 sm:text-base">
        {config.subtitle}
      </p>
      <div className="mt-8">
        <PillNav links={config.navLinks} />
      </div>
    </header>
  )
}
