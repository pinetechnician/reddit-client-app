import React from "react";
import Posts from "../features/posts/PostsComponent";
import SubredditCardList from "../components/subredditCardList/SubredditCardList";
import styles from "./HomePage.module.css";

export default function HomePage(){
    return (
    <div className={styles.main}>
        <SubredditCardList />
        <Posts />
    </div>
    );
}

//<CardList />