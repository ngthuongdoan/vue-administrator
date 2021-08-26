import store from '../store';

export default function auth({ next, router }) {
  if (!localStorage.getItem('jwt') && !store.getters['User/getToken']) {
    return router.push({ path: 'login' });
  } else {
    store.commit('User/setToken', localStorage.getItem('jwt'));
    return next();
  }
}
