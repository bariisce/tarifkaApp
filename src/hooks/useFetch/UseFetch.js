import React, { useState, useEffect } from "react";
import axios from "axios";

function UseFetch(url) {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const fetchData = () => {
    axios
     .get(url)
     .then(( response ) => {
        setData(response.data);
        setLoading(false);
     })
     .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);
  return { loading, error, data };
}

export default UseFetch;
