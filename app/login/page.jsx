// "use client";

// import React from "react";
// import Button from "@mui/material/Button";
// import { signInWithGoogle } from "@/libs/Firebase";
// import { useState, useEffect } from "react";
// import { useRouter } from "next/navigation";

// const Page = () => {
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const router = useRouter();

//   useEffect(() => {
//     // Check for authentication status on component mount
//     const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
//     if (storedIsLoggedIn) {
//       setIsLoggedIn(true);
//     }
//   }, []);

//   const handleSignIn = async () => {
//     // connsole.log("PLEASE FUCKING LOG IN");
//     try {
//       await signInWithGoogle();
//       // router.push("/");
//     } catch (err) {
//       console.log(err);
//     }
//   };

//   // Check if user is logged in and redirect to /client/Landing if true
//   useEffect(() => {
//     if (isLoggedIn) {
//       router.push("/");
//     }
//   }, [isLoggedIn]);

//   return (
//     <>
//       <div>Client Login Page</div>
//       <Button onClick={handleSignIn}>Sign in with Google</Button>
//       {/* {isLoggedIn && (
//         <>
//           <Landing setIsLoggedIn={setIsLoggedIn} />
//         </>
//       )} */}
//     </>
//   );
// };

// export default Page;

"use client";

import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField"; // Import TextField for input fields
import { signInWithEmailAndPass, auth } from "@/libs/Firebase"; // Assume auth is correctly exported from Firebase config
import { useRouter } from "next/navigation"; // Correct import path for useRouter

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  useEffect(() => {
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
      // review code here
      router.push("/");
    }
  }, [isLoggedIn]);

  const handleSignIn = async () => {
    console.log(`Signing in with email: ${email}, password: ${password}`);
    console.log(`Types - Email: ${typeof email}, Password: ${typeof password}`);

    try {
      await signInWithEmailAndPass(email, password, setIsLoggedIn);
      // router.push("/");
    } catch (err) {
      console.error("Cannot log in (frontend)", err);
      // Handle login error (e.g., user not found, wrong password)
    }
  };

  // Redirect on login
  // useEffect(() => {
  //   if (isLoggedIn) {
  //     router.push("/");
  //   }
  // }, [isLoggedIn]);

  return (
    <>
      <div>Client Login Page</div>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        fullWidth
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        fullWidth
        margin="normal"
      />
      <Button onClick={handleSignIn}>Sign in with Email</Button>
    </>
  );
};

export default Page;
