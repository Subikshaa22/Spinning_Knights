import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-inner">

        {/* LOGO */}
        <Link to="/" className="logo">
          <span className="logo-icon">♞</span>
          <span className="logo-text">Spinning Knights</span>
        </Link>

        {/* LINKS */}
        <div className="nav-links">
          <Link
            to="/"
            className={location.pathname === "/" ? "active" : ""}
          >
            Home
          </Link>

          <Link
            to="/register"
            className={`cta-nav ${
              location.pathname === "/register" ? "active" : ""
            }`}
          >
            Register
          </Link>
        </div>

      </div>
    </nav>
  );
}
