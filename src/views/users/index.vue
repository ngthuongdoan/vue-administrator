<template>
  <BaseLayout
    :columns="columns"
    :initData="initData"
    @target="bindTarget($event)"
  >
    <template #add-modal>
      <a-form layout="vertical">
        <a-form-item label="Full name">
          <a-input v-model="target.fullname" />
        </a-form-item>
        <a-form-item label="Username">
          <a-input v-model="target.username" />
        </a-form-item>
        <a-form-item label="Address">
          <a-input v-model="target.address" />
        </a-form-item>
        <a-form-item label="Phone">
          <a-input v-model="target.phone" />
        </a-form-item>
        <a-form-item label="Role">
          <a-radio-group
            v-model="target.role"
            default-value="default"
            button-style="solid"
          >
            <a-radio-button v-for="r in role" :key="r" :value="r">
              {{ r }}
            </a-radio-button>
          </a-radio-group>
        </a-form-item>
      </a-form>
    </template>
  </BaseLayout>
</template>

<script>
import { ref } from '@vue/composition-api';
import BaseLayout from '@/layouts/BaseLayout.vue';
import { user } from '@/common/columns/user';
import role from '@/common/role';
import { getAllUser } from '@/api/user';

export default {
  components: { BaseLayout },
  setup() {
    const columns = ref([...user]);
    let target = ref({
      username: '',
      fullname: '',
      phone: '',
      address: '',
      role: '',
    });

    const bindTarget = (t) => {
      target.value = { ...t.value };
    };

    return {
      columns,
      initData: getAllUser,
      bindTarget,
      target,
      role,
    };
  },
};
</script>
