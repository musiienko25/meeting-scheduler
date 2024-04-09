// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmM3cf6oG_5Uax6YySf2mX14k36etOPuA",
  authDomain: "meeting-scheduler-68bae.firebaseapp.com",
  projectId: "meeting-scheduler-68bae",
  storageBucket: "meeting-scheduler-68bae.appspot.com",
  messagingSenderId: "606993245988",
  appId: "1:606993245988:web:f223ac5f6b29b7a88335b1",
  measurementId: "G-BB9YMKL2S3",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
