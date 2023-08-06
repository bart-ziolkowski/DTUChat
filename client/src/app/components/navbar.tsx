import Image from "next/image";
import DTULogo from "../assets/images/DTULogo.jpg";

import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-red">
      <Image src={DTULogo} alt="DTU logo" className="w-16 h-auto mx-auto" />
    </nav>
  );
};

export default Navbar;
