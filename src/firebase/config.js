import firebase from 'firebase'
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// database or firebase
const firebaseConfig = {
    apiKey: "AIzaSyBh6Mj6NU1cKE43lP58xk4_ZIJ7OwiU-So",
    authDomain: "olx-clone-5b8e0.firebaseapp.com",
    projectId: "olx-clone-5b8e0",
    storageBucket: "olx-clone-5b8e0.appspot.com",
    messagingSenderId: "65623323428",
    appId: "1:65623323428:web:fdf7af3d65d00ed3f7f9b1"
  };


 export default firebase.initializeApp(firebaseConfig)