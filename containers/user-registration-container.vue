<template>
  <div>
    <slot :register="register" :users="users"></slot>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import { UsersStore } from '~/store'

type User = {
  id?: number
  password?: string
  email: string
}

@Component
export default class UserRegistration extends Vue {
  private get users(): User[] {
    return UsersStore.getUsers
  }

  private register = async (User: User) => await UsersStore.createUser(User)
}
</script>
