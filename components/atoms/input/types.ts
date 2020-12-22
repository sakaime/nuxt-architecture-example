const Type = {
  Text: 'text',
  Number: 'number',
  Email: 'email',
  Password: 'password',
  Search: 'search',
  Url: 'url',
  Tel: 'tel',
  Date: 'date',
  Time: 'time',
  Range: 'range',
  Color: 'color',
} as const

type Type = typeof Type[keyof typeof Type]

export type InputProps = {
  id?: string
  value: string
  placeholder?: string
  type: Type
  required: boolean
  onInput: (value: string) => void
}
