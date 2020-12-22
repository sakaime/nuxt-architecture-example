import { Store } from 'vuex'
import { initializesStores } from '~/utils/store-accessor'

const initializer = (store: Store<any>) => initializesStores(store)

export const plugins = [initializer]
export * from '@/utils/store-accessor'
