import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Components/Header/Header.jsx";
import Fetch from "./Components/Fetch/Fetch";


function App() {
  return (
    <div className="App">
      <Fetch />
      <Header />
    </div>
  );
}

export default App;
