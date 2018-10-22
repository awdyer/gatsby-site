import React from "react";
import Header from "./Header";

import styles from "./container.module.css";

export default ({ children }) => (
    <div className={styles.container}>
        <Header />
        {children}
    </div>
);
