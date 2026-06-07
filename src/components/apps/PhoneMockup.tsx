import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'

interface PhoneMockupProps {
  app: App
}

export function PhoneMockup({ app }: PhoneMockupProps) {
  const accent = accentStyles[app.accent]

  if (app.screenshot) {
    return (
      <div className="mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900">
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
      className={`relative mt-6 overflow-hidden rounded-2xl border border-zinc-800 bg-gradient-to-b ${accent.gradient}`}
    >
      <div className="flex aspect-[9/16] flex-col items-center justify-center gap-3 p-6">
        <div className="h-16 w-16 rounded-2xl border border-zinc-700/50 bg-zinc-800/50" />
        <div className="h-2 w-24 rounded-full bg-zinc-700/50" />
        <div className="h-2 w-32 rounded-full bg-zinc-700/30" />
        <div className="mt-4 h-2 w-20 rounded-full bg-zinc-700/20" />
        <span className="mt-6 rounded-full border border-zinc-700/50 bg-zinc-900/60 px-3 py-1 text-xs tracking-widest text-zinc-500">
          COMING SOON
        </span>
      </div>
      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-zinc-950/80 to-transparent" />
    </div>
  )
}
