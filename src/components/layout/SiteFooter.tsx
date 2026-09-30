import type { SiteConfig } from '../../types/app'
import { ExternalLink } from '../ui/ExternalLink'

interface SiteFooterProps {
  config: SiteConfig
}

export function SiteFooter({ config }: SiteFooterProps) {
  return (
    <footer className="mt-20 flex flex-col gap-3 border-t border-line pt-6 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
      <p>
        © {new Date().getFullYear()} {config.name}
      </p>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-1">
        <a
          href={`mailto:${config.testingContactEmail}`}
          className="link-underline py-1.5 transition-colors hover:text-fg"
        >
          {config.testingContactEmail}
        </a>
        <ExternalLink href={config.portfolioUrl} className="py-1.5">
          Portfolio
        </ExternalLink>
      </div>
    </footer>
  )
}
