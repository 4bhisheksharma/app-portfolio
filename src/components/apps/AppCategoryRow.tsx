import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'

interface AppCategoryRowProps {
  app: App
}

export function AppCategoryRow({ app }: AppCategoryRowProps) {
  const accent = accentStyles[app.accent]

  return (
    <p className={`mt-1 text-xs font-medium ${accent.text}`}>
      {app.tag}
      <span className="mx-1.5 text-zinc-700">·</span>
      <span className="text-zinc-500">{app.category}</span>
    </p>
  )
}
