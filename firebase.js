// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCiNipH-O9SZ9A4PL8AkLdDGYKDFUaOYVg",
  authDomain: "inventory-management-cd6df.firebaseapp.com",
  projectId: "inventory-management-cd6df",
  storageBucket: "inventory-management-cd6df.appspot.com",
  messagingSenderId: "832900430965",
  appId: "1:832900430965:web:24bd095e2141b8a6b34c3c",
  measurementId: "G-C50G15CC86",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
