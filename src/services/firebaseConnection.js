import { initializeApp } from "firebase/app";
import 'firebase/auth'
import { getAuth } from "firebase/auth";
import 'firebase/database'
import { getDatabase, ref } from "firebase/database";

const API_KEY = process.env.API_KEY
const firebaseConfig = {
  apiKey: "AIzaSyBCn5rULCr9oN4BCloB-GgeqiLtaUgluAA",
  authDomain: "reactnativefirebase-de561.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-de561-default-rtdb.firebaseio.com",
  projectId: "reactnativefirebase-de561",
  storageBucket: "reactnativefirebase-de561.appspot.com",
  messagingSenderId: "264451843151",
  appId: "1:264451843151:web:3af25c91a65e41d188f63a"
};

// const app = initializeApp(firebaseConfig);
export const app = initializeApp(firebaseConfig)
export const database = ref(getDatabase())
export const auth = getAuth()
