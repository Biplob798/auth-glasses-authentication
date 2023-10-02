import { initializeApp } from "firebase/app";

import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBxqReFFc-O14od_F3AqH5Bv6yUFPnAb9Y",
  authDomain: "react-firebase-auth-60241.firebaseapp.com",
  projectId: "react-firebase-auth-60241",
  storageBucket: "react-firebase-auth-60241.appspot.com",
  messagingSenderId: "213774378728",
  appId: "1:213774378728:web:69884acede13e37e6ecb5d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
