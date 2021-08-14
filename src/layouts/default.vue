<template>
  <v-app>
    <SideBar></SideBar>
     <v-main>
      <router-view />
      <UserInfo></UserInfo>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import SideBar from './components/SideBar.vue';

@Component({
  components: {
    SideBar,
  },
})
export default class DefaultLayout extends Vue {}
</script>
