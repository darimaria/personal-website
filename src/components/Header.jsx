import React from "react";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import "../styles/Header.css";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navLinks = ["Home", "About", "Experience", "More", "Contact"];
  return (
    <header className="header">
      <div className="header-container" id="home">
        {/* Logo */}
        <div className="logo"> Dari Dennis </div>
        {/* Desktop Navigation */}
        <nav className="nav-desktop">
          {navLinks.map((link) => (
            <a key={link} href={`#${link.toLowerCase()}`} className="nav-link" onClick={(e)=>{if (link == "Home") {
              e.preventDefault()
              window.scrollTo({top: 0 , behavior: "smooth"});
            }}}>
              {link}
            </a>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div
          className="menu-button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile navigation */}
      {mobileMenuOpen && (
        <nav className="nav-mobile">
          {navLinks.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="nav-link-mobile"
            >
              {link}
            </a>
          ))}
        </nav>
      )}
    </header>
  );
};

export default Header;
