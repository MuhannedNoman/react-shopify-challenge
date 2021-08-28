import React, { useState } from 'react';

// @material ui
import { Typography } from '@material-ui/core';

// Components
import Search from '../Search/Search';
import MovieItem from './MovieItem';

// hooks
import useMovieFetch from '../hooks/useMovieFetch';

const MovieList = () => {
  const [search, setSearch] = useState('');

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  const { data, isLoaded } = useMovieFetch(
    `https://www.omdbapi.com/?s=${search}&i=tt3896198&apikey=c6b71c9e&`,
  );

  if (!isLoaded) return <Typography>Loading</Typography>;

  return (
    <>
      <Search handleSearch={handleSearch} search={search} setSearch={setSearch} />

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
