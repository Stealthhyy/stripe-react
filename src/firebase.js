import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyCZbqILuA6CnEEr57wgmspGBDqwcUDe8D8",
  authDomain: "stripe-1c289.firebaseapp.com",
  projectId: "stripe-1c289",
  storageBucket: "stripe-1c289.appspot.com",
  messagingSenderId: "169452717846",
  appId: "1:169452717846:web:e85bd7dfee6ff7747b3237",
  measurementId: "G-55RXG233ZN"
};

firebase.initializeApp(firebaseConfig)

export const db = firebase.firestore();
export const auth = firebase.auth();
