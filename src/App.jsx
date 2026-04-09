import { createBrowserRouter, RouterProvider } from "react-router-dom";

function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}



export default function App() {
  return <RouterProvider router={router} />;
}