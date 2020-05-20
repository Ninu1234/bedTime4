import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyCQxJGpEgJU-ArvB-MMiAxESJ3ZZiiJhcw",
  authDomain: "bedtime-e1d8c.firebaseapp.com",
  databaseURL: "https://bedtime-e1d8c.firebaseio.com",
  projectId: "bedtime-e1d8c",
  storageBucket: "bedtime-e1d8c.appspot.com",
  messagingSenderId: "699480466329",
  appId: "1:699480466329:web:6a00d8642b894407c82908"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()                                   
