<template>
  <BaseLayout
    :columns="columns"
    :data="data"
    :error="error"
    :errorText="errorText"
  >
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
import useError from '@/services/error';
import { getAllCategory, updateCategory } from '@/api/category';
import { ref, onMounted } from '@vue/composition-api';
export default {
  components: { BaseLayout },
  setup() {
    let data = ref([]);
    const { error, errorText, createError } = useError();
    onMounted(async () => {
      try {
        data.value = await getAllCategory();
      } catch (e) {
        createError(e);
      }
    });
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

    const saveFunction = async (id, data) => {
      await updateCategory(id, data);
      data.value = await getAllCategory();
    };

    return {
      data,
      columns,
      saveFunction,
      error,
      errorText,
    };
  },
};
</script>
