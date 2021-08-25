import React, { useState } from "react";
import Search from "../Search/Search";
import MovieItem from "./MovieItem";
import Nominates from "./Nominates";
import { Typography } from "@material-ui/core";
import { Container, Row, Col } from "react-bootstrap";
// hooks
import useMovieFetch from "../hooks/useMovieFetch";

// @material-ui
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

// Styles
import { MoviesDataWrapper } from "./Style";

//@material-ui
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: 200,
  },
}));


const MovieList = () => {
  const [search, setSearch] = useState("");

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  // @material-ui useStyles
  const classes = useStyles();
  const theme = useTheme();

  const { data, isLoaded } = useMovieFetch(
    `https://www.omdbapi.com/?s=${search}&i=tt3896198&apikey=c6b71c9e&`
  );

//   if (!isLoaded) return <p>Loading</p>;

//   // Destructuring data object
//   const { Actors, Writer, Genre, Language, Released, Title, Poster } = data;

//   return (
//     <>
//       <Search
//         handleSearch={handleSearch}
//         search={search}
//         setSearch={setSearch}
//       />
//       {data.Error ? (
//         data.Error
//       ) : (
//         <MoviesDataWrapper>
//           <Card className={classes.root}>
//             <CardMedia
//               className={classes.cover}
//               image={Poster}
//               title="Live from space album cover"
//             />
//             <div className={classes.details}>
//               <CardContent className={classes.content}>
//                 <Typography component="h5" variant="h5">
//                   {Title}
//                 </Typography>
//                 <Typography component="h6" variant="h6">
//                   Language: {Language}
//                 </Typography>
//                 <Typography component="h6" variant="h6">
//                   Genre: {Genre}
//                 </Typography>
//                 <Typography component="h6" variant="h6">
//                   Released: {Released}
//                 </Typography>
//                 <Typography component="h6" variant="h6">
//                   Writer: {Writer}
//                 </Typography>
//               </CardContent>
//               <CardActions>
//                 <Button size="large" color="primary">
//                   Nominate
//                 </Button>
//               </CardActions>
//             </div>
//           </Card>
//         </MoviesDataWrapper>
//       )}
//     </>
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
