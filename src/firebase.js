
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyD96HvOdHmjnzgo3MgJ2cFmB-gIBmgKLuk",
  authDomain: "flipkart-clone-c25c5.firebaseapp.com",
  projectId: "flipkart-clone-c25c5",
  storageBucket: "flipkart-clone-c25c5.appspot.com",
  messagingSenderId: "518384906114",
  appId: "1:518384906114:web:9e0d596f5304712e99699b",
  measurementId: "G-H88B6FXF5R",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
