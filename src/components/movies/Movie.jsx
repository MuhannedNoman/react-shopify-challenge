import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Movie({ movie }) {
  const { dispatchMovies } = useContext(moviesContext);
  function onNominate(movie) {
    dispatchMovies({
      type: ACTIONS.NOMINATES,
      payload: movie,
    });
  }

  return (
    <div>
      <h3>{movie.Title}</h3>
      <h4>{movie.Year}</h4>
      <img src={movie.Poster} alt="" />
      <button onClick={() => onNominate(movie)}>Nominate</button>
    </div>
  );
}

export default Movie;
