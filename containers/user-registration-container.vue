<template>
  <div>
    <slot :register="register" :users="users"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UserStore } from '~/store'

type User = {
  id?: number
  password?: string
  email: string
}

@Component
export default class UserRegistration extends Vue {
  private get users(): User[] {
    return UserStore.getUsers
  }

  private register = async (User: User) => await UserStore.createUser(User)
}
</script>
