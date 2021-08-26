import React, { useState, useEffect } from "react";
import Home from "../Home/Home";

export default function Fetch() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [q, setQuery] = useState("spiderman");

  useEffect(() => {
    setData(null);

    fetch(`http://www.omdbapi.com/?s=${q}&apikey=3eae97bc`)
      .then((resp) => resp)
      .then((resp) => resp.json())
      .then((response) => {
        if (response.Response === "False") {
        } else {
          setData(response.Search);
        }

        setLoading(true);
      });
  }, [q]);

  return (<div>{loading ? <Home data={data} isloading={loading} /> : ""}</div>);
}

