// Import the functions you need from the SDKs you need
const firebase = require('firebase/app');
require('firebase/firestore');

const firebaseConfig = {
  // Tu configuración de Firebase aquí
  apiKey: "AIzaSyAowptoropo9w3UQNSpqu1YVXmoGU--c6c",

  authDomain: "securityblockz.firebaseapp.com",

  databaseURL: "https://securityblockz-default-rtdb.firebaseio.com",

  projectId: "securityblockz",

  storageBucket: "securityblockz.appspot.com",

  messagingSenderId: "280389825",

  appId: "1:280389825:web:69f72319b3cae1cc124c40",

  measurementId: "G-61B2QW15L0"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

