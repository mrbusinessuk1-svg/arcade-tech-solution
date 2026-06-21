import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    comment: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully 🚀");
    setFormData({ name: "", email: "", phone: "", comment: "" });
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>

        <h1 style={styles.heading}>Contact Us</h1>
        <p style={styles.subHeading}>
          💡 We’re here to help with all your IT & Tech needs
        </p>

        {/* INFO BOX */}
        <div style={styles.infoGrid}>
          <div style={styles.infoBox}>
            <h3>📧 Email</h3>
            <p>Arcadetechsolutions1@gmail.com</p>
          </div>

          <div style={styles.infoBox}>
            <h3>📱 Contact</h3>
            <p>+44 07470808393</p>
          </div>

          <div style={styles.infoBox}>
            <h3>⚡ Response Time</h3>
            <p>Within 24 hours</p>
          </div>
        </div>

        {/* FORM */}
        <form onSubmit={handleSubmit} style={styles.form}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
            style={styles.input}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone (optional)"
            value={formData.phone}
            onChange={handleChange}
            style={styles.input}
          />

          <textarea
            name="comment"
            placeholder="Write your message..."
            value={formData.comment}
            onChange={handleChange}
            rows={5}
            required
            style={styles.textarea}
          />

          <button type="submit" style={styles.button}>
            Send Message 🚀
          </button>
        </form>
      </div>
    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    padding: "40px",
    background: "linear-gradient(135deg, #4c1d95, #7c3aed, #a855f7)",
  },

  container: {
    maxWidth: "900px",
    margin: "auto",
    padding: "30px",
    background: "rgba(255,255,255,0.12)",
    backdropFilter: "blur(15px)",
    borderRadius: "18px",
    color: "#fff",
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  },

  heading: {
    fontSize: "32px",
    marginBottom: "10px",
  },

  subHeading: {
    marginBottom: "25px",
    color: "#e9d5ff",
  },

  infoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "15px",
    marginBottom: "25px",
  },

  infoBox: {
    background: "rgba(255,255,255,0.15)",
    padding: "15px",
    borderRadius: "12px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },

  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
  },

  textarea: {
    padding: "12px",
    borderRadius: "10px",
    border: "none",
    outline: "none",
    background: "rgba(255,255,255,0.2)",
    color: "#fff",
  },

  button: {
    padding: "14px",
    background: "linear-gradient(135deg, #22c55e, #16a34a)",
    border: "none",
    borderRadius: "10px",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};