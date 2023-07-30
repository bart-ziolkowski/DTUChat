"use client";

import "./assets/styles/HomeSlider.css";

import DTUDescLogo from "./assets/images/DTUDescLogo.jpg";
import DTULogo from "./assets/images/DTULogo.jpg";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const GoogleButtonWrapper = styled.button`
  padding: 0.5rem 1rem;
  border: 2px;
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

const GoogleButton = ({ text }: { text: string }) => {
  return (
    <GoogleButtonWrapper>
      <GoogleIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 50">
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
  return (
    <>
      <nav className="bg-red">
        <Image src={DTULogo} alt="DTU logo" className="w-16 h-auto mx-auto" />
      </nav>
      <div className="grid justify-center h-screen text-center bg-dtu-background bg-no-repeat bg-cover bg-bottom">
        <h1 className="home-slogan h-fit w-4/5 p-3 rounded-b text-7.5xl text-white bg-red">
          The best DTU chat app is yet to come. Until now.
        </h1>
        <div className="flex flex-col gap-y-2 justify-center w-1/7 mx-auto">
          <GoogleButton text="Sign in with Google" />
          <GoogleButton text="Sign up with Google" />
        </div>
        <Image src={DTUDescLogo} alt="DTU logo with name" className="rounded" />
      </div>
      <div className="grid justify-center text-white bg-red">
        <ul className="grid grid-flow-col justify-evenly my-3">
          <li>
            <Link href="https://www.facebook.com/dtudk" target="_blank">
              <i className="fa fa-facebook"></i>
            </Link>
          </li>

          <li>
            <Link href="https://twitter.com/DTUtweet" target="_blank">
              <i className="fa fa-twitter"></i>
            </Link>
          </li>

          <li>
            <Link href="https://www.instagram.com/dtudk/" target="_blank">
              <i className="fa fa-instagram"></i>
            </Link>
          </li>

          <li>
            <Link href="https://www.youtube.com/@DTUbroadcast" target="_blank">
              <i className="fa fa-youtube"></i>
            </Link>
          </li>

          <li>
            <Link
              href="https://www.linkedin.com/school/technical-university-of-denmark/"
              target="_blank"
            >
              <i className="fa fa-linkedin-square"></i>
            </Link>
          </li>
        </ul>
        <p className="mb-3">© 2023 DTU Chat. All rights reserved.</p>
      </div>
    </>
  );
}
