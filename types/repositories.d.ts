import { Repositories } from '~/plugins/repository-factory'

declare module 'vue/types/vue' {
  interface Vue {
    readonly $repositories: Repositories
  }
}

declare module 'vuex' {
  interface Store<S> {
    readonly $repositories: Repositories
  }
}
