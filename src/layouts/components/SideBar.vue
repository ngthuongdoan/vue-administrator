<template>
  <v-navigation-drawer dark permanent expand-on-hover>
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

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { menu as commonMenu } from '@/common/menu';
import { sidebarFunctions as commonSideBarFunctions } from '@/common/sidebarFunctions';
@Component
export default class SideBar extends Vue {
  private menu = commonMenu;
  private sidebarFunctions = commonSideBarFunctions;
}
</script>

<style></style>
