import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadCommentsForPostId, selectComments, isLoadingComments, errorMessage } from "./commentsSlice";
import styles from './Comments.module.css';

function Comments({subreddit, postId}) {
    const dispatch = useDispatch();
    const comments = useSelector(selectComments);
    const loading = useSelector(isLoadingComments);
    const error = useSelector(errorMessage);

    useEffect(() => {
        if (subreddit && postId) {
            console.log(`fetching comments for post id ${postId}`);
            dispatch(loadCommentsForPostId({subreddit: subreddit, postId: postId}));
        }
    }, [dispatch, subreddit, postId]);
    
    const commentsForPostId = comments[`${postId}`] ? comments[`${postId}`] : [];
    console.log(`commentsForPostID: ${JSON.stringify(commentsForPostId, null, 2)}`);

    if (loading) {
        return <div>Loading comments...</div>;
    }

    if (error) {
        return <div>Error loading comments: {error}</div>;
    }

    if(!comments) return <div>no comments to show</div>;

    return (
        <div className={styles.commentCard}>
            {comments.map((comment) => (
                <div key={comment.data.id} >
                    <span>{comment.data.author}</span>
                    <p>{comment.data.body}</p>
                </div>
            ))} 
        </div>
    );
}

export default Comments;