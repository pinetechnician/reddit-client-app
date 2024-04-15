import React, { useEffect } from "react";
//import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { 
    fetchPostById, 
    selectCurrentPost, 
    isLoadingCurrentPost,
    errorMessage,
    hasError,
} from "./currentPostSlice";
import Card from "../../components/card/Card";

function CurrentPost({ postId }) {
    const dispatch = useDispatch();
    const post = useSelector(selectCurrentPost);
    const loading = useSelector(isLoadingCurrentPost);
    const error = useSelector(errorMessage);

    useEffect(() => {
        console.log(`fetching post with id ${postId}`)
        dispatch(fetchPostById(postId));
    }, [dispatch, postId]);

    if(loading) {
        console.log('loading data...');
        return <div>Loading</div>;
    } else if (error) {
        console.log('error fetching data', error);
        return <div>Error: {error}</div>;
    } else if (!post) {
        console.log('no post available');
        return null;
    }

    return (
        <div>
            <Card post={post}/>
        </div>
    );
}

export default CurrentPost;