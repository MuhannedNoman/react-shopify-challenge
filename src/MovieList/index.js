import React from "react";

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
  // @material-ui useStyles
  const classes = useStyles();

  // Fetch data for a movies
  const { data, isLoaded } = useMovieFetch(
    `http://www.omdbapi.com/?t=joker&apikey=780560ff`
  );

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
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Poster}
            alt={Title}
            title={Title}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {Title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <p>Actors: {Actors} </p>
              <p>Language: {Language}</p>
              <p>Genre: {Genre}</p>
              <p>Awards: {Awards}</p>
              <p>Metascore: {Metascore}</p>
              <p>DVD: {DVD}</p>
              <p>Rated: {Rated}</p>
              <p>Released: {Released}</p>
              <p>Writer: {Writer}</p>
              <p>Director: {Director}</p>
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Button size="small" color="primary">
            Nominate
          </Button>
        </CardActions>
      </Card>
    </MoviesDataWrapper>
  );
};

export default MovieList;
