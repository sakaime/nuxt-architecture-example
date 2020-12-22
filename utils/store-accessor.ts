/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Users from '~/store/users'

let UsersStore: Users
const initializesStores = (store: Store<any>): void => {
  UsersStore = getModule(Users, store)
}

export { initializesStores, UsersStore }
