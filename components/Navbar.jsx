"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiAddBoxLine } from "react-icons/ri";
import { auth } from "@/libs/Firebase";

export default function Navbar() {
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const userEmail = user.email;
        setUserEmail(userEmail);
        console.log("User has logged in");
      } else {
        setUserEmail(null);
        console.log("User is logged out");
      }
    });

    // Cleanup function
    return () => unsubscribe();
  }, []);

  return (
    <nav
      style={{ backgroundColor: "#274D65" }}
      className="flex items-center bg-slate-800 px-8 py-3"
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
        <RiAddBoxLine size={60} />
      </Link>
    </nav>
  );
}
