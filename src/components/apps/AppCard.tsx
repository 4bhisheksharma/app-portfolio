import { motion } from 'framer-motion'
import type { App, AppStatus } from '../../types/app'
import { AppIcon } from './AppIcon'
import { StoreLinks } from './StoreLinks'

interface AppCardProps {
  app: App
  index: number
  /** Staggered entrance; only used on first load so filtering doesn't replay it. */
  stagger: boolean
}

const statusMeta: Record<AppStatus, { label: string; dot: string }> = {
  live: { label: 'Live', dot: 'bg-accent' },
  closed_testing: { label: 'Testing', dot: 'bg-amber-300' },
  coming_soon: { label: 'Soon', dot: 'bg-faint' },
}

export function AppCard({ app, index, stagger }: AppCardProps) {
  const status = statusMeta[app.status]

  return (
    <motion.article
      initial={stagger ? { opacity: 0, y: 18 } : false}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.45 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="group -mx-3 my-2 flex gap-4 rounded-2xl px-3 py-5 transition-colors duration-500 hover:bg-white/[0.025] sm:gap-5 sm:py-6"
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
          <h2 className="text-lg font-medium tracking-tight">{app.name}</h2>
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
