<template>
  <div>
    <a-modal
      title="Create"
      :visible="visible"
      :confirm-loading="confirmLoading"
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
      @click="showModal"
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
      <template
        v-for="col in filterColumns"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            :value="text"
            class="w-fit my-1"
            @change="(e) => handleChange(e.target.value, record.id, col)"
          />
          <!-- Render data with no edit -->
          <span class="capitalize" v-else>
            {{ text }}
          </span>
        </div>
      </template>
      <template slot="role" slot-scope="text">
        <a-tag>{{ text }}</a-tag>
      </template>
      <template slot="operation" slot-scope="text, record">
        <!-- Render pop up confirm -->
        <ConfirmPopup
          v-if="record.editable"
          :record="record"
          @save="saveEdit(record.id)"
          @cancel="cancel(record.id)"
        ></ConfirmPopup>
        <span v-else>
          <a-button
            type="primary"
            class="button"
            icon="edit"
            size="small"
            :disabled="editingKey !== ''"
            @click="edit(record.id)"
          >
            Edit
          </a-button>
        </span>
      </template>
    </a-table>
  </div>
</template>
<script>
import useTable from '@/services/table';
import useModal from '@/services/modal';
import useError from '@/services/error';
import ConfirmPopup from '@/components/ConfirmPopup.vue';
import { ref } from '@vue/composition-api';

export default {
  props: ['columns', 'initData'],
  components: { ConfirmPopup },
  setup(props) {
    // Error
    const { error, errorText, createError } = useError();

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

    const { editingKey, handleChange, edit, save, cancel } = useTable(data);

    const saveEdit = (id) => {
      save(id);
    };
    // Modal
    const { visible, confirmLoading, showModal, closeModal } = useModal();
    const add = () => {
      closeModal();
    };

    return {
      //Error
      error,
      errorText,
      //Table
      data,
      filterColumns,
      editingKey,
      handleChange,
      edit,
      saveEdit,
      cancel,
      //Modal
      visible,
      confirmLoading,
      showModal,
      closeModal,
      add,
    };
  },
};
</script>
