import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { addToCart } = useContext(CartContext);

  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{product.title}</h3>

      <p style={styles.price}>${product.price}</p>

      <button
        onClick={() => addToCart(product)}
        style={styles.button}
      >
        Add to Cart
      </button>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #e5e7eb",
    padding: "18px",
    borderRadius: "16px",
    width: "250px",
    background: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "0.3s ease",
    cursor: "pointer",
  },

  title: {
    fontSize: "16px",
    fontWeight: "600",
    marginBottom: "10px",
    color: "#111827",
  },

  price: {
    fontSize: "15px",
    fontWeight: "bold",
    color: "#7c3aed",
    marginBottom: "15px",
  },

  button: {
    padding: "10px",
    width: "100%",
    background: "linear-gradient(135deg, #7c3aed, #5b21b6)",
    border: "none",
    color: "white",
    borderRadius: "10px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "0.3s",
  },
};