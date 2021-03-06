<template>
  <div>
    <a-modal
      title="Create"
      :visible="visible"
      :confirm-loading="confirmLoading"
      centered
      @ok="add"
      @cancel="closeModal"
    >
      <slot name="add-modal"></slot>
    </a-modal>
    <a-alert
      class="rounded mb-3"
      v-if="error"
      type="error"
      :message="errorText"
      banner
    />
    <a-button
      type="primary"
      icon="plus"
      :disabled="error"
      class="button mb-2"
      @click="addHandler()"
    >
      Add
    </a-button>
    <!-- Table -->
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 7 }"
      rowKey="id"
      bordered
    >
      <!-- Render basic data -->
      <template v-for="col in filterColumns" :slot="col" slot-scope="text">
        <div :key="col">
          <span class="capitalize">
            {{ text }}
          </span>
        </div>
      </template>
      <template slot="role" slot-scope="text">
        <a-tag>{{ text }}</a-tag>
      </template>
      <template slot="operation" slot-scope="text, record">
        <a-button
          type="primary"
          class="button"
          icon="edit"
          size="small"
          @click="edit(record.id)"
        >
          Edit
        </a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import useTable from '@/services/table';
import useModal from '@/services/modal';
import useError from '@/services/error';
import { ref, computed } from '@vue/composition-api';
import { useRoute } from '@/router/migrateRouterVue3';
export default {
  props: {
    columns: {
      type: Array,
      required: true,
    },
    type: {
      type: String,
      default: 'modal',
    },
    initData: {
      type: Function,
      required: true,
    },
  },
  setup(props, { emit, root }) {
    // Error
    const { error, errorText, createError } = useError();

    // Modal
    const { target, visible, confirmLoading, showModal, closeModal } =
      useModal(emit);
    const add = () => {
      closeModal();
    };

    // Table
    let data = ref([]);
    props
      .initData()
      .then((response) => (data.value = response))
      .catch((error) => createError(error));

    const unvalidFields = ['operation', 'role'];
    const filterColumns = props.columns
      .filter((col) => !unvalidFields.includes(col.title.toLowerCase()))
      .map((col) => col.title.toLowerCase());

    const { edit, save, cancel } = useTable(data, showModal, closeModal);

    const saveEdit = (id) => {
      save(id);
    };

    //Add Data
    const addHandler = () => {
      switch (props.type) {
        case 'modal':
          showModal(null);
          break;
        case 'blank': {
          const route = useRoute();
          const currentPath = computed(() => route.fullPath);
          root.$router.push(`${currentPath.value}/add`);
          break;
        }
      }
    };
    return {
      //Error
      error,
      errorText,
      //Table
      data,
      filterColumns,
      edit,
      saveEdit,
      cancel,
      //Modal
      visible,
      confirmLoading,
      showModal,
      closeModal,
      target,
      add,
      addHandler,
    };
  },
};
</script>
