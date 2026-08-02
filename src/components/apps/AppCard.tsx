import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'
import { AppCategoryRow } from './AppCategoryRow'
import { StoreLinks } from './StoreLinks'

interface AppCardProps {
  app: App
}

function StatusPill({ app }: { app: App }) {
  if (app.status === 'coming_soon') {
    return (
      <span className="rounded-full bg-zinc-800 px-2.5 py-0.5 text-[11px] font-medium text-zinc-500">
        Coming soon
      </span>
    )
  }

  if (app.status === 'closed_testing') {
    return (
      <span className="rounded-full bg-rose-500/10 px-2.5 py-0.5 text-[11px] font-medium text-rose-400">
        Closed testing
      </span>
    )
  }

  return (
    <span className="rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-[11px] font-medium text-emerald-400">
      Available
    </span>
  )
}

export function AppCard({ app }: AppCardProps) {
  const accent = accentStyles[app.accent]

  return (
    <article className="flex w-[85vw] shrink-0 snap-center flex-col rounded-2xl border border-zinc-800/60 bg-zinc-900/40 p-6 transition-colors hover:border-zinc-700/80 sm:w-auto sm:shrink">
      <div className="flex items-start gap-4">
        {app.iconImage ? (
          <img
            src={app.iconImage}
            alt={`${app.name} icon`}
            className="h-16 w-16 shrink-0 rounded-2xl border border-zinc-800 object-cover"
          />
        ) : (
          <div
            className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl border ${accent.border} ${accent.bg}`}
          >
            <span className={`text-lg font-semibold ${accent.text}`}>{app.number}</span>
          </div>
        )}

        <div className="min-w-0 flex-1">
          <div className="flex items-start justify-between gap-2">
            <h2 className="text-lg font-semibold tracking-tight text-white">{app.name}</h2>
            <StatusPill app={app} />
          </div>
          <AppCategoryRow app={app} />
        </div>
      </div>

      <p className="mt-4 flex-1 text-sm leading-relaxed text-zinc-500">{app.description}</p>
      <StoreLinks app={app} />
    </article>
  )
}
