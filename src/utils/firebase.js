// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUiuYvQA0UMmzGEHkH6aE--tBkNsfH-WA",
  authDomain: "netflixgpt-e2525.firebaseapp.com",
  projectId: "netflixgpt-e2525",
  storageBucket: "netflixgpt-e2525.appspot.com",
  messagingSenderId: "491217879564",
  appId: "1:491217879564:web:35db82417ab925d2336429",
  measurementId: "G-GNFMYW9LTX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();