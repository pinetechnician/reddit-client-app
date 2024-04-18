import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchPosts, selectResults, isLoadingSearch, errorMessage } from "./searchSlice";
import Card from "../../components/card/Card";
//import { selectPosts } from "../posts/postsSlice";

function SearchResultsList() {
    const results = useSelector(selectResults);
    const dispatch = useDispatch();
    const [ searchParams ] = useSearchParams();
    const postToFind = searchParams.get('name');
    const loading = useSelector(isLoadingSearch);
    const error = useSelector(errorMessage);

    useEffect(() => {
        if(postToFind) {
            console.log(`fetching comments for post id ${postToFind}`);
            dispatch(searchPosts(postToFind));
        }
    }, [postToFind]);

    console.log(results);
    if (loading) {
        return <div>Loading search results...</div>;
    }

    if (error) {
        return <div>Error loading search results: {error}</div>;
    }

    if(!results) return null;

    return (
        <div>
            {results.map((result) => (
                <div key={result.id}>
                     <Card post={result}/>
                </div>
            ))}
        </div>
    );


}

export default SearchResultsList;