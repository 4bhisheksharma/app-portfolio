import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'

interface PhoneMockupProps {
  app: App
}

export function PhoneMockup({ app }: PhoneMockupProps) {
  const accent = accentStyles[app.accent]

  if (app.screenshot) {
    return (
      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-950">
        <img
          src={app.screenshot}
          alt={`${app.name} screenshot`}
          className="h-auto w-full object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={`relative mt-6 overflow-hidden rounded-2xl border border-zinc-800/80 bg-zinc-950 ${accent.bg}`}
    >
      <div className="flex aspect-[9/16] flex-col items-center justify-center gap-3 p-6">
        <div
          className={`flex h-14 w-14 items-center justify-center rounded-2xl border ${accent.border} ${accent.bg}`}
        >
          <div className="h-6 w-6 rounded-md bg-zinc-700/50" />
        </div>
        <div className="h-2 w-24 rounded-full bg-zinc-800/80" />
        <div className="h-2 w-32 rounded-full bg-zinc-800/50" />
        <div className="mt-2 h-2 w-20 rounded-full bg-zinc-800/30" />
        <span className="mt-8 rounded-full border border-zinc-700/60 bg-zinc-900/80 px-4 py-1.5 text-[10px] font-medium tracking-[0.2em] text-zinc-500">
          COMING SOON
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950 to-transparent" />
    </div>
  )
}
