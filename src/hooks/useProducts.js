import { useEffect, useState } from "react";

export default function useProducts() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => setData(res.products || []))
      .catch((err) => setError(err));
  }, []);

  return { data, error };
}