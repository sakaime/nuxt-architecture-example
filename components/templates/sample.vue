<template>
  <user-registration-modal></user-registration-modal>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import UserRegistrationModal from '~/components/organisms/user-registration-modal/user-registratoin-modal.vue'

@Component({
  components: {
    UserRegistrationModal,
  },
})
export default class SampleTemplate extends Vue {}
</script>
