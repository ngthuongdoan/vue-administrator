<template>
  <v-app-bar app dense>
    <v-breadcrumbs :items="items"></v-breadcrumbs>
    <v-spacer></v-spacer>
    <v-btn plain>
      <v-icon left>mdi-account-settings</v-icon>
      Admin
    </v-btn>
  </v-app-bar>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Dashboard',
          disabled: false,
          href: 'breadcrumbs_dashboard',
        },
        {
          text: 'Link 1',
          disabled: false,
          href: 'breadcrumbs_link_1',
        },
        {
          text: 'Link 2',
          disabled: true,
          href: 'breadcrumbs_link_2',
        },
      ],
    };
  },
};
</script>

<style></style>
