import React from "react";
import { Form } from "react-bootstrap";
function Search({ search, handleSearch }) {
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
