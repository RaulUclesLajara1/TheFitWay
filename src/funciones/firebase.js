import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "thefitway-be8d4.firebaseapp.com",

  projectId: "thefitway-be8d4",

  storageBucket: "thefitway-be8d4.firebasestorage.app",

  messagingSenderId: "1077600517257",

  appId: "1:1077600517257:web:e460b2bef22fef93015a58",

  measurementId: "G-3RYN3EG5J0"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);