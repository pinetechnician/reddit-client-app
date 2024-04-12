import React from "react";
import CardList from "../components/cardList/CardList";
import SubredditCardList from "../components/subredditCardList/SubredditCardList";
import styles from "./HomePage.module.css";

export default function HomePage(){
    return (
    <div className={styles.main}>
        <SubredditCardList />
        <CardList />
    </div>
    );
}