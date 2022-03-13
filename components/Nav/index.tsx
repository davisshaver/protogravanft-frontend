// External imports.
import React from "react";
import Link from "next/link";

// Internal imports.
import Connect from "../../components/Connect";

// Component imports.
import classes from "./classes";
import strings from "./strings";

/**
 * Nav component for ProtoGravaNFT frontend.
 *
 * @returns JSX.Element Navigation for dapp
 */
const Nav = () => {
  return (
    <header>
      <nav className={classes.navContainer}>
        <Link href="/">
          <a className={classes.logoContainer}>
            <span className={classes.titleContainer}>{strings.title}</span>
          </a>
        </Link>
        <div className={classes.linksContainer}>
          <div className={classes.linkContainer}>
            <Link href="/about">
              <a className={classes.link}>{strings.about}</a>
            </Link>
          </div>
          <Connect />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
