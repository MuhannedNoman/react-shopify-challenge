import React, { useState } from "react";
import { Form } from "react-bootstrap";
function Search({ setQuery }) {
  const [search, setSearch] = useState("");
  function handleSearch(e) {
    setSearch(e.target.value);
    setQuery(search);
  }
  return (
    <div>
      <h3>Search For Movies</h3>
      <br />
      <Form.Control
        type="text"
        placeholder="Movie name"
        name="search"
        onChange={handleSearch}
      />
    </div>
  );
}

export default Search;
