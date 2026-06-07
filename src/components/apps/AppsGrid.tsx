import { useRef } from 'react'
import type { App } from '../../types/app'
import { ScrollControls } from '../ui/ScrollControls'
import { AppCard } from './AppCard'

interface AppsGridProps {
  apps: App[]
}

export function AppsGrid({ apps }: AppsGridProps) {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (direction: 'left' | 'right') => {
    const container = scrollRef.current
    if (!container) return

    const card = container.querySelector('article')
    const scrollAmount = card ? card.clientWidth + 24 : 320
    container.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    })
  }

  return (
    <div>
      <ScrollControls
        onScrollLeft={() => scroll('left')}
        onScrollRight={() => scroll('right')}
      />
      <div
        ref={scrollRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] lg:grid lg:grid-cols-2 lg:overflow-visible lg:pb-0 xl:grid-cols-4 [&::-webkit-scrollbar]:hidden"
      >
        {apps.map((app) => (
          <AppCard key={app.id} app={app} />
        ))}
      </div>
    </div>
  )
}
