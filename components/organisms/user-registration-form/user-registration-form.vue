<template>
  <div>
    <b-form>
      <labeled-input :props="emailFieldData" />
      <labeled-input :props="passwordFieldData" />
      <div class="mt-4 float-right">
        <button-component :props="submitButtonData" />
        <button-component :props="resetButtonData" />
      </div>
    </b-form>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import LabeledInput from '~/components/molecules/labeled-input/labeled-input.vue'
import { LabeledInputProps } from '~/components/molecules/labeled-input/types'
import ButtonComponent from '~/components/atoms/button/button.vue'
import { ButtonProps } from '~/components/atoms/button/types'
import { UserRegistrationFormProps } from '~/components/organisms/user-registration-form/types'

@Component({
  components: {
    LabeledInput,
    ButtonComponent,
  },
})
export default class UserRegistrationForm extends Vue {
  @Prop({ type: Object, required: true })
  private readonly props!: UserRegistrationFormProps

  private emailFieldData: LabeledInputProps = {
    label: {
      text: 'Email',
      for: 'email',
    },
    input: {
      id: 'email',
      value: '',
      type: 'email',
      required: true,
      onInput: (value) => {
        this.$set(this.emailFieldData.input, 'value', value)
      },
    },
  }

  private passwordFieldData: LabeledInputProps = {
    label: {
      text: 'Password',
      for: 'password',
    },
    input: {
      id: 'password',
      value: '',
      type: 'password',
      required: true,
      onInput: (value) =>
        this.$set(this.passwordFieldData.input, 'value', value),
    },
  }

  private submitButtonData: ButtonProps = {
    variant: 'primary',
    text: 'Submit',
    disabled: false,
    onClick: () => {
      this.props.register({
        password: this.passwordFieldData.input.value,
        email: this.emailFieldData.input.value,
      })
    },
  }

  private resetButtonData: ButtonProps = {
    variant: 'danger',
    text: 'Reset',
    disabled: false,
    onClick: this.resetForm,
  }

  private resetForm() {
    this.$set(this.emailFieldData.input, 'value', '')
    this.$set(this.passwordFieldData.input, 'value', '')
  }
}
</script>
