<template>
  <div>
    <a-modal
      title="Title"
      :visible="visible"
      :confirm-loading="confirmLoading"
      @ok="addCategory"
      @cancel="closeModal"
    >
      <TheForm></TheForm>
    </a-modal>
    <a-button type="primary" icon="plus" class="button mb-2" @click="showModal">
      Add
    </a-button>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 7 }"
      bordered
    >
      <!-- Render basic data -->
      <template
        v-for="col in ['name', 'description']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            :value="text"
            class="w-fit my-1"
            @change="(e) => handleChange(e.target.value, record.key, col)"
          />
          <!-- Render data with no edit -->
          <template v-else>
            <span class="capitalize">{{ text }}</span>
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div class="editable-row-operations">
          <!-- Render pop up confirm -->
          <ConfirmPopup
            v-if="record.editable"
            :record="record"
            @save="save"
            @cancel="cancel"
          ></ConfirmPopup>
          <span v-else>
            <a-button
              type="primary"
              class="button"
              icon="edit"
              size="small"
              :disabled="editingKey !== ''"
              @click="() => edit(record.key)"
            >
              Edit
            </a-button>
          </span>
        </div>
      </template>
    </a-table>
  </div>
</template>
<script>
import tableMixin from '@/mixins/table';
import modalMixin from '@/mixins/modal';
import TheForm from '@/components/TheForm.vue';
import { getAllCategory } from '@/api/category';
export default {
  components: { TheForm },
  mixins: [tableMixin, modalMixin],
  methods: {
    addCategory() {
      this.closeModal();
    },
  },
  async mounted() {
    this.columns = [
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
    ];

    this.data = await getAllCategory();
    this.cacheData = this.data.map((item) => ({ ...item }));
  },
};
</script>
