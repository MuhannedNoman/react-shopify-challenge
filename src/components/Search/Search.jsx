import React from 'react';

// Styles
import  SearchWrapperStyles from './Style';

function Search({ handleSearch }) {

  return (
    <>
      <h3>Search below to nominate your top favorite movies & series.</h3>

      <SearchWrapperStyles
        type="text"
        placeholder="&#xF002; Movie name"
        name="search"
        onChange={handleSearch}
      />
    </>
  );
}

export default Search;
