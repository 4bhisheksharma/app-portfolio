import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'
import { AppIcon } from './AppIcon'

interface AppCardHeaderProps {
  app: App
}

export function AppCardHeader({ app }: AppCardHeaderProps) {
  const accent = accentStyles[app.accent]

  return (
    <div className="flex items-start justify-between">
      <div
        className={`flex h-10 w-10 items-center justify-center rounded-xl border ${accent.bg} ${accent.border} ${accent.text}`}
      >
        <AppIcon icon={app.icon} />
      </div>
      <span className="font-mono text-sm text-zinc-600">{app.number}</span>
    </div>
  )
}
