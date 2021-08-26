import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Search() {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  function handleSearch(e) {
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: e.target.value.trim(),
    });
  }

  return (
    <div>
      <h1>Search</h1>
      <input
        value={moviesState.searchValue}
        onChange={handleSearch}
        type="text"
      />
    </div>
  );
}

export default Search;
