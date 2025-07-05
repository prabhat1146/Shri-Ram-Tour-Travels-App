import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-900 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">Shri Ram Tour & Travels</h2>
          <p className="text-sm">
            Providing comfortable, affordable, and spiritual travel experiences across India.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91 9876543210
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> contact@shriramtravels.com
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Ayodhya, Uttar Pradesh, India
            </li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Follow Us</h3>
          <div className="flex gap-4 text-yellow-800">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-yellow-700 mt-8">
        © {new Date().getFullYear()} Shri Ram Tour & Travels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
