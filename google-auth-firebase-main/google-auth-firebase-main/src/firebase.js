// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDrcyqICGNVmGaXJgl4PBiBs-AL8exwycc",
  authDomain: "fir-demo-395ab.firebaseapp.com",
  projectId: "fir-demo-395ab",
  storageBucket: "fir-demo-395ab.appspot.com",
  messagingSenderId: "865676509453",
  appId: "1:865676509453:web:2dbfaeb9376897c7f2b044",
  measurementId: "G-LDESZR63N2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);