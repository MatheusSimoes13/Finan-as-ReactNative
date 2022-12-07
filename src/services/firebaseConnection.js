import { initializeApp } from "firebase/app";

const API_KEY = process.env.API_KEY
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "reactnativefirebase-de561.firebaseapp.com",
  databaseURL: "https://reactnativefirebase-de561-default-rtdb.firebaseio.com",
  projectId: "reactnativefirebase-de561",
  storageBucket: "reactnativefirebase-de561.appspot.com",
  messagingSenderId: "264451843151",
  appId: "1:264451843151:web:3af25c91a65e41d188f63a"
};

// const app = initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig)
