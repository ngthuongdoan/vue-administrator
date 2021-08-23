<template>
  <BaseLayout :columns="columns" :initData="initData">
    <template #add-modal>
      <a-form layout="vertical">
        <a-form-item label="Name">
          <a-input />
        </a-form-item>
        <a-form-item label="Description">
          <a-input />
        </a-form-item>
      </a-form>
    </template>
  </BaseLayout>
</template>

<script>
import { ref } from '@vue/composition-api';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { category } from '@/common/columns/category';
import { getAllCategory } from '@/api/category';
export default {
  components: { BaseLayout },
  setup() {
    const columns = ref([...category]);
    return {
      columns,
      initData: getAllCategory,
    };
  },
};
</script>
