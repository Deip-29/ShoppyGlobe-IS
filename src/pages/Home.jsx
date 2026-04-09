export default function Home() {
  return (
    <div className="container">

      {/* HERO SECTION */}
      <div className="hero">
        <div className="hero-text">
          <h1>Shop Smarter, Live Better</h1>
          <p>
            Discover trending products, best deals, and premium collections —
            all in one place.
          </p>
          <a href="/products" className="hero-btn">Explore Products</a>
        </div>

        <div className="hero-img">
          <img src="https://images.unsplash.com/photo-1607083206968-13611e3d76db" />
        </div>
      </div>

      {/* FEATURE SECTION */}
      <div className="features">
        <div className="feature-card">🚚 Free Delivery</div>
        <div className="feature-card">💳 Secure Payment</div>
        <div className="feature-card">⭐ Top Quality</div>
        <div className="feature-card">🔄 Easy Returns</div>
      </div>

      {/* CALL TO ACTION */}
      <div className="cta">
        <h2>Start Shopping Now</h2>
        <a href="/products">Browse Products →</a>
      </div>

    </div>
  );
}