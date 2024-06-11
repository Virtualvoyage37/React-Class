import axios from "axios";
import React, { useEffect, useState } from "react";

const useFetchApi = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchdata = async () => {
      try {
        const res = await axios.get(url);
        const apidata = await res?.data;
        setData(apidata);
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchdata();
    
    }, [url]);
  return { data, loading, error };

  //   return <div>UseFetchApi</div>;
};

export default useFetchApi;
