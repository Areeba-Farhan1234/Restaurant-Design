import { FunctionComponent } from "react";
import styles from "./Navbar.module.css";

export type NavbarType = {
  className?: string;
};

const Navbar: FunctionComponent<NavbarType> = ({ className = "" }) => {
  return (
    <header className={[styles.frameParent, className].join(" ")}>
      <div className={styles.gerichtWrapper}>
        <b className={styles.gericht}>Gerícht</b>
      </div>
      <nav className={styles.frameWrapper}>
        <nav className={styles.homeParent}>
          <div className={styles.home}>Home</div>
          <div className={styles.pages}>Pages</div>
          <div className={styles.contactUs}>Contact Us</div>
          <div className={styles.blog}>Blog</div>
          <div className={styles.landing}>Landing</div>
        </nav>
      </nav>
      <div className={styles.frameGroup}>
        <div className={styles.logInRegistrationWrapper}>
          <div className={styles.logIn}>Log in / registration</div>
        </div>
        <img
          className={styles.lineIcon}
          loading="lazy"
          alt=""
          src="/line.svg"
        />
        <div className={styles.bookTableWrapper}>
          <b className={styles.bookTable}>book table</b>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
