import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function NominatedMovie({ movie }) {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  function onRemove(mov) {
    const newMovies = nominates.filter((m) => m.imdbID !== mov.imdbID);
    dispatchMovies({
      type: ACTIONS.NOMINATE_REMOVE,
      payload: newMovies,
    });
  }
  return (
    <div>
      {/* <img src={movie.Poster} alt="" /> */}
      <h3> {movie.Title} </h3>
      <h3> Genre: {movie.Genre} </h3>
      <h3> Released: {movie.Year} </h3>
      <h3> Imdb: {movie.imdbRating} </h3>
      {/* <h3>
        Plot: <p>{movie.Plot}</p>
      </h3> */}
      <div>
        <button
          onClick={() => {
            onRemove(movie);
          }}
        >
          Remove
        </button>
      </div>
    </div>
  );
}

export default NominatedMovie;
