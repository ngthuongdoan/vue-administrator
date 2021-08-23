import { ref } from '@vue/composition-api';

export default function (data) {
  let cacheData = ref([]);
  let editingKey = ref('');

  const handleChange = (value, id, column) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];
    if (target) {
      target[column] = value;
      data.value = newData;
    }
  };
  const edit = (id) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];
    console.log('🚀 ----------------------------------------------------');
    console.log('🚀 ~ file: table.js ~ line 17 ~ edit ~ target', target);
    console.log('🚀 ----------------------------------------------------');
    editingKey.value = id;
    if (target) {
      target.editable = true;
      data.value = [...newData];
    }
    console.log('🚀 ------------------------------------------------');
    console.log('🚀 ~ file: table.js ~ line 15 ~ edit ~ data', data.value);
    console.log('🚀 ------------------------------------------------');
  };

  const save = (id, cb) => {
    const newData = [...data.value];
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
    editingKey.value = '';
    data.value = [...newData];

    cb(target.id, target);
  };
  const cancel = (id) => {
    const newData = [...data.value];

    const target = newData.filter((item) => id === item.id)[0];
    editingKey.value = '';
    if (target) {
      Object.assign(
        target,
        cacheData.value.filter((item) => id === item.key)[0]
      );
      delete target.editable;
      data.value = [...newData];
    }
  };
  return { cacheData, editingKey, handleChange, edit, save, cancel };
}
