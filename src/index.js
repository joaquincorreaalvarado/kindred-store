import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: "AIzaSyD-fchVmNh_81xdpCGqmsYn4wHKykz07ew",

  authDomain: "kindredstore-1de8f.firebaseapp.com",

  projectId: "kindredstore-1de8f",

  storageBucket: "kindredstore-1de8f.appspot.com",

  messagingSenderId: "363387774779",

  appId: "1:363387774779:web:4aabefb2913ddbf8dcb91e",
};

// Initialize Firebase

initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
