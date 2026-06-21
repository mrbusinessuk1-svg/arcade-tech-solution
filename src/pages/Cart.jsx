import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, increaseQty, decreaseQty, removeItem } =
    useContext(CartContext);

  // ✅ SAFE TOTAL (NaN FIX)
  const total = cart.reduce((sum, item) => {
    const price = Number(item.price) || 0;
    const qty = Number(item.quantity) || 1;
    return sum + price * qty;
  }, 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <h2 style={styles.heading}>🛒 Your Cart</h2>

        {cart.length === 0 ? (
          <div style={styles.emptyBox}>
            <p style={styles.emptyText}>Your cart is empty 😢</p>
          </div>
        ) : (
          <>
            {/* CART ITEMS */}
            <div style={styles.list}>
              {cart.map((item) => (
                <div key={item.id} style={styles.card}>
                  <div>
                    <h3 style={styles.title}>
                      {item.title || item.name}
                    </h3>

                    <p style={styles.price}>
                      ${Number(item.price) || 0} each
                    </p>
                  </div>

                  {/* QUANTITY CONTROLS */}
                  <div style={styles.qtyBox}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => decreaseQty(item.id)}
                    >
                      -
                    </button>

                    <span style={styles.qty}>
                      {item.quantity}
                    </span>

                    <button
                      style={styles.qtyBtn}
                      onClick={() => increaseQty(item.id)}
                    >
                      +
                    </button>
                  </div>

                  {/* REMOVE */}
                  <button
                    onClick={() => removeItem(item.id)}
                    style={styles.removeBtn}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            {/* TOTAL + CHECKOUT */}
            <div style={styles.totalBox}>
              <h3>Total: ${total.toFixed(2)}</h3>

              {/* CHECKOUT BUTTON */}
              <button
                style={styles.checkoutBtn}
                onClick={() => window.location.href = "/checkout"}
              >
                Proceed to Checkout
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/* ================= STYLES ================= */
const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #4c1d95, #7c3aed, #a855f7)",
  },

  container: {
    maxWidth: "900px",
    margin: "0 auto",
    padding: "25px",
    background: "rgba(255,255,255,0.10)",
    backdropFilter: "blur(15px)",
    borderRadius: "18px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
    color: "#fff",
  },

  heading: {
    fontSize: "28px",
    marginBottom: "20px",
    fontWeight: "bold",
  },

  emptyBox: {
    padding: "40px",
    textAlign: "center",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "12px",
  },

  emptyText: {
    fontSize: "18px",
    color: "#f3f4f6",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "18px",
    borderRadius: "14px",
    background: "rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 20px rgba(0,0,0,0.2)",
  },

  title: {
    margin: 0,
    fontSize: "16px",
    fontWeight: "600",
  },

  price: {
    margin: "5px 0 0",
    color: "#e9d5ff",
    fontWeight: "bold",
  },

  qtyBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },

  qtyBtn: {
    padding: "5px 10px",
    border: "none",
    background: "#ffffff20",
    color: "white",
    cursor: "pointer",
    borderRadius: "6px",
    fontSize: "16px",
  },

  qty: {
    fontWeight: "bold",
  },

  removeBtn: {
    background: "#ef4444",
    color: "white",
    border: "none",
    padding: "8px 12px",
    borderRadius: "8px",
    cursor: "pointer",
  },

  totalBox: {
    marginTop: "25px",
    padding: "20px",
    background: "rgba(255,255,255,0.15)",
    borderRadius: "14px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  checkoutBtn: {
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    color: "white",
    border: "none",
    padding: "10px 18px",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
  },
};