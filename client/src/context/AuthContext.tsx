"use client";

import { createContext, useContext, useEffect, useState } from "react";

import { auth } from "../firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import firebase from "firebase/compat/app";
import { useRouter } from "next/navigation";

const AuthContext = createContext<firebase.UserInfo | null>(null);

export const useAuth = () => useContext(AuthContext);

export const AuthContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [currentUser, setCurrentUser] = useState<firebase.UserInfo | null>(
    null
  );
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log("user", user);
      setCurrentUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={currentUser}>{children}</AuthContext.Provider>
  );
};
