import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext, { ACTIONS } from "../../store/moviesContext";
import Movie from "./Movie";

function MoviesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { movies } = moviesState;
  const { data } = useFetch(
    `https://www.omdbapi.com/?s=${moviesState.searchValue}&apikey=18415e4d`
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

  return (
    <div>
      {movies.slice(0, 3).map((movie) => {
        return <Movie key={movie.imdbID} movie={movie} />;
      })}
    </div>
  );
}

export default MoviesList;
