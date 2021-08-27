import { ref } from '@vue/composition-api';

export default function () {
  let error = ref(false);
  let errorText = ref('');

  const createError = (e) => {
    error.value = true;
    errorText.value = e.response.statusText;
  };
  const removeError = () => {
    error.value = false;
    errorText.value = '';
  };
  return {
    error,
    errorText,
    createError,
    removeError,
  };
}
