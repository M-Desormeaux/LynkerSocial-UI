import { useEffect, useState } from "react";

export const useGet = (endpoint) => {
  const [data, setData] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    fetch(endpoint)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
        setIsLoaded(true);
      });
  }, []);
  return { data, isLoaded };
};
