<template>
  <b-form-input
    :id="props.id"
    v-model="inputValue"
    :placeholder="props.placeholder"
    :type="props.type"
    :required="props.required"
  ></b-form-input>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { InputProps } from '~/components/atoms/input/types'

@Component
export default class InputComponent extends Vue {
  @Prop({ type: Object, required: true })
  private readonly props!: InputProps

  private get inputValue(): string {
    return this.props.value
  }

  private set inputValue(value: string) {
    this.props.onInput(value)
  }
}
</script>
