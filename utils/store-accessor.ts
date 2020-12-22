/* eslint-disable import/no-mutable-exports */
import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import Users from '~/store/users'

let UserStore: Users
const initializeStores = (store: Store<any>): void => {
  UserStore = getModule(Users, store)
}

export { initializeStores, UserStore }
