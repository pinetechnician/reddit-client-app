import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockComments } from "../../data/mockComments";
import { fetchCommentsForPost } from "../../Reddit";

export const loadCommentsForPostId = createAsyncThunk('comments/loadCommentsForPostId',
async({subreddit, postId}) => {
    console.log(`postId inside the commentsSlice: ${postId}`);
    const comments = await fetchCommentsForPost(subreddit, postId);
    console.log("comments: ", comments)
    return comments;
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsByPostId: [],
        isLoadingComments: false,
        hasError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadCommentsForPostId.pending, (state) => {
                state.isLoadingComments = true;
                state.hasError = false;
            })
            .addCase(loadCommentsForPostId.fulfilled, (state, action) =>{
                state.isLoadingComments = false;
                state.hasError = false;
                //const { postId, comments } = action.payload;
                console.log('Action Payload:', JSON.stringify(action.payload, null, 2));
                state.commentsByPostId = action.payload;
                console.log("commentsSlice state: ", JSON.stringify(state.commentsByPostId));
            })
            .addCase(loadCommentsForPostId.rejected, (state, action) => {
                state.isLoadingComments = false;
                state.hasError = true;
                state.error = action.error.message;
            });
    }
});

export const selectComments = (state) => state.comments.commentsByPostId;
export const isLoadingComments = (state) => state.comments.isLoadingComments;
export const errorMessage = (state) => state.comments.error;

export default commentsSlice.reducer;