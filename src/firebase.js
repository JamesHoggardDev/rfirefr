import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBaAq7iz9pC-UIrpxu4yhCa8H8D6_DGDWw",
  authDomain: "fireactform.firebaseapp.com",
  projectId: "fireactform",
  storageBucket: "fireactform.appspot.com",
  messagingSenderId: "1072690362261",
  appId: "1:1072690362261:web:cbd654577d3fc7cf8ca89c",
  measurementId: "G-HRJGEZ0PJC"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(a);