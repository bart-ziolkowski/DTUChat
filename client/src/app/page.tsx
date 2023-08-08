"use client";

import "../assets/styles/HomeSlider.css";

import DTUDescLogo from "../assets/images/DTUDescLogo.jpg";
import { GoogleAuthProvider } from "firebase/auth";
import Image from "next/image";
import { signInWithProvider } from "../firebase/auth/signInWithProvider";
import styled from "styled-components";
import { useAuth } from "../context/AuthContext";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const GoogleButtonWrapper = styled.button`
  width: fit-content;
  height: fit-content;
  padding: 0.5rem 1rem;
  margin: 0 auto;
  border: 7px #084b83 solid;

  background-color: #fff;
`;

const GoogleIcon = styled.svg`
  display: inline;
  width: 1.25rem;
  height: 1.25rem;
  margin-right: 1rem;

  path:nth-of-type(1) {
    fill: #fbc02d;
  }
  path:nth-of-type(2) {
    fill: #e53935;
  }
  path:nth-of-type(3) {
    fill: #4caf50;
  }
  path:nth-of-type(4) {
    fill: #1565c0;
  }
`;

interface GoogleButtonProps {
  text: string;
  onClick: () => void;
}

const GoogleButton: React.FC<GoogleButtonProps> = ({ text, onClick }) => {
  return (
    <GoogleButtonWrapper onClick={onClick}>
      <GoogleIcon
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 40 50"
        width="0"
        height="0"
      >
        <path d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12 s5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24s8.955,20,20,20 s20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"></path>
        <path d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039 l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
        <path d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36 c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
        <path d="M43.611,20.083L43.595,20L42,20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571 c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
      </GoogleIcon>
      {text}
    </GoogleButtonWrapper>
  );
};

export default function Home() {
  const currentUser = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (currentUser) {
      router.push("/chats");
    }
  }, [currentUser]);

  return (
    <div className="grid justify-center items-evenly h-screen text-center bg-dtu-background bg-no-repeat bg-cover bg-bottom">
      <div className="grid grid-flow-col justify-evenly items-center h-fit p-3 rounded-b bg-green">
        <h1 className="whitespace-nowrap text-8xl text-white">
          DTUChat powered by
        </h1>
        <Image
          src={DTUDescLogo}
          alt="DTU logo with name"
          className="inline mx-auto rounded"
        />
      </div>
      {!currentUser ? (
        <GoogleButton
          onClick={() => signInWithProvider(new GoogleAuthProvider())}
          text="Sign in with Google"
        />
      ) : (
          <h1>Welcome back {currentUser.displayName}!</h1>
      )}
      <div className="h-fit rounded overflow-hidden bg-blue">
        <h1 className="home-slogan p-3 whitespace-nowrap text-8xl text-white">
          Hej! Hi! Cześć! Ahoj! Salut! Ciao! Hallo!
        </h1>
      </div>
    </div>
  );
}
