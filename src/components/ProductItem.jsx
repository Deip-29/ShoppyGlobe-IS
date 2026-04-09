import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";
import { Link } from "react-router-dom";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  if (!product) return null; // ✅ safety

  return (
    <div className="card">
      <img src={product.thumbnail} alt={product.title} />

      <h3>{product.title}</h3>
     <p className="price">
  ₹{(product.price * 83).toLocaleString("en-IN")}
  <span className="old-price">
    ₹{(product.price * 100).toLocaleString("en-IN")}
  </span>
</p>

      <button onClick={() => dispatch(addToCart(product))}>
        Add to Cart
      </button>

      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
}