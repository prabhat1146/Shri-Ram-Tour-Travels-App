import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';
import { companyAddress1, companyAddress2, companyAddress3, companyEmail1, companyName, companyPhone1, companyPhone2 } from '../utils/NameString';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-yellow-100 text-yellow-900 py-10 ">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold mb-2">{companyName}</h2>
          <p className="text-sm">
            Providing comfortable, affordable, and spiritual travel experiences across India.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2">Contact Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <Phone size={16} /> {companyPhone1}
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> {companyPhone2}
            </li>
            <li className="flex items-center gap-2">
              <Mail size={16} /> {companyEmail1}
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> {companyAddress1} <br /> {companyAddress2} <br /> {companyAddress3}
            </li>
          </ul>
        </div>

        <div>

           <h3 className="text-lg font-semibold mb-2">Legal</h3>
          <ul>

          <li><Link to={'/pages/legal/privacy-and-policy'}>Privacy & Policy</Link></li>
          <li><Link to={'/pages/legal/terms-and-conditions'}>Terms & Conditions</Link></li>
          <li><Link to={'/pages/legal/disclaimer'}>Disclaimer</Link></li>
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
        © {new Date().getFullYear()} {companyName}. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
