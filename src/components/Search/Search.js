import React from "react";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
// Styles
import { SearchWrapperStyles } from "./Style";

function Search({ handleSearch, option, setOption }) {
  //setup before functions
  function handleoption(e) {
    setOption(e.target.value);
  }
  return (
    <>
      <h3>Search below to nominate your top favorite movies & series.</h3>
      <SearchWrapperStyles
        type="text"
        placeholder="&#xF002; Movie name"
        name="search"
        onChange={handleSearch}
      />
      <Select
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        style={{ marginLeft: "14", fontSize: 12 }}
        value={option}
        onChange={handleoption}
      >
        <MenuItem value="all">All</MenuItem>
        <MenuItem value="movie">Movie</MenuItem>
        <MenuItem value="series">Series</MenuItem>
        <MenuItem value="game">Game</MenuItem>
      </Select>
      <br />
    </>
  );
}

export default Search;
