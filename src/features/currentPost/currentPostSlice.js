import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockPosts } from "../../data/posts";
import { fetchPopularPosts } from "../../Reddit";
import { useSelector } from "react-redux";
import { selectPosts } from "../posts/postsSlice";

export const fetchPostById = createAsyncThunk('post/fetchPostById', 
async(postId) => {
    const posts = await fetchPopularPosts();
    const post = posts.find(post => post.data.id === postId.toString());
    console.log("current post: ", post);
    return post;
});

export const currentPostSlice = createSlice({
    name: 'currentPost',
    initialState: {
        post: undefined,
        isLoadingCurrentPost: false,
        hasError: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPostById.pending, (state) => {
                state.isLoadingCurrentPost = true;
                state.hasError = false;
            })
            .addCase(fetchPostById.fulfilled, (state, action) => {
                state.isLoadingCurrentPost = false;
                state.hasError = false;
                state.post = action.payload;
            })
            .addCase(fetchPostById.rejected, (state, action) => {
                state.isLoadingCurrentPost = false;
                state.hasError = true;
                state.error = action.error.message;
            })
    }
});

export const selectCurrentPost = (state) => state.currentPost.post;
export const isLoadingCurrentPost = (state) => state.currentPost.isLoadingCurrentPost;
export const hasError = (state) => state.currentPost.hasError;
export const errorMessage = (state) => state.currentPost.error;

export default currentPostSlice.reducer;