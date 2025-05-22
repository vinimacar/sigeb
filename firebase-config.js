// Firebase configuration
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

// Initialize Firebase only if not already initialized
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialize services
const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();
const analytics = firebase.analytics();

// Export the services
export { auth, db, storage, analytics };
