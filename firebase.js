import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDMCVWjtJSRbxvhqSo7dxa9Gj6CRjCfzBA",
  authDomain: "chartapp-2bcc5.firebaseapp.com",
  projectId: "chartapp-2bcc5",
  storageBucket: "chartapp-2bcc5.appspot.com",
  messagingSenderId: "546717983242",
  appId: "1:546717983242:web:74c724caaa542d3bd435f3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
