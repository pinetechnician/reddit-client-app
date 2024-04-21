import React from "react";
import CurrentPost from "../features/currentPost/CurrentPost";
import Comments from "../features/comments/Comments";
import { useParams } from "react-router-dom";
import styles from "./PostPage.module.css";

export default function PostPage() {
    const { postId } = useParams();
    return (
        <div className={styles.postWrap}>
            <CurrentPost postId={postId} />
            <Comments postId={postId} />
        </div>
    );
}

