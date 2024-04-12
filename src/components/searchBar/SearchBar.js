import React from "react";
import styles from "./SearchBar.module.css"
export default function SearchBar() {
    return (
        <div>
            <input type="text" className={styles.search} />
        </div>
    );
}

