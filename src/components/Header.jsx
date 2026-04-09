import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const items = useSelector((state) => state.cart?.items || []);
  const count = items.length;

  return (
    <nav className="nav">
      <h2>🛍️ ShoppyGlobe</h2>

      <div>
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart ({count})</Link>
      </div>
    </nav>
  );
}