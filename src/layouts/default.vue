<template>
  <a-layout id="components-layout-demo-custom-trigger">
    <SideBar :collapsed="collapsed"></SideBar>
    <a-layout>
      <AppBar @toggle="collapsed = !collapsed" :collapsed="collapsed"></AppBar>
      <a-layout-content
        :style="{
          margin: '24px 16px',
          padding: '24px',
          background: '#fff',
          minHeight: '280px',
        }"
      >
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
<style>
#components-layout-demo-custom-trigger {
  height: 100%;
}
#components-layout-demo-custom-trigger .trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

#components-layout-demo-custom-trigger .trigger:hover {
  color: #1890ff;
}

#components-layout-demo-custom-trigger .logo {
  background: rgba(255, 255, 255, 0.2);
  margin: 16px;
}
</style>
