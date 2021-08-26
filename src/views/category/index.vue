<template>
  <BaseLayout
    :columns="columns"
    :initData="initData"
    @target="bindTarget($event)"
  >
    <template #add-modal>
      <a-form layout="vertical">
        <a-form-item label="Name">
          <a-input v-model="target.name" />
        </a-form-item>
        <a-form-item label="Description">
          <a-input v-model="target.description" />
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
    let target = ref({ name: '', description: '' });

    const bindTarget = (t) => {
      target.value = { ...t.value };
    };
    return {
      columns,
      initData: getAllCategory,
      bindTarget,
      target,
    };
  },
};
</script>
