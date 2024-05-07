
import firebase from "firebase/compat/app"
import  "firebase/compat/firestore";

import {getAuth} from 'firebase/auth';
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyBqyCB_AOO4HjpCmYjiP_vxC7fEOPlAHLo",
  authDomain: "react-shopping-cart-18425.firebaseapp.com",
  projectId: "react-shopping-cart-18425",
  storageBucket: "react-shopping-cart-18425.appspot.com",
  messagingSenderId: "228498220224",
  appId: "1:228498220224:web:50e113f7229d3dbf1a7925"
};
const app = firebase.initializeApp(firebaseConfig)
export const mydatabase = firebase.firestore();

export const auth = getAuth(app);
export const authProvider = new GoogleAuthProvider();
