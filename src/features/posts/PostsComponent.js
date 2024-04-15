import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectPosts } from "./postsSlice";
import Card from "../../components/card/Card";
import styles from "./PostsComponent.module.css";

function Posts() {
    const posts = useSelector(selectPosts);

    return (
        <div className={styles.postsWrapper}>
            {posts.map((post) =>(
                <div key={post.id}>
                    <Card post={post}/>
                </div>
            ))}
        </div>
    );
}

export default Posts;