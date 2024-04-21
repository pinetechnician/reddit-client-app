import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentsForPostId, selectComments, isLoadingComments, errorMessage } from "./commentsSlice";
import styles from './Comments.module.css';
import { selectCurrentPost } from "../currentPost/currentPostSlice";

function Comments({postId}) {
    const dispatch = useDispatch();
    //const post = useSelector(selectCurrentPost);
    const comments = useSelector(selectComments);
    const loading = useSelector(isLoadingComments);
    const error = useSelector(errorMessage);

    useEffect(() => {
        if (postId) {
            console.log(`fetching comments for post id ${postId}`)
            dispatch(loadCommentsForPostId(postId));
        }
    }, [dispatch, postId]);
    
    const commentsForPostId = comments[`${postId}`] ? comments[`${postId}`] : [];
    console.log(commentsForPostId);

    if (loading) {
        return <div>Loading comments...</div>;
    }

    if (error) {
        return <div>Error loading comments: {error}</div>;
    }

    if(!comments) return null;

    return (
        <div className={styles.commentCard}>
            {commentsForPostId.map((comment) => (
                <div key={comment.id} >
                    <span>{comment.author}</span>
                    <p>{comment.text}</p>
                </div>
            ))} 
        </div>
    );
}

export default Comments;