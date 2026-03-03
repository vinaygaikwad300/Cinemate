import { useState, useEffect } from "react";

export const useFetch = (apiPath, queryTerm="") => {
    const [data, setData] = useState([]);
    const url = `https://api.themoviedb.org/3/${apiPath}?api_key=${process.env.REACT_APP_API_KEY}&query=${queryTerm}`

    useEffect(() => {
        const fetchMovies = async () => {
            const list = await fetch(url);
            const response = await list.json();
            setData(response.results);
        };
        fetchMovies();
    }, [url]);

    return { data }
}
