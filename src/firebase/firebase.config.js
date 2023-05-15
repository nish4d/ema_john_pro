// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhuKf_TSeLK0rLqR28l0PG5cMuB1WLHgI",
  authDomain: "ema-john-with-firebase-a-b594c.firebaseapp.com",
  projectId: "ema-john-with-firebase-a-b594c",
  storageBucket: "ema-john-with-firebase-a-b594c.appspot.com",
  messagingSenderId: "555639200274",
  appId: "1:555639200274:web:6b7cad4522771694a596cb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;