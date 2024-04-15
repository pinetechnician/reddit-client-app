import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockComments } from "../../data/mockComments";

export const loadCommentsForPostId = createAsyncThunk('comments/loadCommentsForPostId',
async(postId) => {
    const comments = await mockComments.comments.filter(comment => comment.link_id.replace('t3_', '') === postId);
    return {postId, comments};
})

export const commentsSlice = createSlice({
    name: 'comments',
    initialState: {
        commentsByPostId: {},
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
                const { postId, comments } = action.payload;
                console.log('Action Payload:', JSON.stringify(action.payload, null, 2));
                state.commentsByPostId[postId] = comments;
                console.log(JSON.stringify(state.commentsByPostId));
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