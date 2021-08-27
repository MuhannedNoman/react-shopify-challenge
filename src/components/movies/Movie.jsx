import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Movie({ movie }) {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  function onNominate(movie) {
    dispatchMovies({
      type: ACTIONS.NOMINATED_ID,
      payload: movie.imdbID,
    });
  }
  const isNominated = nominates.find((mov) => {
    return mov.imdbID === movie.imdbID;
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h3>{movie.Title}</h3>
      <h4>{movie.Year}</h4>
      <img src={movie.Poster} alt="" />
      <button
        style={{ padding: "1rem 2rem" }}
        onClick={() => onNominate(movie)}
        disabled={isNominated}
      >
        {isNominated ? "Nominated" : "Nominate"}
      </button>
    </div>
  );
}

export default Movie;
