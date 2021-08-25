import React, { useState } from "react";
import Search from "../Search/Search";
// hooks
import useMovieFetch from "../hooks/useMovieFetch";

// @material-ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

// Styles
import { MoviesDataWrapper } from "./Style";
//@material-ui
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
const MovieList = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  // @material-ui useStyles
  const classes = useStyles();
  //https://www.omdbapi.com/?s=joker&i=tt3896198&apikey=c6b71c9e&
  // Fetch data for a movies
  //this api works
  const { data, isLoaded } = useMovieFetch(
    `https://www.omdbapi.com/?s=${search}&i=tt3896198&apikey=c6b71c9e&`
  );

  if (!isLoaded) return <p>Loading</p>;

  // Destructuring data object
  const {
    Actors,
    Awards,
    DVD,
    Director,
    Genre,
    Language,
    Metascore,
    Rated,
    Released,
    Title,
    Writer,
    Poster,
  } = data;


  return (
    <MoviesDataWrapper>
      <Search
        handleSearch={handleSearch}
        search={search}
        setSearch={setSearch}
      />
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
  );
};

export default MovieList;
