import store from '../store';
import { getToken } from '../utils/auth';

export default function auth({ next, router }) {
  if (!getToken() && !store.getters['User/getToken']) {
    return router.push({ name: 'Login' });
  } else {
    store.commit('User/setToken', getToken());
    return next();
  }
}
