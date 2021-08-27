import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext, { ACTIONS } from "../../store/moviesContext";
import Movie from "./Movie";

function MoviesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { movies, searchValue } = moviesState;
  const { data, isLoading, error } = useFetch(
    `https://www.omdbapi.com/?s=${searchValue}&apikey=18415e4d`,
    searchValue
  );
  useEffect(() => {
    if (data.Search)
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: data.Search.filter((mov) => {
          return mov.Type === "movie";
        }),
      });
    else
      dispatchMovies({
        type: ACTIONS.MOVIES,
        payload: [],
      });
  }, [data.Search]);
  const hasSearched = searchValue !== "";
  if (isLoading && hasSearched) return <h1>Loading...</h1>;
  if (error && hasSearched) return <h1> {error}</h1>;
  if (!data && hasSearched) return <h1>No Results</h1>;
  return (
    <div>
      {movies.slice(0, 3).map((movie) => {
        return <Movie key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
}

export default MoviesList;
