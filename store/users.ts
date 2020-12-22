import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'
import { $repositories } from '@/plugins/repository'

type User = {
  id?: number
  password?: string
  email: string
}

@Module({
  name: 'users',
  stateFactory: true,
  namespaced: true,
})
export default class UserModule extends VuexModule {
  private users: User[] = []

  public get getUsers() {
    return this.users
  }

  public get getUser() {
    return (id: number) => this.users.find((user) => user.id === id)
  }

  @Mutation
  private add(user: User) {
    this.users.push(user)
  }

  @Mutation
  private set(users: User[]) {
    this.users = users
  }

  @Action({ rawError: true })
  public async createUser(payload: User) {
    const { data } = await $repositories.user.post(payload, 1)
    this.add(data)
  }
}
