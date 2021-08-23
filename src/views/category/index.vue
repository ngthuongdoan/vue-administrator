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
import BaseLayout from '@/layouts/BaseLayout.vue';
import { getAllCategory } from '@/api/category';
import { ref } from '@vue/composition-api';
export default {
  components: { BaseLayout },
  setup() {
    const columns = ref([
      {
        title: 'Name',
        dataIndex: 'name',
        scopedSlots: { customRender: 'name' },
      },
      {
        title: 'Description',
        dataIndex: 'description',
        scopedSlots: { customRender: 'description' },
      },
      {
        title: 'Operation',
        dataIndex: 'operation',
        scopedSlots: { customRender: 'operation' },
      },
    ]);

    return {
      columns,
      initData: getAllCategory,
    };
  },
};
</script>
