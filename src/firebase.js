import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"; 
import { GoogleAuthProvider,getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBr_BD_LIdX96KDpOZLv6ZY2kvjLXdfcVA",
  authDomain: "g-clone-fd0b8.firebaseapp.com",
  projectId: "g-clone-fd0b8",
  storageBucket: "g-clone-fd0b8.appspot.com",
  messagingSenderId: "1095147715413",
  appId: "1:1095147715413:web:cbfcc0ab89cb7974af4ddc",
  measurementId: "G-X3KRCSTZNW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider();