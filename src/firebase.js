import firebase from "firebase";
require('firebase/auth')
require('firebase/database')

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBAittA8NI3d-7OP6HlPAQi2GTVwA2WwUs",
    authDomain: "clone-a6171.firebaseapp.com",
    databaseURL: "https://clone-a6171.firebaseio.com",
    projectId: "clone-a6171",
    storageBucket: "clone-a6171.appspot.com",
    messagingSenderId: "259550699560",
    appId: "1:259550699560:web:81f6445e3d02a27b46951d",
    measurementId: "G-C0VX2QCZ3R"
})

const db = firebaseApp.firestore();
const auth = firebase.default.auth();

export {db, auth};