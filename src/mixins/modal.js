export default {
  data() {
    return {
      ModalText: 'Content of the modal',
      visible: false,
      confirmLoading: false,
    };
  },
  methods: {
    showModal() {
      this.visible = true;
    },
    handleOk() {
      this.ModalText = 'The modal will be closed after two seconds';
      this.confirmLoading = true;
      setTimeout(() => {
        this.visible = false;
        this.confirmLoading = false;
      }, 2000);
    },
    handleCancel() {
      console.log('Clicked cancel button');
      this.visible = false;
    },
  },
};
