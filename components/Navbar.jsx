"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiAddBoxLine } from "react-icons/ri";
import { auth } from "@/libs/Firebase";

const allowedEmails = ["aungchammyae95@gmail.com", "allowed@example.com"];

export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);
  const [isAllowedUser, setIsAllowedUser] = useState(false);

  // useEffect(() => {
  //   const unsubscribe = auth.onAuthStateChanged((user) => {
  //     if (user) {
  //       const userEmail = user.email;
  //       setUserEmail(userEmail);
  //       setIsAllowedUser(allowedEmails.includes(userEmail));
  //       console.log("User has logged in");
  //     } else {
  //       setUserEmail(null);
  //       setIsAllowedUser(false);
  //       console.log("User is logged out");
  //     }
  //   });

  //   // Cleanup function
  //   return () => unsubscribe();
  // }, []);

  useEffect(() => {
    const storedUserEmail = localStorage.getItem("userEmail");
    const storedIsAllowedUser = localStorage.getItem("isAllowedUser");

    if (storedUserEmail && storedIsAllowedUser) {
      setUserEmail(storedUserEmail);
      setIsAllowedUser(JSON.parse(storedIsAllowedUser));
    } else {
      auth.onAuthStateChanged((user) => {
        if (user) {
          const userEmail = user.email;
          localStorage.setItem("userEmail", userEmail);
          const isAllowedUser = allowedEmails.includes(userEmail);
          localStorage.setItem("isAllowedUser", isAllowedUser);
          setUserEmail(userEmail);
          setIsAllowedUser(isAllowedUser);
          console.log("User has logged in");
        } else {
          localStorage.removeItem("userEmail");
          localStorage.removeItem("isAllowedUser");
          setUserEmail(null);
          setIsAllowedUser(false);
          console.log("User is logged out");
        }
      });
    }
  }, []);

  return (
    <nav
      style={{ backgroundColor: "#274D65" }}
      className="flex items-center bg-slate-800 px-8 py-3 mb-8"
    >
      <img
        src="/logo_tbhChatbot.png"
        alt="Logo"
        className="w-32 h-32
      "
      />
      <Link className="text-white font-bold text-2xl" href={"/"}>
        TBH-ChatBot CMS
        {userEmail && (
          <p className="text-sm font-normal">Logged in as {userEmail}</p>
        )}
      </Link>
      <Link className="text-white text-bold ml-auto pr-2" href={"/addModel"}>
        {isAllowedUser && <RiAddBoxLine size={60} />}
      </Link>
    </nav>
  );
}
