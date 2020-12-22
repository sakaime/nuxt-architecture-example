<template>
  <div class="d-flex mt-4 justify-content-center">
    <button-component :props="modalButtonData">Register User</button-component>

    <b-modal :ref="modalName" title="User Registration" hide-footer>
      <user-registration-container #default="slotProps">
        <user-registration-form :props="slotProps"></user-registration-form>
      </user-registration-container>
    </b-modal>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ButtonComponent from '~/components/atoms/button/button.vue'
import { ButtonProps } from '~/components/atoms/button/types'
import UserRegistrationForm from '~/components/organisms/user-registration-form/user-registration-form.vue'
import UserRegistrationContainer from '~/containers/user-registration-container.vue'

@Component({
  components: {
    ButtonComponent,
    UserRegistrationForm,
    UserRegistrationContainer,
  },
})
export default class UserRegistrationModal extends Vue {
  private modalName: string = 'user-registration-modal'

  private modalButtonData: ButtonProps = {
    id: 'toggle-button',
    variant: 'primary',
    text: 'To User Registration',
    disabled: false,
    onClick: this.toggleModal,
  }

  private get refs(): any {
    return this.$refs
  }

  private toggleModal(): void {
    this.refs[this.modalName].toggle(`#${this.modalButtonData.id}`)
  }
}
</script>
