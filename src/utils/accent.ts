import type { AppAccent } from '../types/app'

export const accentStyles: Record<
  AppAccent,
  { bg: string; text: string; border: string; ring: string }
> = {
  orange: {
    bg: 'bg-orange-500/10',
    text: 'text-orange-400',
    border: 'border-orange-500/20',
    ring: 'ring-orange-500/20',
  },
  emerald: {
    bg: 'bg-emerald-500/10',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    ring: 'ring-emerald-500/20',
  },
  violet: {
    bg: 'bg-violet-500/10',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    ring: 'ring-violet-500/20',
  },
  rose: {
    bg: 'bg-rose-500/10',
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    ring: 'ring-rose-500/20',
  },
  amber: {
    bg: 'bg-amber-500/10',
    text: 'text-amber-400',
    border: 'border-amber-500/20',
    ring: 'ring-amber-500/20',
  },
}
