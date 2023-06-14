
// Import the functions you need from the SDKs you need
import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore"
import cred from './numeric-ion-279609-3f6622eeeca2.js'

const firebaseConfig = {
  apiKey: "AIzaSyB8zq4Z1_HMx4s3-tl3fcCMFhr-HYdmuNc",
  authDomain: "numeric-ion-279609.firebaseapp.com",
  projectId: "numeric-ion-279609",
  storageBucket: "numeric-ion-279609.appspot.com",
  messagingSenderId: "1092552959856",
  appId: "1:1092552959856:web:ac12c6cfa597219ada91b5",
  measurementId: "G-PFDWC999JR",
  credential: cert(cred)
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export default db