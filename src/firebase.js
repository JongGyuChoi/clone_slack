import firebase from "firebase";
//
const firebaseConfig = {
  apiKey: "AIzaSyCmQtfoGeTj60VLROSPhAFMx3EnWbvA8q0",
  authDomain: "slack-clone-f9b33.firebaseapp.com",
  projectId: "slack-clone-f9b33",
  storageBucket: "slack-clone-f9b33.appspot.com",
  messagingSenderId: "37155094766",
  appId: "1:37155094766:web:241d86608bc2ca1529f3ff",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
