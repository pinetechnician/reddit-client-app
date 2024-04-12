const ROUTES = {
    home: () => "/",
    postRoute: (id) => `/posts/${id}`,
    postsRoute: () => "/posts",
    searchRoute: (query) => `/search?query=${encodeURIComponent(query)}`,
};

export default ROUTES;