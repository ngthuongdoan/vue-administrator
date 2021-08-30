import router from '@/router';
export const setting = () => {};
export const logout = () => {
  router.push({ name: 'Login' });
};

export const sidebarFunctions = [
  {
    name: 'Setting',
    handler: 'setting',
    icon: 'icon-Settingscontroloptions',
  },
  {
    name: 'Logout',
    handler: 'logout',
    icon: 'icon-logout',
  },
];
