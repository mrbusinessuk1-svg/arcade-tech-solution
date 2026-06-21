import { useState, useContext } from "react";
import { CartContext } from "../context/CartContext";
import { products } from "../data/products";

export default function Credits() {
  const { addToCart } = useContext(CartContext);

  const [quantities, setQuantities] = useState(
    products.reduce((acc, p) => {
      acc[p.id] = 1;
      return acc;
    }, {})
  );

  const handleQty = (id, change) => {
    setQuantities((prev) => ({
      ...prev,
      [id]: Math.max(1, prev[id] + change),
    }));
  };

  const handleAdd = (product) => {
    addToCart({
      ...product,
      quantity: quantities[product.id],
    });

    alert("Added to cart!");
  };

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>IT Services</h1>
      <p style={styles.sub}>Select your required service</p>

      {products.map((product) => (
        <div key={product.id} style={styles.card}>
          <img src={product.img} style={styles.img} />

          <div style={{ flex: 1 }}>
            <h2>{product.title}</h2>
            <p style={styles.price}>From ${product.price}</p>

            {/* QTY */}
            <div style={styles.qtyBox}>
              <button onClick={() => handleQty(product.id, -1)} style={styles.btn}>-</button>
              <span style={{ margin: "0 10px" }}>{quantities[product.id]}</span>
              <button onClick={() => handleQty(product.id, 1)} style={styles.btn}>+</button>
            </div>

            {/* ONLY CART */}
            <button style={styles.cartBtn} onClick={() => handleAdd(product)}>
              🛒 Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    padding: "40px 20px",
    maxWidth: "1000px",
    margin: "auto",
    fontFamily: "sans-serif",
    minHeight: "100vh",
    background: "linear-gradient(135deg,#0f172a,#1e0a3c,#4c1d95)",
    color: "white",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.3rem",
  },

  sub: {
    textAlign: "center",
    color: "#c7d2fe",
    marginBottom: "20px",
  },

  card: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    marginBottom: "15px",
    background: "rgba(255,255,255,0.08)",
    borderRadius: "15px",
    border: "1px solid rgba(255,255,255,0.15)",
  },

  img: {
    width: "180px",
    borderRadius: "10px",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    marginTop: "10px",
  },

  btn: {
    padding: "5px 10px",
    background: "#7c3aed",
    border: "none",
    color: "white",
    borderRadius: "6px",
    cursor: "pointer",
  },

  cartBtn: {
    marginTop: "10px",
    padding: "10px",
    background: "#10b981",
    border: "none",
    color: "white",
    borderRadius: "8px",
    cursor: "pointer",
  },
};