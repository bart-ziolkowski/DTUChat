"use client";

import Image from "next/image";
import React from "react";
import { logout } from "../../firebase/auth/logout";
import { useAuth } from "../../context/AuthContext";
import { useRouter } from "next/navigation";

export default function Chats() {
  const DEFAULT_IMAGE =
    "https://lh3.googleusercontent.com/-XdUIqdMkCWA/AAAAAAAAAAI/AAAAAAAAAAA/4252rscbv5M/photo.jpg";
  const currentUser = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  console.log(currentUser);

  return (
    <div className="grid min-h-screen bg-green">
      <div className="w-1/4 min-h-full h-auto text-white text-center">
        <div className="flex flex-col justify-center items-center h-full bg-blue">
          <h2 className="text-2xl mt-4 font-bold text-white">Chats and Rooms</h2>
          <div className="w-5/6 h-full my-4 mx-auto bg-white"></div>
        
        <div className="flex justify-evenly items-center  w-full py-3 bg-orange">
          <div className="flex items-center py-6 font-bold text-black">
            <Image
              src={currentUser?.photoURL || DEFAULT_IMAGE}
              width={55}
              height={1}
              alt="User profile photo"
              className="rounded"
            />
            <p className="ml-4">
              {currentUser?.displayName || "Loading..."}
              <br />
              {currentUser?.email}
            </p>
          </div>
          <button
            className="inline h-fit px-6 py-4 font-bold rounded bg-red transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg"
            onClick={handleLogout}
          >
            Logout
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}
