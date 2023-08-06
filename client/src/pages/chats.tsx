import React from "react";
import { logout } from "../firebase/auth/logout";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function Chats() {
  const currentUser = useAuth();
  const router = useRouter();
  const handleLogout = () => {
    logout();
    router.push("/");
  };

  return (
    <div className="grid grid-cols-1fr 3fr h-7">
      <div className="bg-red">Lista</div>
      <div className="bg-blue">Chat</div>
    </div>
  );
}
