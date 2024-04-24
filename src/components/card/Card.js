import React from "react";
import styles from "./Card.module.css";
import { Link } from "react-router-dom";
import ROUTES from "../../app/routes";

export default function Card({post}) {
    
    return (
       <Link 
        to={ROUTES.postRoute(post.data.id)}
        className={styles.post}
        >
            <span>{post.data.subreddit}</span>
            <h2>{post.data.title}</h2>
            {post.data.selftext ? (
                <div className={styles.thumbnail}>
                    <p>{post.data.selftext}</p>
                </div>
            ) : (post.data.is_video ? 
                <video controls width="250" muted={false} className={styles.thumbnail}>
                    <source src={post.data.secure_media.reddit_video.fallback_url} type="video/mp4" />
                    
                    Your browser does not support the video tag.
                </video>  : 
                <img src={post.data.url} alt={post.title} className={styles.thumbnail} />)} 
            <p className={styles.comments}>💬 {post.data.num_comments}</p>
        </Link>
    )
}