// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQU3HVaFKHtHzOqN7fsueODDsw6J-86xs",
  authDomain: "realtor-clone-fe047.firebaseapp.com",
  projectId: "realtor-clone-fe047",
  storageBucket: "realtor-clone-fe047.appspot.com",
  messagingSenderId: "837306533363",
  appId: "1:837306533363:web:8a6a8cf82551459bc6be86",
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()