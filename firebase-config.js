
// Inicializar Firebase
firebase.initializeApp(firebaseConfig);
const database = firebase.database();

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCkttFoV_FoPn91ClE7xFiknFvs9pXaCoQ",
  authDomain: "sigeb-ccd3f.firebaseapp.com",
  databaseURL: "https://sigeb-ccd3f-default-rtdb.firebaseio.com",
  projectId: "sigeb-ccd3f",
  storageBucket: "sigeb-ccd3f.firebasestorage.app",
  messagingSenderId: "209689711066",
  appId: "1:209689711066:web:5a99505e60bd34f29b70e3",
  measurementId: "G-VJBDW2B7HZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);