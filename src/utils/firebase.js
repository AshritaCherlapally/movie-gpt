// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCFID1FgGzTYBu5nZmNTnh3yQMgPYmGdOA",
  authDomain: "moviegpt-defa8.firebaseapp.com",
  projectId: "moviegpt-defa8",
  storageBucket: "moviegpt-defa8.appspot.com",
  messagingSenderId: "955865649982",
  appId: "1:955865649982:web:4141c76b9a402bbd19926f",
  measurementId: "G-3WLD360GMJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
