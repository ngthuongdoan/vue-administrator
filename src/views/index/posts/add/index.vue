<template>
  <Editor
    :initialValue="editorText"
    :options="editorOptions"
    height="500px"
    initialEditType="markdown"
    previewStyle="tab"
    ref="toastuiEditor"
    class="text-base"
  />
</template>
<script>
import editorOptions from '@/common/editorOptions';
import { Editor } from '@toast-ui/vue-editor';

export default {
  components: {
    Editor,
  },
  data() {
    return {
      editorText: 'This is initialValue.',
      editorOptions,
    };
  },
};
</script>
