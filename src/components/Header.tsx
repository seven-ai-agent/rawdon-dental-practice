"use client";

import { useState, useEffect } from "react";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Treatments" },
  { href: "#team", label: "Our Team" },
  { href: "#care-plans", label: "Care Plans" },
  { href: "#hours", label: "Opening Hours" },
  { href: "#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div
              className={`w-10 h-10 rounded-xl flex items-center justify-center font-serif font-bold text-lg transition-colors ${
                isScrolled
                  ? "bg-primary text-white"
                  : "bg-white/20 text-white backdrop-blur-sm"
              }`}
            >
              R
            </div>
            <div>
              <span
                className={`font-serif text-xl font-semibold transition-colors ${
                  isScrolled ? "text-primary-dark" : "text-white"
                }`}
              >
                Rawdon Dental
              </span>
              <span
                className={`block text-xs tracking-wider uppercase transition-colors ${
                  isScrolled ? "text-text-light" : "text-white/70"
                }`}
              >
                Practice
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`text-sm font-medium animated-underline transition-colors ${
                  isScrolled
                    ? "text-text hover:text-primary"
                    : "text-white/90 hover:text-white"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:01132502844"
              className={`flex items-center gap-2 text-sm font-medium transition-colors ${
                isScrolled ? "text-primary" : "text-white"
              }`}
            >
              <Phone className="w-4 h-4" />
              0113 250 2844
            </a>
            <a
              href="#contact"
              className="bg-accent hover:bg-accent/90 text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all hover:shadow-lg"
            >
              Book Appointment
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              isScrolled
                ? "text-primary-dark hover:bg-primary-light"
                : "text-white hover:bg-white/10"
            }`}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t shadow-xl">
          <nav className="max-w-7xl mx-auto px-4 py-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 text-text hover:text-primary hover:bg-primary-light rounded-lg transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 border-t mt-4 space-y-3">
              <a
                href="tel:01132502844"
                className="flex items-center gap-2 px-4 py-3 text-primary font-medium"
              >
                <Phone className="w-4 h-4" />
                0113 250 2844
              </a>
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-accent text-white px-5 py-3 rounded-full font-semibold"
              >
                Book Appointment
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
