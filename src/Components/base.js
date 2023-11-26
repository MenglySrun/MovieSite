import * as firebase from 'firebase/app'
import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyCIcSBIZm9xTqd9-YKNmbH-OU3EmGJuHHQ",
  authDomain: "movie-site-b8ea1.firebaseapp.com",
  projectId: "movie-site-b8ea1",
  storageBucket: "movie-site-b8ea1.appspot.com",
  messagingSenderId: "1068822498211",
  appId: "1:1068822498211:web:e1e638cfc1ecaddf82e816"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth