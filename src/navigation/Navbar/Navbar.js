import React, { useState } from "react";
import styles from "./Navbar.module.css";

const Navbar = () => {
  return (
    <div className={styles.navbarContainer}>
      <div>
        <NavigationList />
      </div>
    </div>
  );
};

const NavigationList = () => {
  const [navList, setnavList] = useState(["Home", "About", "Projects", "Blog"]);

  return (
    <ul className={styles.navList}>
      {navList.map((item) => {
        return <li className={styles.navListItems}>{item}</li>;
      })}
    </ul>
  );
};

export default Navbar;
