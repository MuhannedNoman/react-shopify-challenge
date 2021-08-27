import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Modal() {
  const { moviesState, dispatchMovies } = useContext(moviesContext);
  const { nominates } = moviesState;
  const randomMovie = nominates[Math.floor(Math.random() * nominates.length)];
  function reset() {
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: "",
    });
    dispatchMovies({
      type: ACTIONS.NOMINATE_REMOVE,
      payload: [],
    });
    dispatchMovies({
      type: ACTIONS.MOVIES,
      payload: [],
    });
  }
  return (
    <div>
      <h1>{randomMovie.Title} Won!</h1>
      <button onClick={reset}>Restart</button>
    </div>
  );
}

export default Modal;
