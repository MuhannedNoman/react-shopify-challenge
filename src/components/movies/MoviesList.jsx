import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function MoviesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
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

  return <div></div>;
}

export default MoviesList;
