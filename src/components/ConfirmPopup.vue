<template>
  <a-button-group>
    <a-button @click="() => save(record.key)">Save</a-button>
    <a-popconfirm title="Sure to cancel?" @confirm="() => cancel(record.key)">
      <a-button type="danger">Cancel</a-button>
    </a-popconfirm>
  </a-button-group>
</template>

<script>
export default {
  props: ['record'],
  methods: {
    save(key) {
      this.$emit('save', key);
    },
    cancel(key) {
      this.$emit('cancel', key);
    },
  },
};
</script>

<style></style>
