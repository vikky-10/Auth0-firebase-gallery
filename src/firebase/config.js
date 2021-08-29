import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
var firebaseConfig = {
  apiKey: "AIzaSyAWLo6Tou_Fbb5VLHV0MU9ulqF2u8LiNJI",
  authDomain: "firestore-demo-c79b1.firebaseapp.com",
  projectId: "firestore-demo-c79b1",
  storageBucket: "firestore-demo-c79b1.appspot.com",
  messagingSenderId: "548610059645",
  appId: "1:548610059645:web:bece2bb80d615339d7b014",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//for store images
const projectStorage = firebase.storage();
//for database
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore };
