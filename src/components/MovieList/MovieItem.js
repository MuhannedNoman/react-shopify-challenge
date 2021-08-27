import React, { useContext } from "react";
import { nominateStore, ACTIONS } from "../Store/nominateStore";

// @material ui
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import {
  MoviesDataWrapper,
  TypographyStyle,
  NominateButtonStyle,
} from "./Style";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "600px",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: 400,
    justifyContent: "center",
  },
  content: {
    flex: "1 0 auto",
    marginBottom: "20px",
  },
  cover: {
    width: 200,
  },
}));
function MovieItem({ movie, nominate }) {
  const { state, dispatch } = useContext(nominateStore);

  const { Year, Type, Title, Poster } = movie;

  function checkNominate() {
    let index = state.findIndex((el) => el.imdbID === movie.imdbID);
    return index === -1 ? (
      <NominateButtonStyle
        size="large"
        className="button-style"
        onClick={() => handleClick()}
      >
        Nominate
      </NominateButtonStyle>
    ) : (
      <NominateButtonStyle size="large" className="button-style" disabled>
        Nominate
      </NominateButtonStyle>
    );
  }

  // Add Movie to the nominated list
  function handleClick() {
    dispatch({
      type: ACTIONS.ADD_NOMINATE,
      data: movie,
    });
  }

  // Remove Movie from nominated list
  function handleDelete(id) {
    dispatch({ type: ACTIONS.REMOVE_NOMINATE, payload: id });
  }

  // @material-ui useStyles
  const classes = useStyles();

  return (
    <MoviesDataWrapper>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={Poster} title={Title} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <TypographyStyle component="h4" variant="h4" className="type">
              <b>{Title}</b>
            </TypographyStyle>

            <TypographyStyle component="h5" variant="h5" className="type">
              Type: {Type}
            </TypographyStyle>
            <TypographyStyle component="h5" variant="h5">
              Year: {Year}
            </TypographyStyle>
          </CardContent>
          {nominate ? (
            <NominateButtonStyle
              size="large"
              className="button-style"
              onClick={() => handleDelete(movie.imdbID)}
            >
              Remove
            </NominateButtonStyle>
          ) : (
            checkNominate()
          )}
        </div>
      </Card>
    </MoviesDataWrapper>
  );
}

export default MovieItem;
