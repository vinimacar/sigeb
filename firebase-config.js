// Importa o Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/database';

// Configuração do Firebase (você já forneceu a configuração)
export const firebaseConfig = { 
    apiKey: "AIzaSyCkttFoV_FoPn91ClE7xFiknFvs9pXaCoQ", 
    authDomain: "sigeb-ccd3f.firebaseapp.com", 
    databaseURL: "https://sigeb-ccd3f-default-rtdb.firebaseio.com", 
    projectId: "sigeb-ccd3f", 
    storageBucket: "sigeb-ccd3f.appspot.com", 
    messagingSenderId: "209689711066", 
    appId: "1:209689711066:web:5a99505e60bd34f29b70e3", 
    measurementId: "G-VJBDW2B7HZ" 
};

// Verifica se o Firebase já foi inicializado, se não, inicializa
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);  // Inicializa o Firebase com as configurações fornecidas
} else {
    firebase.app();  // Se já estiver inicializado, usa a instância existente
}
