import { useEffect, useState } from "react";

// take in the url
function useMovieFetch(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {

    fetch(url)
      .then((r) => r.json())
      .then((movie) => {
        setData(movie);
        setIsLoaded(true);
      });
  }, [url]);

  return { data, isLoaded };
}

export default useMovieFetch;
