import React from "react";

export default function Policies() {
  const policySections = [
    {
      title: "Privacy Policy",
      content: [
        "We respect your privacy and ensure all personal data is protected securely.",
        "We only collect necessary information like contact details and form submissions.",
        "Data is used only for communication and service delivery purposes.",
        "We never sell, trade, or share your personal information.",
        "All data is handled with proper security standards.",
      ],
    },
    {
      title: "Terms & Conditions",
      content: [
        "By using our services, you agree to our terms and policies.",
        "We provide IT services including development, repair, and digital solutions.",
        "All payments are for services only and must be completed securely.",
        "Service results depend on project requirements and scope.",
        "We reserve the right to update terms anytime.",
      ],
    },
    {
      title: "Refund Policy",
      content: [
        "All digital and service purchases are non-refundable.",
        "Refunds are only issued in case of technical or payment errors.",
        "No refunds for completed or delivered services.",
        "Contact support for any payment-related issues.",
      ],
    },
    {
      title: "Delivery Policy",
      content: [
        "We provide digital IT services, no physical shipping involved.",
        "Service delivery starts immediately after confirmation.",
        "Delivery time depends on project complexity.",
        "Updates are shared via email or direct communication.",
      ],
    },
  ];

  return (
    <div style={styles.page}>
      <h1 style={styles.heading}>Policies & Legal Information</h1>
      <p style={styles.sub}>Transparent and professional service guidelines</p>

      {policySections.map((section, index) => (
        <div key={index} style={styles.card}>
          <div style={styles.titleBox}>
            <div style={styles.badge}>📄</div>
            <h2 style={styles.title}>{section.title}</h2>
          </div>

          {section.content.map((line, i) => (
            <p key={i} style={styles.text}>
              {line}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
}

const styles = {
  page: {
    padding: "50px 20px",
    maxWidth: "900px",
    margin: "auto",
    fontFamily: "sans-serif",
    minHeight: "100vh",

    /* MODERN GRADIENT BACKGROUND */
    background: "linear-gradient(135deg, #0f172a, #1e0a3c, #4c1d95)",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.3rem",
    color: "#fff",
    marginBottom: "10px",
  },

  sub: {
    textAlign: "center",
    marginBottom: "40px",
    color: "#c7d2fe",
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

  titleBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },

  badge: {
    width: "35px",
    height: "35px",
    background: "#7c3aed",
    color: "white",
    borderRadius: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "18px",
  },

  title: {
    margin: 0,
    color: "white",
  },

  text: {
    margin: "6px 0",
    color: "#e5e7eb",
    lineHeight: "1.6",
    fontSize: "14.5px",
  },
};