import type { App } from '../../types/app'
import { accentStyles } from '../../utils/accent'

interface AppCategoryRowProps {
  app: App
}

export function AppCategoryRow({ app }: AppCategoryRowProps) {
  const accent = accentStyles[app.accent]

  return (
    <div className="mt-4 flex items-center justify-between text-xs tracking-wider">
      <span className={`font-medium ${accent.text}`}>{app.tag}</span>
      <span className="text-zinc-600">{app.category}</span>
    </div>
  )
}
