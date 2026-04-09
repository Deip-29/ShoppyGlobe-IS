import useProducts from "../hooks/useProducts";
import ProductItem from "../components/ProductItem";
import { useDispatch, useSelector } from "react-redux";
import { setSearch } from "../redux/searchSlice";

export default function ProductList() {
  const { data = [], error } = useProducts(); // ✅ SAFE DEFAULT
  const dispatch = useDispatch();
  const search = useSelector((s) => s.search || "");

  if (error) return <h2>Error: {String(error)}</h2>;

  const filtered = data.filter((p) =>
    p.title?.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <input
        placeholder="Search products..."
        value={search}
        onChange={(e) => dispatch(setSearch(e.target.value))}
      />

      <div className="grid">
        {filtered.map((p) => (
          <ProductItem key={p.id} product={p} />
        ))}
      </div>
    </div>
  );
}