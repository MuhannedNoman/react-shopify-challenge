import React, { useState } from "react";
import Search from "../Search/Search";
import MovieItem from "./MovieItem";
import Nominates from "./Nominates";
import { Typography } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
// hooks
import useMovieFetch from "../hooks/useMovieFetch";

// Styles
import { MoviesDataWrapper } from "./Style";

const MovieList = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const { data, isLoaded } = useMovieFetch(
    `https://www.omdbapi.com/?s=${search}&i=tt3896198&apikey=c6b71c9e&`
  );

  if (!isLoaded) return <Typography>Loading</Typography>;

  return (
    <Container>
      <Row>
        <Col>
          <Search
            handleSearch={handleSearch}
            search={search}
            setSearch={setSearch}
          />
        </Col>
      </Row>

      <MoviesDataWrapper>
        {data.Error ? (
          data.Error
        ) : (
          <>
            {data.Search?.map((movie) => (
              <MovieItem movie={movie} key={movie.imdbID} />
            ))}{" "}
          </>
        )}
      </MoviesDataWrapper>
      <Row>
        <Col>
          <Nominates />
        </Col>
      </Row>
    </Container>
  );
};

export default MovieList;
