import { useState, useEffect } from 'react';
import axios from 'axios';

export default function useFetch(searchWord) {
  const [searchResult, setSearchResult] = useState({
    isLoading: true,
    movies: [],
  });
  useEffect(() => {
    axios
      .get(`https://www.omdbapi.com/?s=${searchWord}&apikey=3d85689c`)
      .then((data) => {
        setSearchResult(data.data.Search);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchWord]);
  return searchResult;
}
