import type { SiteConfig } from '../../types/app'
import { PillNav } from '../ui/PillNav'
import { SectionLabel } from '../ui/SectionLabel'

interface SiteHeaderProps {
  config: SiteConfig
}

export function SiteHeader({ config }: SiteHeaderProps) {
  return (
    <header className="mb-16">
      <SectionLabel label={config.sectionLabel} />
      <div className="mt-10 text-center">
        <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
          {config.title}
        </h1>
        <p className="mx-auto mt-4 max-w-lg text-sm text-zinc-500 sm:text-base">
          {config.subtitle}
        </p>
        <div className="mt-8">
          <PillNav links={config.navLinks} />
        </div>
      </div>
    </header>
  )
}
