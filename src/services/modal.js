import { ref } from '@vue/composition-api';

export default function (emit) {
  let visible = ref(false);
  let confirmLoading = ref(false);
  let target = ref({});

  const showModal = (t = null) => {
    visible.value = true;
    target.value = t;
    emit('target', target);
  };
  const closeModal = () => {
    visible.value = false;
  };
  return {
    target,
    visible,
    confirmLoading,
    showModal,
    closeModal,
  };
}
