import React from "react";
import Header from "./header";

import Navbar from "./Navbar";

import "../styles/layout.css";
import * as styles from "./layout.module.css";

const Layout = ({ children, onHideNav, onShowNav, showNav, siteTitle }) => (
  <div className="min-h-screen min-w-min bg-white bg-hero-pattern flex flex-row">
    <Header
      siteTitle={siteTitle}
      onHideNav={onHideNav}
      onShowNav={onShowNav}
      showNav={showNav}
    />
    <div className="w-8/12 lg:10/12 flex flex-col">
      <Navbar />
      <div className={styles.content}>{children}</div>
      <footer className={styles.footer}>
        <div className={styles.footerWrapper}>
          <div className={styles.siteInfo}>
            &copy; {new Date().getFullYear()}, Built with{" "}
            <a href="https://www.sanity.io">Sanity</a> &amp;{" "}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </div>
        </div>
      </footer>
    </div>
  </div>
);

export default Layout;
