import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Search from "../Search/Search";

function Home() {
  const [query, setQuery] = useState("");
  // const [movies, setMovies] = useState([]);
  // console.log(query);
  // useEffect(() => {
  //   fetch("https://www.omdbapi.com/?i=tt3896198&apikey=c6b71c9e&")
  //     .then((r) => r.json())
  //     .then(
  //       (data) => {
  //         setMovies(data);
  //       },
  //       [query]
  //     );
  // });

  return (
    <Container>
      <Search setQuery={setQuery} className="col-2" />
    </Container>
  );
}

export default Home;
