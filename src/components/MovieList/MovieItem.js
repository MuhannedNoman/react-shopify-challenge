import React, { useContext } from "react";
import { nominateStore, ACTIONS } from "../Store/nominateStore";

// @material ui
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import { MoviesDataWrapper } from "./Style";

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
  },
  cover: {
    width: 200,
  },
}));
function MovieItem({ movie }) {
  const { dispatch } = useContext(nominateStore);

  function handleClick() {
    dispatch({
      type: ACTIONS.ADD_NOMINATE,
      data: movie,
    });
  }

  const { Year, Type, Title, Poster } = movie;

  // @material-ui useStyles
  const classes = useStyles();
  // const theme = useTheme();

  return (
    <MoviesDataWrapper>
      <Card className={classes.root}>
        <CardMedia className={classes.cover} image={Poster} title={Title} />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h5" variant="h5">
              {Title}
            </Typography>

            <Typography component="h5" variant="h5">
              Type: {Type}
            </Typography>
            <Typography component="h5" variant="h5">
              Year: {Year}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="large" color="primary" onClick={() => handleClick()}>
              Nominate
            </Button>
          </CardActions>
        </div>
      </Card>
    </MoviesDataWrapper>
  );
}

export default MovieItem;
