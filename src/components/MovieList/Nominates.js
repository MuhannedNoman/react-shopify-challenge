import React, { useContext } from "react";
import { nominateStore, ACTIONS } from "../Store/nominateStore";
function Nominates() {
  const { state, dispatch } = useContext(nominateStore);
  function handleDelete(id) {
    dispatch({ type: ACTIONS.REMOVE_NOMINATE, payload: id });
  }
  if (state.lenght < 1) return null;
  return (
    <div>
      {state.map((movie) => {
        return (
          <div key={movie.imdbID}>
            <p>{movie.Title}</p>
            <button onClick={() => handleDelete(movie.imdbID)}>Remove</button>
          </div>
        );
      })}
    </div>
  );
}

export default Nominates;
