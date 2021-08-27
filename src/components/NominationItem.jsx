import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteIcon from '@material-ui/icons/Delete';
// import CardContent from '@material-ui/core/CardContent';
import { CardContent, Grid, IconButton, Typography } from '@material-ui/core';
import PropTypes from 'prop-types';

const useStyles = makeStyles(() => ({
  root: {
    display: 'flex',
  },
  cover: {
    width: 80,
    height: 130,
  },
}));

function NominationItem({ movie }) {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <Grid container>
        <Grid item xs={8}>
          <CardContent>
            <Typography component="h6">{movie.Title}</Typography>
            <Typography variant="subtitle1" color="textSecondary">
              {movie.Year}
            </Typography>
          </CardContent>
          <IconButton aria-label="delete" className={classes.margin}>
            <DeleteIcon fontSize="large" />
          </IconButton>
        </Grid>

        <Grid item xs={4}>
          <CardMedia
            className={classes.cover}
            image={movie.Poster}
            title="Live from space album cover"
          />
        </Grid>
      </Grid>
    </Card>
  );
}

NominationItem.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    Year: PropTypes.string.isRequired,
    imdbID: PropTypes.string.isRequired,
    Type: PropTypes.string.isRequired,
    Poster: PropTypes.string.isRequired,
  }),
};

NominationItem.defaultProps = {
  movie: {
    Title: 'NOT A MOVIE',
    Year: '2010',
    imdbID: '000000000',
    Type: 'movie',
    Poster: '',
  },
};

export default NominationItem;
