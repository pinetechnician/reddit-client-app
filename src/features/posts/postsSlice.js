import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockPosts } from "../../data/posts";
import { fetchPopularPosts } from "../../Reddit";
import { isLoadingCurrentPost } from "../currentPost/currentPostSlice";

export const loadPopularPosts = createAsyncThunk('posts/loadPopularPosts',
async() => {
    const data = await fetchPopularPosts();
    console.log(`'inside postsSlice:' ${data}`);
    return data;
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        isLoadingPosts: false,
        error: null,
    },
    extraReducers: (builder) => {
        builder
            .addCase(loadPopularPosts.pending, (state) => {
                state.isLoadingPosts = true;
                state.error = null;
            })
            .addCase(loadPopularPosts.fulfilled, (state, action) => {
                state.isLoadingPosts = false;
                state.posts = action.payload;
            })
            .addCase(loadPopularPosts.rejected, (state, action) => {
                state.isLoadingPosts = false;
                state.error = action.error.message;
            })
    }
});

export const selectPosts = (state) => state.posts.posts;
export const isLoadingPosts = (state) => state.posts.isLoadingPosts;
export const errorMessage = (state) => state.posts.error;

export default postsSlice.reducer;