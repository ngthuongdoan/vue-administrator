import Vue from 'vue';
import VueRouter from 'vue-router';
import auth from '@/middlewares/auth';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/dashboard/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/analytics',
    component: () => import('@/views/analytics/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/category',
    component: () => import('@/views/category/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/posts',
    component: () => import('@/views/posts/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/products',
    component: () => import('@/views/products/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/promotions',
    component: () => import('@/views/promotions/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/users',
    component: () => import('@/views/users/index.vue'),
    meta: {
      middleware: [auth],
    },
  },
  {
    path: '/login',
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/dashboard',
    redirect: '/',
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

// Creates a `nextMiddleware()` function which not only
// runs the default `next()` callback but also triggers
// the subsequent Middleware function.
function nextFactory(context, middleware, index) {
  const subsequentMiddleware = middleware[index];
  // If no subsequent Middleware exists,
  // the default `next()` callback is returned.
  if (!subsequentMiddleware) return context.next;

  return (...parameters) => {
    // Run the default Vue Router `next()` callback first.
    context.next(...parameters);
    // Then run the subsequent Middleware with a new
    // `nextMiddleware()` callback.
    const nextMiddleware = nextFactory(context, middleware, index + 1);
    subsequentMiddleware({ ...context, next: nextMiddleware });
  };
}

router.beforeEach((to, from, next) => {
  if (to.meta?.middleware) {
    const middleware = Array.isArray(to.meta.middleware)
      ? to.meta.middleware
      : [to.meta.middleware];

    const context = {
      from,
      next,
      router,
      to,
    };
    const nextMiddleware = nextFactory(context, middleware, 1);

    return middleware[0]({ ...context, next: nextMiddleware });
  }

  return next();
});
export default router;
