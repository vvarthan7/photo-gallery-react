// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";
import "firebase/compat/storage";
import "firebase/compat/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_API_KEY}`,
  authDomain: `${process.env.REACT_APP_AUTH_DOMAIN}`,
  projectId: "react-image-gallery-19081",
  storageBucket: "react-image-gallery-19081.appspot.com",
  messagingSenderId: "688536719364",
  appId: "1:688536719364:web:82344b1824a66a6e292551"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {projectFirestore, projectStorage, timestamp};