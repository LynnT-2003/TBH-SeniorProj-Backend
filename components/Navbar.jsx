"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { RiAddBoxLine, RiAddCircleLine } from "react-icons/ri";

export default function Navbar() {
  const [user, setUser] = useState("");
  useEffect(() => {
    const storedUser = localStorage.getItem("name");
    setUser(storedUser);
  }, []);

  return (
    // <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
    //   <Link className="text-white font-bold" href={"/"}>
    //     TBH-ChatBot Essentials
    //   </Link>
    //   <Link className="bg-white p-2" href={"/addModel"}>
    //     Add Model
    //   </Link>
    // </nav>

    <nav className="flex justify-between items-center bg-slate-800 px-8 py-3">
      <Link className="text-white font-bold text-2xl pl-4" href={"/"}>
        TBH-ChatBot Essentials
        {user && <p className="text-s">Logged in as {user}</p>}
      </Link>
      <Link className="text-white text-bold p-2" href={"/addModel"}>
        <RiAddBoxLine size={60} />
        {/* <RiAddCircleLine size={60} /> */}
      </Link>
    </nav>
  );
}
