import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import {getMessaging } from "firebase/messaging";


// Script de configuración con información de la cuenta de firebase (todo aparece en la consola al iniciar proyecto)
const firebaseConfig = {

  apiKey: import.meta.env.VITE_API_KEY,

  authDomain: "thefitway-1b3a2.firebaseapp.com",

  databaseURL: "https://thefitway-1b3a2-default-rtdb.firebaseio.com",

  projectId: "thefitway-1b3a2",

  storageBucket: "thefitway-1b3a2.firebasestorage.app",

  messagingSenderId: "659877094896",

  appId: "1:659877094896:web:dd50dd18768f24a6dca935",

  measurementId: "G-ZRFFW5WLCX"

};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app); //Obtener el objeto user de firebase
export const messaging = getMessaging(app); //Enviar mensajes 