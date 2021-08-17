<template>
  <div>
    <a-button type="primary" icon="plus" class="button mb-2"> Add </a-button>
    <a-table
      :columns="columns"
      :data-source="data"
      :pagination="{ pageSize: 5 }"
      bordered
    >
      <!-- Render basic data -->
      <template
        v-for="col in ['name', 'age', 'address']"
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
            {{ text }}
          </template>
        </div>
      </template>
      <template slot="operation" slot-scope="text, record">
        <div>
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
import baseMixin from '@/mixins/table';

export default {
  mixins: [baseMixin],
  mounted() {
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

    this.data = [];
    for (let i = 0; i < 100; i++) {
      this.data.push({
        key: i.toString(),
        name: `Edrward ${i}`,
        Description: '',
      });
    }
  },
};
</script>
