<template>
  <a-layout-sider v-model="collapsed" :trigger="null" collapsible>
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item v-for="(item, index) in menu" :key="index">
        <router-link :to="item.path" class="flex items-center">
          <icon-font :type="item.icon"></icon-font>
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
    <a-divider class="bg-gray-400 opacity-50" />
    <a-menu theme="dark" mode="inline" :default-selected-keys="['1']">
      <a-menu-item v-for="(item, index) in sidebarFunctions" :key="index">
        <router-link :to="item.path" class="flex items-center">
          <icon-font :type="item.icon"></icon-font>
          <span>{{ item.name }}</span>
        </router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script>
import { menu } from '@/common/menu';
import { sidebarFunctions } from '@/common/sidebarFunctions';
import { Icon } from 'ant-design-vue';
const IconFont = Icon.createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2746195_kz9og3tdbrr.js',
});

export default {
  components: {
    IconFont,
  },
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      menu,
      sidebarFunctions,
    };
  },
};
</script>

<style></style>
