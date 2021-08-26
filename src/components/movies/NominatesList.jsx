import React, { useContext, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function NominatesList() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { nominatedID } = moviesState;

  const { data } = useFetch(
    `http://www.omdbapi.com/?i=${nominatedID}&apikey=18415e4d`,
    nominatedID
  );
  useEffect(() => {
    if (data.Response)
      dispatchMovies({
        type: ACTIONS.NOMINATES,
        payload: data,
      });
  }, [data]);

  return <div> </div>;
}

export default NominatesList;
