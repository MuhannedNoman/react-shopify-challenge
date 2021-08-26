import "./App.css";
import React from "react";
import Search from "./components/searchBar/Search";
import MoviesList from "./components/movies/MoviesList";
import NominatesList from "./components/movies/NominatesList";

function App() {
  return (
    <div className="App">
      <Search />
      <MoviesList />
      <NominatesList />
    </div>
  );
}

export default App;
