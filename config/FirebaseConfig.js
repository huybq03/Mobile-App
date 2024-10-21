// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore}from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.EXPO_PUBLIC_FIREBASE_API_KEY,
  authDomain: "my-app-9f326.firebaseapp.com",
  databaseURL: "https://my-app-9f326-default-rtdb.firebaseio.com",
  projectId: "my-app-9f326",
  storageBucket: "my-app-9f326.appspot.com",
  messagingSenderId: "782150902695",
  appId: "1:782150902695:web:1ad83aebf9c842a73b8c82",
  measurementId: "G-TRQDS74ZDF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app,'my-app')
// const analytics = getAnalytics(app);