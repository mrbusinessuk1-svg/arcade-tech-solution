import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function Credits() {
  const { addToCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    products.reduce((acc, prod) => {
      acc[prod.id] = 1;
      return acc;
    }, {})
  );

  const handleAddToCart = (product) => {
    addToCart({
      ...product,
      quantity: quantities[product.id],
    });

    alert(`${product.title} added to cart!`);
  };

  const handleQuantityChange = (id, delta) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }));
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Arcade Tech Solution Credits</h1>

      <div style={styles.grid}>
        {products.map((product) => (
          <div key={product.id} style={styles.card}>
            
            {/* ✅ FIXED IMG (ALT ADDED) */}
            <img
              src={product.img}
              alt={product.title}
              style={styles.img}
            />

            <h2 style={styles.title}>{product.title}</h2>

            <p style={styles.price}>${product.price} USD</p>

            <div style={styles.qtyBox}>
              <button
                style={styles.qtyBtn}
                onClick={() => handleQuantityChange(product.id, -1)}
              >
                -
              </button>

              <span style={styles.qty}>
                {quantities[product.id]}
              </span>

              <button
                style={styles.qtyBtn}
                onClick={() => handleQuantityChange(product.id, 1)}
              >
                +
              </button>
            </div>

            <button
              style={styles.cartBtn}
              onClick={() => handleAddToCart(product)}
            >
              🛒 Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */

const styles = {
  page: {
    padding: "40px 20px",
    maxWidth: "1100px",
    margin: "auto",
    fontFamily: "sans-serif",
    background: "#f5f3ff",
    minHeight: "100vh",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.2rem",
    marginBottom: "30px",
    color: "#4c1d95",
    fontWeight: "bold",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },

  card: {
    width: "280px",
    background: "#fff",
    borderRadius: "15px",
    padding: "15px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    textAlign: "center",
  },

  img: {
    width: "100%",
    height: "160px",
    objectFit: "cover",
    borderRadius: "12px",
  },

  title: {
    fontSize: "18px",
    margin: "10px 0",
  },

  price: {
    color: "#7c3aed",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  qtyBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "10px",
    marginBottom: "10px",
  },

  qtyBtn: {
    padding: "6px 12px",
    background: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    fontWeight: "bold",
  },

  qty: {
    fontWeight: "bold",
    fontSize: "16px",
  },

  cartBtn: {
    padding: "10px 15px",
    background: "#10b981",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};