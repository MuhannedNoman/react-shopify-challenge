import { useEffect, useState } from "react";
import axios from "axios";
function useFetch(url, id) {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  function fetchData() {
    setIsLoading(true);
    setError(null);
    axios
      .get(url)
      .then((response) => {
        setIsLoading(false);
        setData(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  }
  useEffect(() => {
    if (id !== "") fetchData();
  }, [url]);
  return { data, isLoading, error };
}
export default useFetch;
