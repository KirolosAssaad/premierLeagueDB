import { useState } from "react";

export const useApi = (apiFunc, handleResponse) => {
    const [loading, setLodaing] = useState(false);
    const [failedToLoad, setFailedToLoad] = useState(false);
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
  
    const request = async (...args) => {
      setLodaing(true);
      let result;
      try {
        result = await apiFunc(...args);
        if (handleResponse) result = handleResponse(result);
  
        setData(result);
        setError(null);
        setFailedToLoad(false);
      } catch (err) {
        console.log("error from useApi:", err);
        setError(err);
        setData([]);
        setFailedToLoad(true);
      }
  
      setLodaing(false);
  
      return result;
    };
    return {
      data,
      failedToLoad,
      loading,
      request,
      error,
    };
  };
  
  
  