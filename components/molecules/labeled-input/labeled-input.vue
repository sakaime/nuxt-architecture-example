<template>
  <b-form-group
    :label="props.label.text"
    :label-for="props.label.for"
    :description="props.label.description"
  >
    <input-component :props="inputData" />
  </b-form-group>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import InputComponent from '~/components/atoms/input/input.vue'
import { LabeledInputProps } from '~/components/molecules/labeled-input/types'
import { InputProps } from '~/components/atoms/input/types'

@Component({
  components: {
    InputComponent,
  },
})
export default class LabeledInput extends Vue {
  @Prop({ type: Object, required: true })
  private readonly props!: LabeledInputProps

  private get inputData(): InputProps {
    return {
      id: this.props.input.id,
      value: this.props.input.value,
      placeholder: this.props.input.placeholder,
      type: this.props.input.type,
      required: this.props.input.required,
      onInput: this.props.input.onInput,
    }
  }
}
</script>
