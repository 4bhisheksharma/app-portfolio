import { useState } from 'react'
import type { App } from '../../types/app'
import { ExternalLink } from '../ui/ExternalLink'
import { PulseTestingModal } from './PulseTestingModal'

interface StoreLinksProps {
  app: App
}

function StoreBadge({
  children,
  href,
  onClick,
  disabled,
}: {
  children: React.ReactNode
  href?: string
  onClick?: () => void
  disabled?: boolean
}) {
  const base =
    'inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-colors'

  if (disabled) {
    return (
      <span className={`${base} border-zinc-800/60 bg-zinc-900/40 text-zinc-600`}>
        {children}
      </span>
    )
  }

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        className={`${base} border-zinc-700/60 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white`}
      >
        {children}
      </button>
    )
  }

  if (href) {
    return (
      <ExternalLink
        href={href}
        className={`${base} border-zinc-700/60 bg-zinc-800/50 text-zinc-300 hover:border-zinc-600 hover:bg-zinc-800 hover:text-white`}
      >
        {children}
      </ExternalLink>
    )
  }

  return null
}

export function StoreLinks({ app }: StoreLinksProps) {
  const [modalOpen, setModalOpen] = useState(false)
  const isComingSoon = app.status === 'coming_soon'
  const isClosedTesting = app.closedTesting || app.status === 'closed_testing'

  const handlePlayClick = () => {
    if (isClosedTesting) {
      setModalOpen(true)
      return
    }
    if (app.playStoreUrl) {
      window.open(app.playStoreUrl, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <>
      <div className="mt-6 flex flex-wrap gap-2 border-t border-zinc-800/80 pt-5">
        {isComingSoon ? (
          <StoreBadge disabled>Coming soon</StoreBadge>
        ) : (
          <>
            {app.playStoreUrl && (
              <StoreBadge onClick={isClosedTesting ? handlePlayClick : undefined} href={!isClosedTesting ? app.playStoreUrl : undefined}>
                Google Play
                {isClosedTesting && (
                  <span className="rounded bg-rose-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase text-rose-400">
                    Closed
                  </span>
                )}
              </StoreBadge>
            )}

            {app.websiteUrl && (
              <StoreBadge href={app.websiteUrl}>Website</StoreBadge>
            )}

            {app.chromeStoreUrl && (
              <StoreBadge href={app.chromeStoreUrl}>Chrome</StoreBadge>
            )}

            {app.appStoreUrl ? (
              <StoreBadge href={app.appStoreUrl}>App Store</StoreBadge>
            ) : app.iosComingSoon ? (
              <StoreBadge disabled>
                iOS
                <span className="text-zinc-600">· Soon</span>
              </StoreBadge>
            ) : null}

            {isClosedTesting && (
              <StoreBadge onClick={() => setModalOpen(true)}>
                Join testing
              </StoreBadge>
            )}
          </>
        )}
      </div>

      {isClosedTesting && (
        <PulseTestingModal open={modalOpen} onClose={() => setModalOpen(false)} />
      )}
    </>
  )
}
