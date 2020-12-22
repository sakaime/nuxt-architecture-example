import { Context } from '@nuxt/types'
import { UserRepository } from '~/api/repositories/user'

export interface Repositories {
  user: UserRepository
}

// eslint-disable-next-line import/no-mutable-exports
let $repositories: Repositories

export default (ctx: Context, inject: any) => {
  const user = new UserRepository(ctx.$axios)
  const repositories: Repositories = {
    user,
  }
  $repositories = repositories
  inject('repositories', repositories)
}

export { $repositories }
