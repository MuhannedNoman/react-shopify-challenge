import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext from "../../store/moviesContext";

function MoviesList() {
  const { moviesState } = useContext(moviesContext);
  const { data } = useFetch(
    `https://www.omdbapi.com/?s=${moviesState.searchValue}&apikey=18415e4d`
  );
  data;

  return <div></div>;
}

export default MoviesList;
