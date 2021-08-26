import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Movie({ movie }) {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  function onNominate(movie) {
    dispatchMovies({
      type: ACTIONS.NOMINATES,
      payload: movie,
    });
  }
  const isNominated = nominates.find((mov) => {
    return mov.imdbID === movie.imdbID;
  });

  return (
    <div>
      <h3>{movie.Title}</h3>
      <h4>{movie.Year}</h4>
      <img src={movie.Poster} alt="" />
      {!isNominated ? (
        <button onClick={() => onNominate(movie)}>Nominate</button>
      ) : (
        <button disabled>Nominated</button>
      )}
    </div>
  );
}

export default Movie;
