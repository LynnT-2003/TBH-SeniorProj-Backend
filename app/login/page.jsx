"use client";

import React from "react";
import Button from "@mui/material/Button";
import { signInWithGoogle } from "@/libs/Firebase";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check for authentication status on component mount
    const storedIsLoggedIn = localStorage.getItem("isLoggedIn");
    if (storedIsLoggedIn) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleSignIn = async () => {
    // connsole.log("PLEASE FUCKING LOG IN");
    try {
      await signInWithGoogle();
      router.push("/");
    } catch (err) {
      console.log(err);
    }
  };

  // Check if user is logged in and redirect to /client/Landing if true
  useEffect(() => {
    if (isLoggedIn) {
      router.push("/");
    }
  }, [isLoggedIn.router]);

  return (
    <>
      <div>Client Login Page</div>
      <Button onClick={handleSignIn}>Sign in with Google</Button>
      {/* {isLoggedIn && (
        <>
          <Landing setIsLoggedIn={setIsLoggedIn} />
        </>
      )} */}
    </>
  );
};

export default Page;
