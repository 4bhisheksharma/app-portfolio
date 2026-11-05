import { useState } from 'react'
import { motion } from 'framer-motion'
import type { App, AppStatus } from '../../types/app'
import { AppIcon } from './AppIcon'
import { StoreLinks } from './StoreLinks'

interface AppCardProps {
  app: App
  index: number
  /** Staggered entrance; only used on first load so filtering doesn't replay it. */
  stagger: boolean
  /** Briefly emphasised after arriving from a deep link (#app-id). */
  highlighted?: boolean
  /** Callback when card or its hash link is clicked to highlight and update URL */
  onSelect?: (appId: string) => void
}

const statusMeta: Record<AppStatus, { label: string; dot: string }> = {
  live: { label: 'Live', dot: 'bg-accent' },
  closed_testing: { label: 'Testing', dot: 'bg-amber-300' },
  coming_soon: { label: 'Soon', dot: 'bg-faint' },
}

export function AppCard({ app, index, stagger, highlighted = false, onSelect }: AppCardProps) {
  const status = statusMeta[app.status]
  const [copied, setCopied] = useState(false)

  const handleLinkClick = (e: React.MouseEvent) => {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) {
      return
    }
    e.preventDefault()
    // Update hash and trigger selection
    if (window.location.hash !== `#${app.id}`) {
      window.history.pushState(null, '', `#${app.id}`)
      window.dispatchEvent(new HashChangeEvent('hashchange'))
    }
    onSelect?.(app.id)

    // Also copy direct link to clipboard for convenience
    const fullUrl = `${window.location.origin}${window.location.pathname}#${app.id}`
    navigator.clipboard?.writeText(fullUrl).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <motion.article
      id={app.id}
      initial={stagger ? { opacity: 0, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className={`group -mx-3 my-2 flex scroll-mt-36 gap-4 rounded-2xl px-3 py-5 transition-[background-color,box-shadow,transform] duration-500 sm:gap-5 sm:py-6 ${
        highlighted
          ? 'bg-accent/[0.08] ring-2 ring-accent animate-highlight-glow shadow-[0_0_35px_rgba(106,255,157,0.3)]'
          : 'hover:bg-white/[0.025]'
      }`}
    >
      {app.iconImage ? (
        <img
          src={app.iconImage}
          alt={`${app.name} icon`}
          width={56}
          height={56}
          loading="lazy"
          className="h-14 w-14 shrink-0 rounded-[1.1rem] border border-white/[0.06] object-cover shadow-[0_8px_24px_-12px_rgba(0,0,0,0.8)] transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-3"
        />
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[1.1rem] border border-line bg-card text-muted transition-transform duration-500 ease-out group-hover:-translate-y-0.5 group-hover:-rotate-3">
          <AppIcon icon={app.icon} className="h-5 w-5" />
        </div>
      )}

      <div className="min-w-0 flex-1">
        <div className="flex items-baseline justify-between gap-3">
          <h2 className="flex min-w-0 items-center gap-2 text-lg font-medium tracking-tight">
            {/* the name doubles as a shareable link to this app */}
            <a
              href={`#${app.id}`}
              onClick={handleLinkClick}
              title={`Copy link to ${app.name} (#${app.id})`}
              className="group/name truncate flex items-center"
            >
              <span className="truncate">{app.name}</span>
              <span
                className={`ml-1.5 font-mono text-xs transition-opacity duration-300 ${
                  highlighted ? 'text-accent opacity-100 font-bold' : 'text-faint opacity-0 group-hover/name:opacity-100'
                }`}
                aria-hidden="true"
              >
                #
              </span>
            </a>
            {copied && (
              <span className="shrink-0 rounded bg-accent/20 px-1.5 py-0.5 font-mono text-[10px] text-accent border border-accent/30">
                Copied!
              </span>
            )}
            {highlighted && !copied && (
              <span className="shrink-0 rounded-full bg-accent/15 px-2 py-0.5 font-mono text-[10px] font-normal text-accent border border-accent/40 animate-pulse">
                Highlighted
              </span>
            )}
            {app.isNew && (
              <span className="shrink-0 rounded-full bg-accent/10 px-2 py-0.5 font-mono text-[10px] font-normal tracking-normal text-accent">
                New
              </span>
            )}
          </h2>
          <span className="flex shrink-0 items-center gap-1.5 font-mono text-[11px] text-muted">
            <span className={`h-1.5 w-1.5 rounded-full ${status.dot}`} aria-hidden="true" />
            {status.label}
          </span>
        </div>
        <p className="mt-0.5 text-[13px] text-faint">
          {app.tag} · {app.category}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-muted">{app.description}</p>
        <StoreLinks app={app} />
      </div>
    </motion.article>
  )
}
