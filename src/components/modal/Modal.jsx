import React, { useContext } from "react";
import moviesContext from "../../store/moviesContext";

function Modal() {
  const { moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  const randomMovie = nominates[Math.floor(Math.random() * nominates.length)];
  return (
    <div>
      <h1>{randomMovie.Title} Won!</h1>
    </div>
  );
}

export default Modal;
