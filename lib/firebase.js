import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: 'AIzaSyBjGXB7jMaylGHCMUKYPXvANpZIQrNuOA8',
  authDomain: 'nextfire-cbb91.firebaseapp.com',
  projectId: 'nextfire-cbb91',
  storageBucket: 'nextfire-cbb91.appspot.com',
  messagingSenderId: '27259757689',
  appId: '1:27259757689:web:f6d716f7476b671e7c60a8',
}

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

// Auth exports
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

// Firestore exports
export const firestore = firebase.firestore()

// Storage exports
export const storage = firebase.storage()
