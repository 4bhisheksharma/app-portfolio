import { apps } from '../../data/apps'
import { ClosedTestingModal } from './ClosedTestingModal'

interface PulseTestingModalProps {
  open: boolean
  onClose: () => void
}

const pulseApp = apps.find((a) => a.id === 'pulse') || {
  id: 'pulse',
  number: '02',
  tag: 'Voice',
  category: 'Time Capsule',
  name: 'P.U.L.S.E',
  description: 'A local-first voice time-capsule app.',
  accent: 'rose' as const,
  icon: 'pulse' as const,
  status: 'closed_testing' as const,
  playStoreUrl: 'https://play.google.com/store/apps/details?id=com.abhishek.app.pulse',
}

export function PulseTestingModal({ open, onClose }: PulseTestingModalProps) {
  return <ClosedTestingModal app={pulseApp} open={open} onClose={onClose} />
}
