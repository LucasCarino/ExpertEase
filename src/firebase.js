// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmj6BH0Zz9BAuqLLbcZ8FkmrOnQQ2Mkpg",
  authDomain: "expertease-1a1a1.firebaseapp.com",
  projectId: "expertease-1a1a1",
  storageBucket: "expertease-1a1a1.appspot.com",
  messagingSenderId: "726979090628",
  appId: "1:726979090628:web:99254f8801cab53ba75191",
  measurementId: "G-LF6T42S3WJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
export { app, auth }