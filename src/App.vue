<template>
  <div id="app">
    <component :is="layout"></component>
  </div>
</template>
<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';
import Default from '@/layouts/default.vue';

@Component({
  components: {
    Default,
  },
})
export default class App extends Vue {
  layout = 'default';
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
