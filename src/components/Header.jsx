import React from "react";
import { Link } from "gatsby";

import styles from "./header.module.css";

const NavItem = ({ children }) => <li className={styles.navItem}>{children}</li>;

export default () => (
    <ul className={styles.nav}>
        <NavItem>
            <Link to="/">Home</Link>
        </NavItem>
        <NavItem>
            <Link to="/about">About</Link>
        </NavItem>
        <NavItem>
            <Link to="/contact">Contact</Link>
        </NavItem>
    </ul>
);
