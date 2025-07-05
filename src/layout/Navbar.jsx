import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Packages", to: "/pages/explore-packages" },
    { name: "Destinations", to: "/pages/destinations" },
    { name: "About Us", to: "/pages/about-us" },
  ];

  return (
    <nav className="bg-yellow-100 shadow-md fixed top-0 left-0 right-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-yellow-800">
          Shri Ram Tour & Travels
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6 text-yellow-900">
          {navLinks.map(link => (
            <Link key={link.to} to={link.to} className="hover:text-yellow-700 font-medium">
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-yellow-800">
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-yellow-50 px-6 pb-4">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className="block py-2 text-yellow-800 font-medium border-b"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
