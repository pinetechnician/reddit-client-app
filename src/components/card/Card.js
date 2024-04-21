import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Card({post}) {
    return (
        <Link 
        to={ROUTES.postRoute(post.id)}
        className={styles.post}
        >
            <span>{post.data.subreddit}</span>
            <h2>{post.data.title}</h2>
            <img src={post.data.thumbnail} alt={post.title} />
            <p className={styles.comments}>💬 {post.data.num_comments}</p>
        </Link>
    )
}