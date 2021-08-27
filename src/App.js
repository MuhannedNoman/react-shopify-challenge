import "./App.css";
import React, { useContext } from "react";
import Search from "./components/searchBar/Search";
import MoviesList from "./components/movies/MoviesList";
import NominatesList from "./components/movies/NominatesList";
import moviesContext from "./store/moviesContext";
import Modal from "./components/modal/Modal";

function App() {
  const { moviesState } = useContext(moviesContext);
  const { nominates } = moviesState;
  return (
    <div className="App">
      <Search />
      <MoviesList />
      <NominatesList />
      {nominates.length === 5 && <Modal />}
    </div>
  );
}

export default App;
