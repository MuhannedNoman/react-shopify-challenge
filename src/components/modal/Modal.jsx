import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";
import classes from "./Modal.module.css";
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
      <div className={classes.backdrop} />
      <div className={classes.modal}>
        <h1>The winner is {randomMovie.Title}</h1>
        <button onClick={reset}>Get Started</button>
      </div>
    </div>
  );
}

export default Modal;
