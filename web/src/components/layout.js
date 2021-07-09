import React from "react";
import { Link } from "gatsby";

import Navbar from "./Navbar";
import Banner from "./Banner";
import "../styles/layout.css";

import favicon from "../assets/images/favicon.ico";
import ZeroanimaLogo from "../assets/svg/Zeroanima_Logo_red.svg";
import ZeroanimaLogoSecondary from "../assets/images/Zeroanima_Logo_white_small.png";
import Designed from "../assets/svg/Designed.svg";
import Helmet from "react-helmet";
import SocialMedia from "../components/SocialMedia";

const Layout = ({ children, path, location }) => (
  <div className="min-h-screen min-w-min bg-white bg-hero-pattern flex flex-col md:flex-row">
    <Helmet>
      <link rel="icon" href={favicon} />
    </Helmet>
    <div className="w-12/12 md:w-8/12 lg:10/12 flex flex-col">
      <Navbar />
      <Banner />
      <div>{children}</div>
    </div>
    <div className="w-12/12 md:w-4/12 lg:2/12 border-l-2 border-b-2 border-primary flex flex-col">
      <Link to="/">
        <div className="h-80 flex justify-center static">
          <img src={ZeroanimaLogo} alt="ZeroanimaLogo" className="" />
        </div>
      </Link>

      <div className="h-8 border-b-2 border-primary left-0">
        <p className="text-2xl pl-1 tracking-wide-1 font-abril w-28">SINCE</p>
      </div>
      <div>
        <p className="text-2xl pl-1 tracking-wide-4 font-abril w-28">1985</p>
      </div>
      <div className="flex justify-center static">
        <SocialMedia />
      </div>
      <div className="flex justify-center pt-16">
        <img src={ZeroanimaLogoSecondary} alt="ZeroanimaLogoSecondary" />
      </div>
      <div className="flex justify-center pt-16">
        <a
          href="https://www.juanjosebernal.work/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={Designed} alt="Designed" />
        </a>
      </div>
      {/* <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className="font-barlow">
            &copy; {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer> */}
    </div>
  </div>
);

export default Layout;
