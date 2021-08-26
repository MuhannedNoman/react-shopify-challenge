import React from "react";

function NominatedMovie({ movie }) {
  return (
    <div>
      <img src={movie.Poster} alt="" />
      <h3> {movie.Title} </h3>
      <h3> Genre: {movie.Genre} </h3>
      <h3> Released: {movie.Year} </h3>
      <h3> Imdb: {movie.imdbRating} </h3>
      <h3>
        Plot: <p>{movie.Plot}</p>
      </h3>
      <div>
        <button>Remove</button>
      </div>
    </div>
  );
}

export default NominatedMovie;
