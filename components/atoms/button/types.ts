const Variant = {
  Primary: 'primary',
  Secondary: 'secondary',
  Success: 'success',
  Danger: 'danger',
  Warning: 'warning',
  Info: 'info',
  Dark: 'dark',
  OutlinePrimary: 'outline-primary',
  OutlineSecondary: 'outline-secondary',
  OutlineSuccess: 'outline-success',
  OutlineDanger: 'outline-danger',
  OutlineWarning: 'outline-warning',
  OutlineInfo: 'outline-info',
  OutlineLight: 'outline-light',
  OutlineDark: 'outline-dark',
  Link: 'link',
} as const

type Variant = typeof Variant[keyof typeof Variant]

export type ButtonProps = {
  id?: string
  variant: Variant
  text: string
  disabled: boolean
  onClick?: () => void
}
