import firebase from 'firebase/app'
import 'firebase/analytics'

export const firebaseConfig = {
  apiKey: "AIzaSyBZlDM1Lxf72I2Dp_7Kb57Zo54Zj8qGWI8",
  authDomain: "sbox-keys.firebaseapp.com",
  projectId: "sbox-keys",
  storageBucket: "sbox-keys.appspot.com",
  messagingSenderId: "557108384972",
  appId: "1:557108384972:web:2185ea8c4bd67277f25e69",
  measurementId: "G-HP03H1DRMR"
}

firebase.initializeApp(firebaseConfig)

export const firebaseAnalytics = firebase.analytics()