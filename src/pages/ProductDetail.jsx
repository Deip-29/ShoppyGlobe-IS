import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

export default function ProductDetail() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, [id]);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div className="container details">
      <img src={data.thumbnail} alt={data.title} />

      <div>
        <h1>{data.title}</h1>
        <p>{data.description}</p>

        
        <p style={{ fontWeight: "600", fontSize: "18px" }}>
          ₹{(data.price * 83).toLocaleString("en-IN")}
        </p>
      </div>
    </div>
  );
}