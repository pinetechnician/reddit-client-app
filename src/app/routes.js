const ROUTES = {
    home: () => "/",
    postRoute: (subreddit, id) => `/posts/${subreddit}/${id}`,
    postsRoute: () => "/posts",
    searchRoute: (query) => `/search?query=${encodeURIComponent(query)}`,
};

export default ROUTES;