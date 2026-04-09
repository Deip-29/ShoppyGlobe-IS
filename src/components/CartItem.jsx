import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">

      {/* IMAGE */}
      <img src={item.thumbnail} alt={item.title} />

      {/* DETAILS */}
      <div className="cart-info">
        <h3>{item.title}</h3>

        <p className="price">
          ₹{(item.price * 83).toLocaleString("en-IN")}
        </p>

        {/* QUANTITY CONTROLS */}
        <div className="qty">
          <button onClick={() => dispatch(decreaseQty(item.id))}>-</button>
          <span>{item.qty}</span>
          <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
        </div>
      </div>

      {/* REMOVE */}
      <button
        className="remove-btn"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}