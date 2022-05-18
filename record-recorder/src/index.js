import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';
// import firebase from "./services/firebase";
import { db } from './services/firestore'; // update with your path to firestore config


// const data = {
//   name: 'Los Angeles',
//   state: 'CA',
//   country: 'USA'
// };


// const res = await db.collection('cities').doc('LA').set(data);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

