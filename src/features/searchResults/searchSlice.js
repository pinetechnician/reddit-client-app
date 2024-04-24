import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import commentsSlice from "../comments/commentsSlice";
import { selectPosts } from "../posts/postsSlice";
import { useSelector } from "react-redux";

export const searchPosts = createAsyncThunk('search/searchPosts',
(query) => {
    const regex = new RegExp(query, "i");
    const posts = useSelector(selectPosts);
    const filteredPosts = posts.filter(post => regex.test(post.title));
    return filteredPosts;
})

export const searchSlice = createSlice({
    name: 'search',
    initialState: {
        searchResults: [],
        isLoading: false,
        error: null
    },
    extraReducers: (builder) => {
        builder
            .addCase(searchPosts.pending, (state) => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(searchPosts.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = null;
                state.searchResults = action.payload;
            })
            .addCase(searchPosts.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.error.message;
            })
    }
});

export const selectResults = (state) => state.search.searchResults;
export const isLoadingSearch = (state) => state.search.isLoading;
export const errorMessage = (state) => state.search.error;

export default searchSlice.reducer;