import React, { useContext } from "react";
import useFetch from "../../hooks/useFetch";
import moviesContext from "../../store/moviesContext";

function NominatesList() {
  const { moviesState } = useContext(moviesContext);
  const { nominatedID } = moviesState;

  const { data } = useFetch(
    `http://www.omdbapi.com/?i=${nominatedID}&apikey=18415e4d`,
    nominatedID
  );
  data;

  return <div></div>;
}

export default React.memo(NominatesList);
