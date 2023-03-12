// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCRZxOedpCqXB7D1070H7_6ovCi-wLrYhU",
  authDomain: "zerosa-fb626.firebaseapp.com",
  projectId: "zerosa-fb626",
  storageBucket: "zerosa-fb626.appspot.com",
  messagingSenderId: "1097512151410",
  appId: "1:1097512151410:web:9002d144a0d599b715d5eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);