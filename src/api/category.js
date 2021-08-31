// import request from '@/utils/request';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '@/plugins/firebase';

// const URL = '/category';
export const getAllCategory = async () => {
  // return request.get(URL);
  const categoryCol = collection(db, 'category');
  const categorySnapshot = await getDocs(categoryCol);
  const cityList = categorySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cityList;
};

// export const updateCategory = (id, newData) => {
// return request({
//   url: URL + '/' + id,
//   method: 'put',
//   data: { ...newData },
// });
//
// };
