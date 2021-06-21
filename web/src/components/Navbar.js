import React from "react";
import Vector from "../assets/svg/Vector.svg";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <div className="h-24 w-full flex justify-evenly items-center">
      <Link to="/">
        <p className="text-3xl font-barlow">projects</p>
      </Link>
      <img src={Vector} alt="Vector-left" className="" />
      <Link to="/about">
        <p className="text-3xl font-barlow">who am I?</p>
      </Link>
      <img src={Vector} alt="Vector-right" className="" />
      <Link to="/contact">
        <p className="text-3xl font-barlow">contact</p>
      </Link>
    </div>
  );
};

export default Navbar;
