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
import { user } from '@/common/columns/user';
import { getAllUser } from '@/api/user';
export default {
  components: { BaseLayout },
  setup() {
    const columns = ref([...user]);
    return {
      columns,
      initData: getAllUser,
    };
  },
};
</script>
