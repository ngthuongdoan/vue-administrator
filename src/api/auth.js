import request from '@/utils/request';
import store from '@/store';

const URL = '/auth';
export const login = (user) => {
  return request({
    url: URL + '/login',
    method: 'post',
    data: { ...user },
  });
};

export const logout = () => {
  return request({
    url: URL + '/logout',
    method: 'post',
    data: { ...store.getters['User/getData'] },
  });
};

export const register = (user) => {
  return request({
    url: URL + '/register',
    method: 'post',
    data: { ...user },
  });
};
