<template>
  <v-navigation-drawer app dark permanent expand-on-hover>
    <v-list nav dense>
      <v-list-item
        v-for="item in menu"
        :key="item.path"
        v-model="selectedItem"
        link
        color="primary"
      >
        <v-list-item-icon>
          <v-icon left>{{ item.icon }}</v-icon>
        </v-list-item-icon>
        <v-list-item-title>
          {{ item.name }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-divider></v-divider>

      <v-list nav dense>
        <v-list-item
          v-for="item in sidebarFunctions"
          :key="item.path"
          v-model="selectedItem"
          link
          color="primary"
        >
          <v-list-item-icon>
            <v-icon left>{{ item.icon }}</v-icon>
          </v-list-item-icon>
          <v-list-item-title>
            {{ item.name }}
          </v-list-item-title>
        </v-list-item>
      </v-list>
    </template>
  </v-navigation-drawer>
</template>

<script>
import { menu } from '@/common/menu';
import { sidebarFunctions } from '@/common/sidebarFunctions';
export default {
  data() {
    return {
      menu,
      sidebarFunctions,
    };
  },
};
</script>

<style></style>
