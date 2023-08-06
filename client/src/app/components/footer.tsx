import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
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
  );
};

export default Footer;
