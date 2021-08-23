import { ref } from '@vue/composition-api';

export default function () {
  let error = ref(false);
  let errorText = ref('');

  const createError = (e) => {
    error.value = true;
    errorText.value = e.message;
  };
  const removeError = (e) => {
    error.value = false;
    errorText.value = e.message;
  };
  return {
    error,
    errorText,
    createError,
    removeError,
  };
}
