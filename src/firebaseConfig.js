import firebase from 'firebase'

import firebaseConfig from './fbConfig'
// Configurações básicas fornecidas pelo site do firebase
// var firebaseConfig = {
//     apiKey: "",
//     authDomain: "",
//     databaseURL: "",
//     projectId: "",
//     storageBucket: "",
//     messagingSenderId: "",
//     appId: "",
//     measurementId: ""
//   };

// Initialize Firebase
export default firebase.initializeApp(firebaseConfig);