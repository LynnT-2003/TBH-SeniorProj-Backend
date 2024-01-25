"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDODKqhcoKKMXdQ1h2fL727drXAciRtkk",
  authDomain: "tutorplus--auth.firebaseapp.com",
  projectId: "tutorplus--auth",
  storageBucket: "tutorplus--auth.appspot.com",
  messagingSenderId: "729772386711",
  appId: "1:729772386711:web:65133bdf1ec82d8b077cd2",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // get information on who is authenticated

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setIsLoggedIn) => {
  // automatically show popup and ask for sign-in credentials
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;
      const uid = result.user.uid;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
      localStorage.setItem("uid", uid);
      // if (auth.auth().currentUser !== null)
      //   console.log("user id: " + firebase.auth().currentUser.uid);

      setIsLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
    })
    .catch((error) => {
      console.log(error);
    });
};
