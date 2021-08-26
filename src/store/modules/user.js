export default {
  state: () => ({
    token: '',
    data: {},
  }),
  getters: {
    getToken(state) {
      return state.token;
    },
    getData(state) {
      return state.data;
    },
  },
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setData(state, data) {
      state.data = { ...data };
    },
  },
  actions: {},
  namespaced: true,
};
