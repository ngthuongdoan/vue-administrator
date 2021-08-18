import request from '@/utils/request';

const URL = '/category';
export const getAllCategory = () => {
  return request.get(URL);
};
