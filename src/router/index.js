import Vue from 'vue';
import VueRouter from 'vue-router';
import auth from '@/middlewares/auth';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/views/index/index.vue'),
    meta: {
      middleware: [auth],
    },
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        redirect: '/',
        middleware: [auth],
      },
      {
        path: 'analytics',
        component: () => import('@/views/index/analytics/index.vue'),
        name: 'Analytics',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'category',
        component: () => import('@/views/index/category/index.vue'),
        name: 'Category',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'posts',
        component: () => import('@/views/index/posts/index.vue'),
        name: 'Posts',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'products',
        component: () => import('@/views/index/products/index.vue'),
        name: 'Products',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'promotions',
        component: () => import('@/views/index/promotions/index.vue'),
        name: 'Promotions',
        meta: {
          middleware: [auth],
        },
      },
      {
        path: 'users',
        component: () => import('@/views/index/users/index.vue'),
        name: 'Users',
        meta: {
          middleware: [auth],
        },
      },
    ],
  },
  {
    path: '/auth',
    component: () => import('@/views/auth/index.vue'),
    children: [
      {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/auth/login/index.vue'),
      },
      {
        path: '/register',
        name: 'Register',
        component: () => import('@/views/auth/register/index.vue'),
      },
    ],
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
