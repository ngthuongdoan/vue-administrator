// import request from '@/utils/request';
import { auth, db } from '@/plugins/firebase';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore/lite';

const getUserData = async (id) => {
  const docRef = doc(db, 'users', id);
  const docSnap = await getDoc(docRef);
  return {
    id: docSnap.id,
    ...docSnap.data(),
  };
};
export const currentUser = () => {
  return auth.currentUser;
};
export const login = async (user) => {
  const userCredential = await signInWithEmailAndPassword(
    auth,
    user.email,
    user.password
  );
  const userData = await getUserData(userCredential.user.uid);
  return {
    user: userData,
    token: userCredential.user.accessToken,
  };
};

export const logout = () => {
  signOut(auth);
};
