<template>
  <div class="container">
    <example-template></example-template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import ExampleTemplate from '~/components/templates/example.vue'

@Component({
  components: {
    ExampleTemplate,
  },
})
export default class IndexPage extends Vue {}
</script>
