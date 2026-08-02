import type { SiteConfig } from '../../types/app'

interface SiteFooterProps {
  config: SiteConfig
}

export function SiteFooter({ config }: SiteFooterProps) {
  return (
    <footer className="mt-16 border-t border-zinc-800/80 pt-8 text-center">
      <p className="text-sm text-zinc-600">
        Built by{' '}
        <a
          href={config.portfolioUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="font-medium text-zinc-400 underline-offset-2 transition-colors hover:text-zinc-200 hover:underline"
        >
          {config.name}
        </a>
      </p>
    </footer>
  )
}
