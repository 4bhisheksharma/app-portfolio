import type { AppAccent } from '../types/app'

export const accentStyles: Record<
  AppAccent,
  { bg: string; text: string; border: string; glow: string; gradient: string }
> = {
  orange: {
    bg: 'bg-orange-500/15',
    text: 'text-orange-400',
    border: 'border-orange-500/20',
    glow: 'hover:shadow-orange-500/10',
    gradient: 'from-orange-500/20 via-orange-900/10 to-zinc-900',
  },
  emerald: {
    bg: 'bg-emerald-500/15',
    text: 'text-emerald-400',
    border: 'border-emerald-500/20',
    glow: 'hover:shadow-emerald-500/10',
    gradient: 'from-emerald-500/20 via-emerald-900/10 to-zinc-900',
  },
  violet: {
    bg: 'bg-violet-500/15',
    text: 'text-violet-400',
    border: 'border-violet-500/20',
    glow: 'hover:shadow-violet-500/10',
    gradient: 'from-violet-500/20 via-violet-900/10 to-zinc-900',
  },
  rose: {
    bg: 'bg-rose-500/15',
    text: 'text-rose-400',
    border: 'border-rose-500/20',
    glow: 'hover:shadow-rose-500/10',
    gradient: 'from-rose-500/20 via-rose-900/10 to-zinc-900',
  },
}
