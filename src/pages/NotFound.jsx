import { useLocation } from "react-router-dom";

export default function NotFound(){
  const loc = useLocation();
  return (
    <div className="container">
      <h1>404</h1>
      <p>Page not found: {loc.pathname}</p>
    </div>
  );
}