import { ref } from '@vue/composition-api';

export default function () {
  let visible = ref(false);
  let confirmLoading = ref(false);

  const showModal = () => {
    visible.value = true;
  };
  const closeModal = () => {
    visible.value = false;
  };
  return {
    visible,
    confirmLoading,
    showModal,
    closeModal,
  };
}
