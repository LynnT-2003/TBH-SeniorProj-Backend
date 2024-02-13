"use client";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";

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
      console.log("Logged in");
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

      // setIsLoggedIn(true);

      localStorage.setItem("isLoggedIn", "true");
    })
    .catch((error) => {
      console.log(error);
    });
};

// export const signInWithEmailAndPass = async (
//   email,
//   password,
//   setIsLoggedIn
// ) => {
//   // const { setAuthData } = useAuth();

//   signInWithEmailAndPassword(auth, email, password)
//     .then((userCredential) => {
//       // Signed in
//       const user = userCredential.user;
//       console.log(user);

//       // Accessing user information
//       console.log(`UID: ${user.uid}`);
//       console.log(`Email: ${user.email}`);
//       if (user.displayName) console.log(`Display Name: ${user.displayName}`);
//       if (user.photoURL) console.log(`Photo URL: ${user.photoURL}`);
//       console.log(`Email Verified: ${user.emailVerified}`);

//       // const name = user.displayName || ""; // displayName might be null
//       // const profilePic = user.photoURL || ""; // photoURL might be null
//       // const uid = user.uid;

//       // // localStorage.setItem("nameFromEmail", name);
//       // localStorage.setItem("emailFromEmail", email);
//       // // localStorage.setItem("profilePicFromEmail", profilePic);
//       // localStorage.setItem("uidFromEmail", uid);

//       // setAuthData(name, email);

//       setIsLoggedIn(true);
//       localStorage.setItem("isLoggedIn", "true");
//     })
//     .catch((error) => {
//       console.error("Error signing in with email and password:", error.message);
//       // Optionally, display the error message to the user
//     });
// };

export const signInWithEmailAndPass = async (
  email,
  password,
  setIsLoggedIn
) => {
  console.log("Received");
  console.log(email, password);
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log(userCredential.user);
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "true");
    // Additional logic to handle successful sign-in...
  } catch (error) {
    console.error("Error signing in with email and password:", error);
    // Handle errors here
  }
};
