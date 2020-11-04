import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";

var firebaseConfig = {
  apiKey: "AIzaSyC2dvXETaWAKvop95lbISedlh2oGXXx6Kc",
  authDomain: "olxwebappclone.firebaseapp.com",
  databaseURL: "https://olxwebappclone.firebaseio.com",
  projectId: "olxwebappclone",
  storageBucket: "olxwebappclone.appspot.com",
  messagingSenderId: "930927886257",
  appId: "1:930927886257:web:1b3f1789bcd2cfcf328790",
  measurementId: "G-BVWEBNG1MP",
};

export default firebase.initializeApp(firebaseConfig);
