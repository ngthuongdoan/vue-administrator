import request from '@/utils/request';

const URL = '/user';
export const getAllUser = () => {
  return request.get(URL);
};

export const updateUser = (id, newData) => {
  return request({
    url: URL + '/' + id,
    method: 'put',
    data: { ...newData },
  });
};
