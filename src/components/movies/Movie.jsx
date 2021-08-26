import React from "react";

function Movie({ movie }) {
  return (
    <div>
      <h3>{movie.Title}</h3>
      <h4>{movie.Year}</h4>
      <img src={movie.Poster} alt="" />
      <button>Nominate</button>
    </div>
  );
}

export default Movie;
