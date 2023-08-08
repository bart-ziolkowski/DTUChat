"use client";

import React from "react";
import { logout } from "../../firebase/auth/logout";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Chats() {
  const currentUser = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="grid h-screen bg-green">
      <div className="w-1/4 bg-blue text-white  text-center">
        <h1 className="m-4 px-8 py-4 font-bold bg-red">
          Hi {currentUser?.displayName}!
        </h1>
        <button
          className=" m-4 px-8 py-4 font-bold rounded-full bg-red transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
          onClick={handleLogout}
        >
          Logout
        </button>
        <h2 className="text-2xl font-bold text-white">Chats</h2>
        <div className="w-10/12 h-5/6 my-4 mx-auto bg-white"></div>
      </div>
    </div>
  );
}
