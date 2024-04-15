// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAgLQJLOjUnqYNVdDnQQeJqr7AVQon1Z6s",
  authDomain: "online-digital-profile.firebaseapp.com",
  projectId: "online-digital-profile",
  storageBucket: "online-digital-profile.appspot.com",
  messagingSenderId: "275204053311",
  appId: "1:275204053311:web:7330cd057a9e76261f9b8a",
  measurementId: "G-FS5ER4Z13X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);