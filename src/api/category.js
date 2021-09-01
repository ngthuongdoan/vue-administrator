// import request from '@/utils/request';
import { db } from '@/plugins/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

export const getAllCategory = async () => {
  const categoryCol = collection(db, 'category');
  const categorySnapshot = await getDocs(categoryCol);
  const cityList = categorySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return cityList;
};
