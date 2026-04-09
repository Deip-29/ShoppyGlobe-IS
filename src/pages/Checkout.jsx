import { useDispatch } from "react-redux";
import { clearCart } from "../redux/cartSlice";
import { useNavigate } from "react-router-dom";

export default function Checkout(){
  const dispatch = useDispatch();
  const nav = useNavigate();

  const placeOrder = ()=>{
    alert("Order placed");
    dispatch(clearCart());
    nav("/");
  };

  return (
    <div className="container">
      <h1>Checkout</h1>
      <button onClick={placeOrder}>Place Order</button>
    </div>
  );
}
