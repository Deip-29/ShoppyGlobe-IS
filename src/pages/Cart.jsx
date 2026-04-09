import { useSelector } from "react-redux";
import CartItem from "../components/CartItem";

export default function Cart() {
  const items = useSelector((s) => s.cart.items);

  // ✅ TOTAL QTY
  const totalQty = items.reduce((acc, item) => acc + item.qty, 0);

  // ✅ TOTAL PRICE
  const totalPrice = items.reduce(
    (acc, item) => acc + item.price * item.qty * 83,
    0
  );

  if (items.length === 0) {
    return (
      <div className="container empty-cart">
        <h1>🛒 Your Cart is Empty</h1>
        <p>Looks like you haven’t added anything yet.</p>
        <a href="/products" className="hero-btn">
          Start Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container">

      {/* CART ITEMS */}
      {items.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}

      {/* SUMMARY */}
      <div className="cart-summary">
        <h3>Total Items: {totalQty}</h3>
        <h2>
          Total Price: ₹{totalPrice.toLocaleString("en-IN")}
        </h2>

        <button className="checkout-btn">
          Proceed to Checkout
        </button>
      </div>

    </div>
  );
}