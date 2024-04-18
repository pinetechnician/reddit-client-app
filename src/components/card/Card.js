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
            <span>{post.subreddit}</span>
            <h2>{post.title}</h2>
            <img src={post.thumbnail} alt={post.title} />
            <p>💬 {post.num_comments}</p>
        </Link>
    )
}