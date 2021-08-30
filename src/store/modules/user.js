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
    clear() {
      this.commit('setData', {});
      this.commit('setToken', '');
    },
  },
  actions: {},
  namespaced: true,
};
