import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ hc, ac, pc, cc }) {
  return (
    <header className="sticky top-0 z-50 bg-[rgba(6,6,8,0.56)] backdrop-blur-sm border-b border-white/6 text-white shadow-lg transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4">
        <nav className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-extrabold tracking-wide brand-text">Phat</div>
            <div className="hidden md:flex items-center gap-6 ml-6 text-sm opacity-95">
              <Link style={hc} to="/" className="nav-link">Home</Link>
              <Link style={ac} to="/about" className="nav-link">About</Link>
              <Link style={pc} to="/portfolio" className="nav-link">Portfolio</Link>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="nav-cta hidden sm:inline-block">Let's Talk</Link>
            <button aria-label="Open menu" className="menu-btn md:hidden p-2 rounded-md">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-white">
                <path d="M4 7H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 12H20" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 17H14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}
