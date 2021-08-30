import request from '@/utils/request';

const URL = '/post';
export const getAllPosts = () => {
  return request.get(URL);
};

export const updatePost = (id, newData) => {
  return request({
    url: URL + '/' + id,
    method: 'put',
    data: { ...newData },
  });
};
