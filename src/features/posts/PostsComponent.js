import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadPopularPosts, selectPosts, isLoadingPosts, errorMessage } from "./postsSlice";
import Card from "../../components/card/Card";
import styles from "./PostsComponent.module.css";

function Posts() {
    const dispatch = useDispatch();
    const posts = useSelector(selectPosts);
    const loading = useSelector(isLoadingPosts);
    const error = useSelector(errorMessage);

    useEffect(() => {
        dispatch(loadPopularPosts());
    }, [dispatch]);

    if (loading) {
        return <div>loading state</div>;
    }

    if (error) {
        return <div>Error loading posts: {error}</div>;
    }

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