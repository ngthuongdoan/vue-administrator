import store from '../store';
import { currentUser } from '@/api/auth';

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
  const user = currentUser();
  if (user) {
    return checkLoginRoute({ next, to });
  } else {
    return next({ name: 'Login' });
  }
}
