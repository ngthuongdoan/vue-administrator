<template>
  <a-layout class="h-full">
    <SideBar :collapsed="collapsed"></SideBar>
    <a-layout>
      <AppBar @toggle="collapsed = !collapsed" :collapsed="collapsed"></AppBar>
      <a-layout-content class="p-6 bg-white overflow-auto">
        <router-view></router-view>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import AppBar from './components/AppBar.vue';
import SideBar from './components/SideBar.vue';

export default {
  components: { SideBar, AppBar },
  data() {
    return {
      collapsed: false,
    };
  },
};
</script>
