import React from "react";

export default function Footer({ theme = "dark" }) {
  const isDark = theme === "dark";

  const bgColor = isDark ? "#000" : "#f9f9f9";
  const textColor = isDark ? "#fff" : "#333";
  const bottomBg = isDark ? "#111" : "#eaeaea";
  const bottomText = isDark ? "#ccc" : "#555";

  return (
    <footer>
      {/* Top Section */}
      <div
        style={{
          backgroundColor: bgColor,
          color: textColor,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          padding: "30px 40px",
        }}
      >
        {/* Links Column */}
        <div
          style={{
            display: "flex",
            flexDirection: "column", 
            gap: "12px",
          }}
        >
          <a href="/" style={linkStyle(textColor)}>
            Home
          </a>

          <a href="/credits" style={linkStyle(textColor)}>
            Arcade Tech Solution
          </a>

          <a href="/how-it-works" style={linkStyle(textColor)}>
            How It Works
          </a>

          <a href="/contact" style={linkStyle(textColor)}>
            Contact
          </a>

          <a href="/policies" style={linkStyle(textColor)}>
            Policies
          </a>
        </div>

        {/* PayPal Logo Right Side */}
        <div>
          <img
            src="https://tse4.mm.bing.net/th/id/OIP.xYUxQ7kkSlrTfQ6C5dLM1wAAAA?r=0&cb=thfvnextfalcon2&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Square"

            style={{ width: "45px" }}
          />
          
          <img
            src="https://www.paypalobjects.com/webstatic/icon/pp258.png"
            alt="PayPal"
            style={{ width: "55px" }}
          />

           <img
            src="https://logos-world.net/wp-content/uploads/2021/03/Stripe-Symbol-700x394.png"
            alt="Stripe"

            style={{ width: "70px" }}
          />


          
        </div>
        
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          backgroundColor: bottomBg,
          color: bottomText,
          textAlign: "center",
          padding: "12px",
          fontSize: "14px",
        }}
      >
        © 2026 Arcade tech Solution, Powered by Tech Solution |{" "}
        <a href="/terms" style={linkStyle(bottomText)}>
          Terms & Policies
        </a>
      </div>
    </footer>
  );
}

const linkStyle = (color) => ({
  color,
  textDecoration: "none",
  fontSize: "15px",
});
