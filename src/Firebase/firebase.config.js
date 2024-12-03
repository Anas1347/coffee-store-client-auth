// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQHNWFx-z2QK2xVWzANALvw_KM7_Sl-ks",
  authDomain: "coffee-store-341a3.firebaseapp.com",
  projectId: "coffee-store-341a3",
  storageBucket: "coffee-store-341a3.firebasestorage.app",
  messagingSenderId: "299506498333",
  appId: "1:299506498333:web:9ee6a7ce20c436874a3ff4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export  const auth = getAuth(app);