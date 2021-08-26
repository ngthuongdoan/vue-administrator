export default function (data, showModal, closeModal) {
  const edit = (id) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];
    if (target) {
      showModal(target);
    }
  };

  const save = (id, cb = () => {}) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];

    data.value = [...newData];

    cb(target.id, target);
    closeModal();
  };

  const cancel = (id) => {
    const newData = [...data.value];
    const target = newData.filter((item) => id === item.id)[0];
    if (target) {
      closeModal();
      data.value = [...newData];
    }
  };

  return { edit, save, cancel };
}
