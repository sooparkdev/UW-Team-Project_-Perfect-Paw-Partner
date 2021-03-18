import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import PET_DATA from './data.json';
import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyAjNwtuCm_K4nlqQa18BhzOFwubqWW5cG4",
    authDomain: "perfect-paw-partner.firebaseapp.com",
    projectId: "perfect-paw-partner",
    storageBucket: "perfect-paw-partner.appspot.com",
    messagingSenderId: "839479745392",
    appId: "1:839479745392:web:44f0c1d613d14f211f0db5",
    measurementId: "G-YZ26QFYZPF"
};

firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App pets={PET_DATA} />, document.getElementById('root'));