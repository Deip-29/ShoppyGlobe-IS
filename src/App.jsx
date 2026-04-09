import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import NotFound from "./pages/NotFound";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}

const router = createBrowserRouter([
  { path: "/", element: <Layout><Home /></Layout> },
  { path: "/products", element: <Layout><ProductList /></Layout> },
  { path: "/product/:id", element: <Layout><ProductDetail /></Layout> },
  { path: "/cart", element: <Layout><Cart /></Layout> },
  { path: "/checkout", element: <Layout><Checkout /></Layout> },
  { path: "*", element: <NotFound /> }
]);

export default function App() {
  return <RouterProvider router={router} />;
}