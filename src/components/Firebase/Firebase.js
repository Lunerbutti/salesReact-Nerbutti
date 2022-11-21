import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBk5YkUDzaqLGjyHo_jh3I_MGXOgEpSayM",
  authDomain: "sales-react-nerbutti-coder.firebaseapp.com",
  projectId: "sales-react-nerbutti-coder",
  storageBucket: "sales-react-nerbutti-coder.appspot.com",
  messagingSenderId: "1084290010362",
  appId: "1:1084290010362:web:c33d8588164c64b9694d43"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);