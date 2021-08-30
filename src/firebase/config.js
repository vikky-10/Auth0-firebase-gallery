import firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyAyWuedJu5ZK_RaZDYlwrAxNJdKuKs3m4I",
  authDomain: "firegram-83003.firebaseapp.com",
  projectId: "firegram-83003",
  storageBucket: "firegram-83003.appspot.com",
  messagingSenderId: "951290116015",
  appId: "1:951290116015:web:1ed537549e183e6a35615a",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//for store images
const projectStorage = firebase.storage();
//for database
const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp };
