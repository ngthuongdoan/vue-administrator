<template>
  <a-layout-header class="p-0 bg-white flex items-center" title="Title">
    <a-icon
      class="
        text-base
        leading-10
        pl-6
        transition-colors
        duration-300
        hover:text-trigger
      "
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="$emit('toggle')"
    />
    <a-page-header :title="title" />
  </a-layout-header>
</template>

<script>
export default {
  props: {
    collapsed: {
      type: Boolean,
      required: true,
    },
  },
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
  computed: {
    title() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
