import React, { useRef } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import styles from "./SearchBar.module.css"


export default function SearchBar() {

    const navigate = useNavigate();

    const searchInputRef = useRef();

    const onSearchHandler = (e) => {
        e.preventDefault();

        const searchQuery = {
            name: searchInputRef.current.value
        }

        const query = createSearchParams(searchQuery);

        navigate(`/search?${query}`);
    }

    return (
        <form onSubmit={onSearchHandler}>
            <input type="text" className={styles.search} ref={searchInputRef} />
             <button type="submit">
                🔎
            </button>
        </form>
    );
}

