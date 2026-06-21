import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Navbar() {
  const { cart } = useContext(CartContext);

  const totalQuantity = cart.reduce(
    (sum, item) => sum + (item.quantity || 1),
    0
  );

  return (
    <nav style={styles.nav}>
      <h2 style={styles.logo}>Arcade Tech Solution</h2>

      <div style={styles.links}>
        <Link style={styles.link} to="/">Home</Link>
        <Link style={styles.link} to="/credits">Services</Link>
        <Link style={styles.link} to="/how">How It Works</Link>

        <Link style={styles.cart} to="/cart">
          🛒 Cart
          {totalQuantity > 0 && (
            <span style={styles.badge}>{totalQuantity}</span>
          )}
        </Link>

        <Link style={styles.link} to="/contact">Contact</Link>
        <Link style={styles.link} to="/policies">Policies</Link>
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    padding: "14px 25px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "rgba(91, 33, 182, 0.95)",
    backdropFilter: "blur(10px)",
    color: "white",
    position: "sticky",
    top: 0,
    zIndex: 1000,
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
  },

  logo: {
    margin: 0,
    fontSize: "1.4rem",
    fontWeight: "bold",
    letterSpacing: "1px",
  },

  links: {
    display: "flex",
    gap: "18px",
    alignItems: "center",
  },

  link: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "500",
    padding: "6px 10px",
    borderRadius: "8px",
    transition: "0.3s",
  },

  cart: {
    color: "#fff",
    textDecoration: "none",
    fontWeight: "600",
    padding: "6px 12px",
    borderRadius: "8px",
    background: "rgba(255,255,255,0.15)",
    position: "relative",
  },

  badge: {
    background: "red",
    borderRadius: "50%",
    padding: "2px 7px",
    fontSize: "0.75rem",
    marginLeft: "6px",
  },
};