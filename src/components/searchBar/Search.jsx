import React, { useContext } from "react";
import moviesContext, { ACTIONS } from "../../store/moviesContext";

function Search() {
  const { dispatchMovies, moviesState } = useContext(moviesContext);
  const { searchValue, movies } = moviesState;
  function handleSearch(e) {
    dispatchMovies({
      type: ACTIONS.SEARCH,
      payload: e.target.value.trim(),
    });
  }
  const moviesOptions = movies.slice(0, 4).filter((movie) => {
    return movie.Title.toLowerCase()
      .trim()
      .includes(searchValue.toLowerCase().trim());
  });
  return (
    <div>
      <h1>Search</h1>
      <input
        list="search"
        value={searchValue}
        onChange={handleSearch}
        type="text"
      />
      <datalist id="search">
        {moviesOptions.map((mov) => {
          return (
            <option key={mov.imdbID} value={mov.Title}>
              {mov.Title}
            </option>
          );
        })}
      </datalist>
    </div>
  );
}

export default Search;
