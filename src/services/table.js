import { ref } from '@vue/composition-api';

export default function (data) {
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
    editingKey.value = id;
    if (target) {
      target.editable = true;
      data.value = [...newData];
    }
  };

  const save = (id, cb = () => {}) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];

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
      delete target.editable;
      data.value = [...newData];
    }
  };

  return { editingKey, handleChange, edit, save, cancel };
}
