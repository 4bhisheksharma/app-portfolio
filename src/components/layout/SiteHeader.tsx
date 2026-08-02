import type { SiteConfig } from '../../types/app'
import { PillNav } from '../ui/PillNav'
import { SectionLabel } from '../ui/SectionLabel'

interface SiteHeaderProps {
  config: SiteConfig
}

export function SiteHeader({ config }: SiteHeaderProps) {
  return (
    <header className="mb-14">
      <SectionLabel label={config.sectionLabel} />
      <div className="mt-8 text-center">
        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl lg:text-5xl">
          {config.title}
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-base text-zinc-500">{config.subtitle}</p>
        <div className="mt-7">
          <PillNav links={config.navLinks} />
        </div>
      </div>
    </header>
  )
}
