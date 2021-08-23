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
  computed: {
    title() {
      return this.$route.name;
    },
  },
};
</script>

<style></style>
