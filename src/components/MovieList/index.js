import React, { useState } from "react";
import Search from "../Search/Search";
import MovieItem from "./MovieItem";
import { Typography } from "@material-ui/core";

// hooks
import useMovieFetch from "../hooks/useMovieFetch";

const MovieList = () => {
  const [search, setSearch] = useState("");
  const [option, setOption] = useState("all");

  function handleSearch(e) {
    setSearch(e.target.value);
  }
  function forSearchingInApi() {
    return option === "all" ? "" : `&type=${option}`;
  }

  const { data, isLoaded } = useMovieFetch(
    `https://www.omdbapi.com/?s=${search}${forSearchingInApi()}&i=tt3896198&apikey=c6b71c9e&`
  );

  if (!isLoaded) return <Typography>Loading</Typography>;

  return (
    <>
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
        option={option}
        setOption={setOption}
      />

      {data.Error ? (
        data.Error
      ) : (
        <>
          {data.Search?.map((movie) => (
            <MovieItem movie={movie} key={movie.imdbID} />
          ))}
        </>
      )}
    </>
  );
};

export default MovieList;
