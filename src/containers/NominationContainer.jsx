import { Grid } from '@material-ui/core';
import React from 'react';
import NominationItem from '../components/NominationItem';

export default function NominationContainer() {
  const movies = [
    {
      Title: 'LOL',
      Year: '2012',
      imdbID: 'tt1592873',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMTA0MjI5ODA3MjReQTJeQWpwZ15BbWU3MDI1NTE3Njc@._V1_SX300.jpg',
    },
    {
      Title: 'LOL (Laughing Out Loud) ®',
      Year: '2008',
      imdbID: 'tt1194616',
      Type: 'movie',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BODQxYWM2ODItYjE4ZC00YzAxLTljZDQtMjRjMmE0ZGMwYzZjXkEyXkFqcGdeQXVyODIyOTEyMzY@._V1_SX300.jpg',
    },
    {
      Title: 'LOL: Last One Laughing Germany',
      Year: '2021–',
      imdbID: 'tt13929916',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNmEwZWUwYmQtYzBmZC00MjQ0LWI5MjYtOWMxMDhhODlmZjliXkEyXkFqcGdeQXVyMTI5Mzk1NTc2._V1_SX300.jpg',
    },
    {
      Title: 'LOL - Chi ride è fuori',
      Year: '2021–',
      imdbID: 'tt13620358',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BNGExMWYzMDItOGU5Ny00NTExLWE5YjctMDZhYTRkNTZmN2IyXkEyXkFqcGdeQXVyMTI2OTAwNzE3._V1_SX300.jpg',
    },
    {
      Title: 'LOL - Hasse Toh Phasse',
      Year: '2021–',
      imdbID: 'tt14412928',
      Type: 'series',
      Poster:
        'https://m.media-amazon.com/images/M/MV5BMzA2YzQ4YzktNGFkNi00YjhlLThmMTItNjg3NDAwYzE5YTNmXkEyXkFqcGdeQXVyMTI1NDAzMzM0._V1_SX300.jpg',
    },
  ];
  return (
    <Grid container spacing={2}>
      {movies.map((movie) => (
        <Grid key={movie.Title} item xs={12}>
          <NominationItem movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
}
