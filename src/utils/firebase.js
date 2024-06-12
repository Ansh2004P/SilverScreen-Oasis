// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCJ21V20zgjG2QnHz2LovtKTxggJ_cNGkc",
  authDomain: "netflix-d7941.firebaseapp.com",
  projectId: "netflix-d7941",
  storageBucket: "netflix-d7941.appspot.com",
  messagingSenderId: "611784184817",
  appId: "1:611784184817:web:93cca29980d6a4fe56ea50",
  measurementId: "G-CQQH3CJFHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();