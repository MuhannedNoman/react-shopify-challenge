import React, { useContext } from "react";
import MovieItem from "./MovieItem";

// Store
import { nominateStore } from "../Store/nominateStore";

function Nominates() {
  const { state } = useContext(nominateStore);

  if (!state) return null;
  return (
    <>
      <h3>Nominated: {state?.length}</h3>
      <br />
      <br />
      {state.map((movie) => {
        return <MovieItem movie={movie} key={movie.imdbID} nominate />;
      })}
    </>
  );
}

export default Nominates;
