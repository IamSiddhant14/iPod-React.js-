import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import firebase from 'firebase/app'
// import 'firebase/firestore';

// const firebaseConfig = {
//   apiKey: "AIzaSyAe8_bmMmCGyHT_cp_vEeWxgotw6a0iXD0",
//   authDomain: "ipod-66cf5.firebaseapp.com",
//   projectId: "ipod-66cf5",
//   storageBucket: "ipod-66cf5.appspot.com",
//   messagingSenderId: "668440425129",
//   appId: "1:668440425129:web:0655567824ebe00f54afb8"
// };

//   // Initialize Firebase
  // firebase.initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

