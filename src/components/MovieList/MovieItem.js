import React, { useContext } from "react";
import { nominateStore, ACTIONS } from "../Store/nominateStore";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});
function MovieItem({ movie }) {
  const { dispatch } = useContext(nominateStore);
  const { Year, Type, Title, Poster } = movie;
  function handleclick() {
    dispatch({
      type: ACTIONS.ADD_NOMINATE,
      data: movie,
    });
  }

  // @material-ui useStyles
  const classes = useStyles();
  return (
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
            <p>Year: {Year} </p>
            <p>Type: {Type}</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleclick()}>
          Nominate
        </Button>
      </CardActions>
    </Card>
  );
}

export default MovieItem;
