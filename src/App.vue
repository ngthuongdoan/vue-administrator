<template>
  <DefaultLayout></DefaultLayout>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import DefaultLayout from '@/layouts/default.vue';
@Component({
  components: {
    DefaultLayout,
  },
})
export default class App extends Vue {}
</script>
