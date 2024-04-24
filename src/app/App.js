import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AppLayout from './AppLayout';
import HomePage from '../pages/HomePage';
import PostPage from '../pages/PostPage';
import SearchResultsPage from '../pages/SearchResultsPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />}>
          <Route index element={<HomePage />} />
          <Route path="posts/r/:subreddit/:postId" element={<PostPage />} />
          <Route path="search" element={<SearchResultsPage />} />
          {/* Additional nested routes can go here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
