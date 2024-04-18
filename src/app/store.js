import { configureStore } from '@reduxjs/toolkit';
import postsReducer from "../features/posts/postsSlice";
import commentsReducer from "../features/comments/commentsSlice";
import currentPostReducer from "../features/currentPost/currentPostSlice";
import searchReducer from "../features/searchResults/searchSlice";


export const store = configureStore({
  reducer: {
    posts: postsReducer,
    comments: commentsReducer,
    currentPost: currentPostReducer,
    search: searchReducer
  },
});
