import ROLE from './role';
export const menuConfig = {
  [ROLE.ADMIN]: [
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: 'icon-dashboard',
    },
    {
      name: 'Category',
      path: 'category',
      icon: 'icon-category',
    },
    {
      name: 'Products',
      path: 'products',
      icon: 'icon-clothes',
    },
    {
      name: 'Posts',
      path: 'posts',
      icon: 'icon-article',
    },
    {
      name: 'Users',
      path: 'users',
      icon: 'icon-user',
    },
    {
      name: 'Promotions',
      path: 'promotions',
      icon: 'icon-BIG_PROMOTION',
    },
    {
      name: 'Analytics',
      path: 'analytics',
      icon: 'icon-Poll',
    },
  ],
  [ROLE.DEFAULT]: [
    {
      name: 'Dashboard',
      path: 'dashboard',
      icon: 'icon-dashboard',
    },
    {
      name: 'Category',
      path: 'category',
      icon: 'icon-category',
    },
    {
      name: 'Products',
      path: 'products',
      icon: 'icon-clothes',
    },
    {
      name: 'Posts',
      path: 'posts',
      icon: 'icon-article',
    },
    {
      name: 'Promotions',
      path: 'promotions',
      icon: 'icon-BIG_PROMOTION',
    },
  ],
};
