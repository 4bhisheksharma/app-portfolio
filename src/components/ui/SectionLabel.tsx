interface SectionLabelProps {
  label: string
}

export function SectionLabel({ label }: SectionLabelProps) {
  return (
    <p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-600">
      {label}
    </p>
  )
}
