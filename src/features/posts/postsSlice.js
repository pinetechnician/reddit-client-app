import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { mockPosts } from "../../data/posts";

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: mockPosts.posts,
        //isLoadingPosts: false,
        //failedToLoadPosts: false,
    },
    reducers: {

    }
});

export const selectPosts = (state) => state.posts.posts;

export default postsSlice.reducer;