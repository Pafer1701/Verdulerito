import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB0QGuYCaz5S4Fey4idpFWzgu01XRtAXBA",
    authDomain: "verdulerito-20043.firebaseapp.com",
    projectId: "verdulerito-20043",
    storageBucket: "verdulerito-20043.appspot.com",
    messagingSenderId: "161723191967",
    appId: "1:161723191967:web:d40784a66f6696e52b08aa",
    measurementId: "G-L0M6NLYGJD"
}; //this is where your firebase app values you copied will go

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)