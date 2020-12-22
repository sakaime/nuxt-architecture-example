type User = {
  id?: number
  password?: string
  email: string
}

export type UserRegistrationFormProps = {
  register: (payload: User) => void
  result: {
    users: User[]
  }
}
