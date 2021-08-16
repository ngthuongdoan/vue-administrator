<template>
  <a-layout-header
    class="flex items-center"
    style="background: #fff; padding: 0"
  >
    <a-icon
      class="trigger"
      :type="collapsed ? 'menu-unfold' : 'menu-fold'"
      @click="$emit('toggle')"
    />
    <a-breadcrumb>
      <a-breadcrumb-item>
        <router-link to="/">
          <a-icon type="home" />
        </router-link>
      </a-breadcrumb-item>
      <a-breadcrumb-item>
        <router-link to="/category">
          <span>Category</span>
        </router-link>
      </a-breadcrumb-item>
    </a-breadcrumb>
  </a-layout-header>
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
