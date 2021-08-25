import React from "react";

// Styles
import { SearchWrapperStyles } from "./Style";

function Search({ handleSearch }) {
  //setup before functions

  return (
    <div>
      <br />
      <SearchWrapperStyles
        type="text"
        placeholder="&#xF002; Movie name"
        name="search"
        onBlur={handleSearch}
      />
    </div>
  );
}

export default Search;
