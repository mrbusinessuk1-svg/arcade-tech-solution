export default function HowItWorks() {
  return (
    <div style={styles.page}>

      {/* HEADER */}
      <section style={styles.header}>
        <h1 style={styles.title}>How It Works</h1>
        <p style={styles.sub}>
          Simple 3-step process to get your IT services instantly
        </p>
      </section>

      {/* STEP 1 */}
      <section style={styles.card}>
        <div style={styles.badge}>1</div>
        <h2>Choose Your Service</h2>
        <p>
          Select from our wide range of IT services like repair, website development,
          software installation, digital marketing, or consulting.
        </p>
      </section>

      {/* STEP 2 */}
      <section style={styles.card}>
        <div style={styles.badge}>2</div>
        <h2>Place Your Order</h2>
        <p>
          Add your selected service to cart and proceed to secure checkout.
          Flexible payment options are available for your convenience.
        </p>
      </section>

      {/* STEP 3 */}
      <section style={styles.card}>
        <div style={styles.badge}>3</div>
        <h2>Get Instant Support</h2>
        <p>
          Our expert team will contact you immediately and start working on your
          project without delay.
        </p>
      </section>

      {/* FOOTER NOTE */}
      <section style={styles.note}>
        <h3>Why Clients Trust Us</h3>
        <p>
          We focus on speed, quality, and reliability. Every project is handled
          by professionals to ensure the best results for your business growth.
        </p>
      </section>

    </div>
  );
}

/* STYLES */
const styles = {
  page: {
    fontFamily: "sans-serif",
    padding: "50px 20px",
    maxWidth: "900px",
    margin: "auto",
    minHeight: "100vh",

    /* PREMIUM DARK GRADIENT */
    background: "linear-gradient(135deg, #0f172a, #1e0a3c, #4c1d95)",
  },

  header: {
    textAlign: "center",
    marginBottom: "40px",
    color: "white",
  },

  title: {
    fontSize: "2.5rem",
    marginBottom: "10px",
  },

  sub: {
    color: "#c7d2fe",
    fontSize: "1rem",
  },

  card: {
    background: "rgba(255,255,255,0.08)",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "20px",
    boxShadow: "0 8px 25px rgba(0,0,0,0.3)",
    border: "1px solid rgba(255,255,255,0.15)",
    backdropFilter: "blur(10px)",
    color: "white",
  },

  badge: {
    width: "35px",
    height: "35px",
    borderRadius: "10px",
    background: "#7c3aed",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
    marginBottom: "10px",
  },

  note: {
    marginTop: "30px",
    padding: "25px",
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "white",
    borderRadius: "15px",
    textAlign: "center",
    boxShadow: "0 10px 25px rgba(124,58,237,0.3)",
  },
};