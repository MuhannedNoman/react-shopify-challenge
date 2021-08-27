import { useEffect, useState } from "react";
import axios from "axios";

// take in the url
function useMovieFetch(url) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    try {
      const fetchData = async () => {
        await axios.get(url).then((response) => {
          setData(response.data);
          setIsLoaded(true);
        });
      };
      fetchData();
    } catch (error) {
      console.log(
        "🚀 ~ file: useMovieFetch.js ~ line 20 ~ useEffect ~ error",
        error
      );
    }
  }, [url]);

  return { data, isLoaded };
}

export default useMovieFetch;
