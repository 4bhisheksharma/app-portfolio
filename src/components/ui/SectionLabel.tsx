interface SectionLabelProps {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="font-mono text-xs tracking-widest text-zinc-500">
      {'// '}
      {label}
    </p>
  )
}
