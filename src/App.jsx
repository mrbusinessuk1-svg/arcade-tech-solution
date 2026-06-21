import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Credits from "./pages/Credits";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Policies from "./pages/Policies";
import HowItWorks from "./pages/HowItWorks";

function App() {
  return (
    <BrowserRouter>

      {/* Navbar */}
      <Navbar />

      {/* Pages */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/credits" element={<Credits />} />
        <Route path="/how" element={<HowItWorks />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policies" element={<Policies />} />
      </Routes>

      {/* Footer */}
      <Footer />

    </BrowserRouter>
  );
}

export default App;