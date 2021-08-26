import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext, { ACTIONS } from "../../store/moviesContext";
import NominatedMovie from "./NominatedMovie";

function NominatesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { nominatedID, nominates } = moviesState;

  const { data: movie } = useFetch(
    `http://www.omdbapi.com/?i=${nominatedID}&apikey=18415e4d`,
    nominatedID
  );
  useEffect(() => {
    if (movie.Response)
      dispatchMovies({
        type: ACTIONS.NOMINATES,
        payload: movie,
      });
  }, [movie]);

  return (
    <div>
      {" "}
      {nominates.map((movie) => {
        return <NominatedMovie key={movie.imdbID} movie={movie} />;
      })}{" "}
    </div>
  );
}

export default NominatesList;
