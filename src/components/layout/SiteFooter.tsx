import type { SiteConfig } from '../../types/app'

interface SiteFooterProps {
  config: SiteConfig
}

export function SiteFooter({ config }: SiteFooterProps) {
  return (
    <footer className="mt-20 text-center">
      <p className="text-xs tracking-widest text-zinc-600">
        CREATED WITH{' '}
        <span className="text-rose-500" aria-label="love">
          ♥
        </span>{' '}
        BY{' '}
        <a
          href={config.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-500 transition-colors hover:text-zinc-300"
        >
          {config.name.toUpperCase()}
        </a>
      </p>
    </footer>
  )
}
