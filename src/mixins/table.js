import ConfirmPopup from '@/components/ConfirmPopup.vue';

export default {
  components: { ConfirmPopup },
  data() {
    return {
      cacheData: [],
      data: [],
      columns: [],
      editingKey: '',
    };
  },
  methods: {
    handleChange(value, id, column) {
      const newData = [...this.data];
      const target = newData.filter((item) => id === item.id)[0];
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    edit(id) {
      const newData = [...this.data];
      const target = newData.filter((item) => id === item.id)[0];
      this.editingKey = id;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(id, cb) {
      const newData = [...this.data];
      // const newCacheData = [...this.cacheData];
      const target = newData.filter((item) => id === item.id)[0];
      // const targetCache = newCacheData.filter((item) => id === item.id)[0];
      // if (target && targetCache) {
      //   delete target.editable;
      //   this.data = newData;
      //   Object.assign(targetCache, target);
      //   this.cacheData = newCacheData;
      // }
      delete target.editable;
      this.editingKey = '';
      cb(target.id, target);
    },
    cancel(id) {
      const newData = [...this.data];
      const target = newData.filter((item) => id === item.id)[0];
      this.editingKey = '';
      if (target) {
        Object.assign(
          target,
          this.cacheData.filter((item) => id === item.key)[0]
        );
        delete target.editable;
        this.data = newData;
      }
    },
  },
};
