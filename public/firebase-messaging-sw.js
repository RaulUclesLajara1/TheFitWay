importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyB4x7AhuIgBiKSqAyKoRg33aVkx5GHlZds",
  authDomain: "thefitway-1b3a2.firebaseapp.com",
  projectId: "thefitway-1b3a2",
  storageBucket: "thefitway-1b3a2.firebasestorage.app",
  messagingSenderId: "659877094896",
  appId: "1:659877094896:web:dd50dd18768f24a6dca935"
});

const messaging = firebase.messaging();