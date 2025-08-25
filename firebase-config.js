// Configuração do Firebase
const firebaseConfig = { 
    apiKey: "AIzaSyCkttFoV_FoPn91ClE7xFiknFvs9pXaCoQ", 
    authDomain: "sigeb-ccd3f.firebaseapp.com", 
    databaseURL: "https://sigeb-ccd3f-default-rtdb.firebaseio.com", 
    projectId: "sigeb-ccd3f", 
    storageBucket: "sigeb-ccd3f.appspot.com", 
    messagingSenderId: "209689711066", 
    appId: "1:209689711066:web:5a99505e60bd34f29b70e3", 
    measurementId: "G-VJBDW2B7HZ" 
};

// Inicializar o Firebase
firebase.initializeApp(firebaseConfig);

// Exportar serviços do Firebase para uso em outros arquivos
const auth = firebase.auth();
const db = firebase.firestore();
// Remover a linha do storage até que o módulo seja importado
// const storage = firebase.storage();
const database = firebase.database();

// Configurações adicionais
auth.useDeviceLanguage();