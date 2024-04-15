import React from "react";
import CurrentPost from "../features/currentPost/CurrentPost";
import Comments from "../features/comments/Comments";
import { useParams } from "react-router-dom";

export default function PostPage() {
    const { postId } = useParams();
    return (
        <div>
            <CurrentPost postId={postId} />
            <Comments postId={postId} />
        </div>
    );
}

