import { InputProps } from '~/components/atoms/input/types'

export type LabeledInputProps = {
  label: {
    text: string
    for: string
    description?: string
  }
  input: InputProps
}
