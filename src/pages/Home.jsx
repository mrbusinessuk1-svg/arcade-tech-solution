import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div style={styles.page}>

      {/* HERO */}
      <section style={styles.hero}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.title}>Arcade Tech Hub</h1>
          <p style={styles.subtitle}>
            Professional IT Solutions, Web Development & Digital Growth Services
          </p>

          <Link to="/credits">
            <button style={styles.heroBtn}>Explore Services</button>
          </Link>
        </div>
      </section>

      {/* SERVICES */}
      <section style={styles.section}>
        <h2 style={styles.heading}>Our Expert Services</h2>

        <div style={styles.grid}>

          <div style={styles.card}>
            <img src="https://www.bobvila.com/wp-content/uploads/2021/05/iStock-1222147014.jpg?w=1152&h=768" alt="Repair Service" style={styles.img} />
            <h3>Computer Repair</h3>
            <p>Fast & reliable laptop and PC repair solutions.</p>
          </div>

          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=500" alt="Software Install" style={styles.img} />
            <h3>Software Installation</h3>
            <p>Complete setup of software, drivers & tools.</p>
          </div>

          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500" alt="Website Dev" style={styles.img} />
            <h3>Website Development</h3>
            <p>Modern React & business websites for growth.</p>
          </div>

          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500" alt="Marketing" style={styles.img} />
            <h3>Digital Marketing</h3>
            <p>SEO, ads & social media marketing for brands.</p>
          </div>

          <div style={styles.card}>
            <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500" alt="Consulting" style={styles.img} />
            <h3>IT Consulting</h3>
            <p>Expert guidance to grow your tech business.</p>
          </div>

        </div>
      </section>

      {/* MISSION */}
      <section style={styles.missionWrap}>
        <div style={styles.missionCard}>
          <div style={styles.badge}>🚀 Our Mission</div>

          <h2 style={styles.missionTitle}>
            Empowering Businesses Through Technology
          </h2>

          <p style={styles.missionText}>
            We provide modern, fast, and reliable IT solutions that help businesses grow.
            Our goal is to make technology simple and accessible for everyone.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={styles.cta}>
        <h2>Ready to Grow Your Business?</h2>
        <p>Let’s build something powerful together</p>

        <Link to="/credits">
          <button style={styles.ctaBtn}>Get Started</button>
        </Link>
      </section>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "sans-serif",
  },

  hero: {
    height: "75vh",
    backgroundImage:
      "url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },

  heroOverlay: {
    background: "rgba(0,0,0,0.6)",
    padding: "40px",
    borderRadius: "15px",
    textAlign: "center",
    color: "white",
  },

  title: { fontSize: "3rem" },
  subtitle: { fontSize: "1.1rem", marginBottom: "20px" },

  heroBtn: {
    padding: "12px 25px",
    background: "#7c3aed",
    color: "white",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
  },

  section: {
    padding: "60px 20px",
    textAlign: "center",
  },

  heading: {
    fontSize: "2rem",
    marginBottom: "30px",
  },

  grid: {
    display: "flex",
    flexWrap: "wrap",
    gap: "20px",
    justifyContent: "center",
  },

  card: {
    width: "260px",
    background: "#fff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 6px 18px rgba(0,0,0,0.1)",
  },

  img: {
    width: "100%",
    height: "150px",
    objectFit: "cover",
    borderRadius: "10px",
    marginBottom: "10px",
  },

  missionWrap: {
    padding: "70px 20px",
    display: "flex",
    justifyContent: "center",
    background: "linear-gradient(135deg,#f5f3ff,#ede9fe)",
  },

  missionCard: {
    maxWidth: "800px",
    padding: "40px",
    borderRadius: "18px",
    background: "linear-gradient(135deg,#7c3aed,#a855f7)",
    color: "white",
    textAlign: "center",
  },

  badge: {
    padding: "6px 12px",
    background: "rgba(255,255,255,0.2)",
    borderRadius: "20px",
    display: "inline-block",
    marginBottom: "10px",
  },

  missionTitle: { fontSize: "1.8rem" },
  missionText: { fontSize: "1rem", lineHeight: "1.6" },

  cta: {
    padding: "60px 20px",
    textAlign: "center",
    background: "linear-gradient(135deg,#4c1d95,#7c3aed,#a855f7)",
    color: "white",
  },

  ctaBtn: {
    padding: "12px 25px",
    background: "white",
    color: "#7c3aed",
    border: "none",
    borderRadius: "10px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};