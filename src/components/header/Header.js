import React from "react";
import { Link } from "react-router-dom";
import SearchBar from "../searchBar/SearchBar";
import styles from "./Header.module.css";

export default function Header () {
    return (
        <div className={styles.header}>
            <Link to="/">
                <h1>redditMinimal</h1>
            </Link>
            
            <SearchBar  />
            
            <button className={styles.button}>Log In</button>
        </div>
    );
}