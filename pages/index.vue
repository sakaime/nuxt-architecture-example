<template>
  <div class="container">
    <sample-template></sample-template>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'nuxt-property-decorator'
import SampleTemplate from '~/components/templates/sample.vue'

@Component({
  components: {
    SampleTemplate,
  },
})
export default class IndexPage extends Vue {}
</script>
