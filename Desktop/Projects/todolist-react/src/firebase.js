import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = firebase.initializeApp({
  apiKey: "AIzaSyDmzhBgcdhjXKm_bhT38Jff_iJPkKMy8Wc",
  authDomain: "todoist-5bc7e.firebaseapp.com",
  databaseURL: "https://todoist-5bc7e.firebaseio.com",
  projectId: "todoist-5bc7e",
  storageBucket: "todoist-5bc7e.appspot.com",
  messagingSenderId: "307361966863",
  appId: "1:307361966863:web:18b9a75be699b04f4a6c7a"
});

export { firebaseConfig as firebase };
