import { reactive } from '@vue/composition-api';
import router from './index';

const currentRoute = reactive({
  ...router.currentRoute,
});

router.beforeEach((to, from, next) => {
  Object.keys(to).forEach((key) => {
    currentRoute[key] = to[key];
  });
  next();
});

export function useRoute() {
  return currentRoute;
}
