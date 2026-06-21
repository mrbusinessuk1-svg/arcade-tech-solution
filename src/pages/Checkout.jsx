import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";

export default function Checkout() {
  const { cart } = useContext(CartContext);
  const [method, setMethod] = useState("card");

  const total = cart.reduce((sum, item) => {
    return sum + (Number(item.price) || 0) * (Number(item.quantity) || 1);
  }, 0);

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        {/* HEADER */}
        <h1 style={styles.heading}>🔐 Secure Checkout</h1>
        <p style={styles.sub}>
          Complete your payment safely using your preferred method
        </p>

        {/* ORDER SUMMARY */}
        <div style={styles.box}>
          <h2 style={styles.boxTitle}>Order Summary</h2>

          {cart.map((item) => (
            <div key={item.id} style={styles.item}>
              <span>{item.title || item.name}</span>
              <span>
                {item.quantity} × ${Number(item.price) || 0}
              </span>
            </div>
          ))}

          <h3 style={styles.total}>Total: ${total.toFixed(2)}</h3>
        </div>

        {/* PAYMENT METHODS */}
        <div style={styles.box}>
          <h2 style={styles.boxTitle}>Payment Method</h2>

          <div style={styles.methods}>

            {/* CARD FIRST */}
            <button
              onClick={() => setMethod("card")}
              style={{
                ...styles.btn,
                background:
                  method === "card"
                    ? "linear-gradient(135deg,#22c55e,#16a34a)"
                    : "#111",
              }}
            >
              💳 Pay with Card
            </button>

            <button
              onClick={() => setMethod("stripe")}
              style={{
                ...styles.btn,
                background:
                  method === "stripe"
                    ? "linear-gradient(135deg,#6366f1,#4f46e5)"
                    : "#1e1b4b",
              }}
            >
              ⚡ Stripe
            </button>

            <button
              onClick={() => setMethod("square")}
              style={{
                ...styles.btn,
                background:
                  method === "square"
                    ? "linear-gradient(135deg,#10b981,#059669)"
                    : "#064e3b",
              }}
            >
              🟢 Square
            </button>
          </div>
        </div>

        {/* CARD FORM */}
        {method === "card" && (
          <div style={styles.formBox}>
            <h3 style={styles.formTitle}>Card Details</h3>

            <input style={styles.input} placeholder="Card Number" />
            <input style={styles.input} placeholder="Card Holder Name" />
            <div style={{ display: "flex", gap: 10 }}>
              <input style={styles.input} placeholder="MM/YY" />
              <input style={styles.input} placeholder="CVC" />
            </div>

            <button style={styles.payBtn}>
              Pay ${total.toFixed(2)}
            </button>
          </div>
        )}

        {/* STRIPE */}
        {method === "stripe" && (
          <div style={styles.altBox}>
            <h3>Stripe Secure Payment</h3>
            <button
              style={styles.altBtn}
              onClick={() =>
                (window.location.href = "https://buy.stripe.com/bJe4gz0U19UO7MgbZQ3sI02")
              }
            >
              Continue with Stripe
            </button>
          </div>
        )}

        {/* SQUARE */}
        {method === "square" && (
          <div style={styles.altBox}>
            <h3>Square Secure Payment</h3>
            <button
              style={styles.altBtn}
              onClick={() =>
                (window.location.href = "https://square.link/u/9noC0BZd")
              }
            >
              Continue with Square
            </button>
          </div>
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
    background: "linear-gradient(135deg,#4c1d95,#7c3aed,#a855f7)",
    fontFamily: "sans-serif",
  },

  container: {
    maxWidth: "850px",
    margin: "auto",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(20px)",
    borderRadius: "18px",
    padding: "25px",
    color: "white",
    boxShadow: "0 10px 35px rgba(0,0,0,0.3)",
  },

  heading: {
    textAlign: "center",
    fontSize: "32px",
    marginBottom: "5px",
  },

  sub: {
    textAlign: "center",
    marginBottom: "25px",
    color: "#ddd",
  },

  box: {
    background: "rgba(0,0,0,0.25)",
    padding: "18px",
    borderRadius: "14px",
    marginBottom: "20px",
  },

  boxTitle: {
    marginBottom: "10px",
  },

  item: {
    display: "flex",
    justifyContent: "space-between",
    padding: "8px 0",
    borderBottom: "1px solid rgba(255,255,255,0.1)",
  },

  total: {
    marginTop: "10px",
    color: "#22c55e",
  },

  methods: {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
  },

  btn: {
    flex: 1,
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
  },

  formBox: {
    background: "rgba(0,0,0,0.3)",
    padding: "20px",
    borderRadius: "14px",
  },

  formTitle: {
    marginBottom: "10px",
  },

  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "8px",
    border: "none",
    outline: "none",
  },

  payBtn: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg,#22c55e,#16a34a)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },

  altBox: {
    background: "rgba(0,0,0,0.25)",
    padding: "20px",
    borderRadius: "14px",
    textAlign: "center",
  },

  altBtn: {
    padding: "12px 20px",
    background: "#6366f1",
    border: "none",
    borderRadius: "10px",
    color: "white",
    cursor: "pointer",
    fontWeight: "bold",
    marginTop: "10px",
  },
};