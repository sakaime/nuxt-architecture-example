<template>
  <b-button
    :variant="props.variant"
    :disabled="props.disabled"
    @click="props.onClick"
    >{{ props.text }}</b-button
  >
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { ButtonProps } from '~/components/atoms/button/types'

@Component
export default class ButtonComponent extends Vue {
  @Prop({ type: Object, required: true })
  private readonly props!: ButtonProps
}
</script>
