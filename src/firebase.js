// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCpzYrawZBC0q4zF_zJO83FDmRHG3HRn-U",
  authDomain: "hinglish-web.firebaseapp.com",
  projectId: "hinglish-web",
  storageBucket: "hinglish-web.appspot.com",
  messagingSenderId: "719082166430",
  appId: "1:719082166430:web:46528c22c8ea386e2e038f",
  measurementId: "G-M6Y4MYWR46"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);