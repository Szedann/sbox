import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import firebase from 'firebase/app'
import {firebaseConfig} from './analytics'

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);