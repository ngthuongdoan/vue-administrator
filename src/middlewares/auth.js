import store from '../store';
import { getToken } from '../utils/auth';

const checkLoginRoute = ({ next, to }) => {
  if (to.path === '/login') {
    return next({ path: '/' });
  } else {
    return checkPermission({ next, to });
  }
};

const checkPermission = ({ next, to }) => {
  if (to.meta.role) {
    const role = store.getters['User/getData'].role;
    return role === to.meta.role ? next() : next({ name: 'Dashboard' });
  }
  return next();
};
export default function auth({ next, to }) {
  const hasToken = getToken();

  if (hasToken) {
    // Have token on local storage
    if (store.getters['User/getToken']) {
      return checkLoginRoute({ next, to });
    } else {
      store.commit('User/setToken', hasToken);
      return checkLoginRoute({ next, to });
    }
  } else {
    // Don't have token on local storage
    return next({ name: 'Login' });
  }
}
