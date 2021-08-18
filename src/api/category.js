import request from '@/utils/request';

const URL = '/category';
export const getAllCategory = () => {
  return request.get(URL);
};

export const updateCategory = (id, newData) => {
  return request({
    url: URL + '/' + id,
    method: 'put',
    data: { ...newData },
  });
};
