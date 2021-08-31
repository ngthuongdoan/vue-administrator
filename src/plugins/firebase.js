// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
import { getFirestore } from 'firebase/firestore/lite';
import { getStorage } from 'firebase/storage';
import { getAuth } from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyALGnv18JJNvAjwzqX54bydHRyy7Zh0LLw',
  authDomain: 'thuongdadev.firebaseapp.com',
  projectId: 'thuongdadev',
  storageBucket: 'thuongdadev.appspot.com',
  messagingSenderId: '915420489248',
  appId: '1:915420489248:web:b0bd695814bcb094763e45',
  measurementId: 'G-13JQERPBWV',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage = getStorage(app);
export const auth = getAuth(app);
