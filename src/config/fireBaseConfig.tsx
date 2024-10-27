// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {  initializeAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmuU7_L9nfPaQxvbLhSj4u-bH4zNKMQMI",
  authDomain: "auth-a763d.firebaseapp.com",
  databaseURL: "https://auth-a763d-default-rtdb.firebaseio.com",
  projectId: "auth-a763d",
  storageBucket: "auth-a763d.appspot.com",
  messagingSenderId: "582619447251",
  appId: "1:582619447251:web:4cedbf48518eeb2be1b926",
   databaseUrl:"https://auth-a763d-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export const auth=initializeAuth(firebase, {
    persistence:getReactNativePersistence(ReactNativeAsyncStorage)
});
export const dbRealTime = getDatabase(firebase);