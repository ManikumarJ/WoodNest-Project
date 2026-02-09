import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0F2A1D] text-white py-12">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-8">

        <div className="flex-1">
          <h2 className="text-2xl font-bold mb-4">WoodNest</h2>
          <p className="text-gray-300">
            Luxury furniture crafted for your home. Combining style and comfort
            to create the perfect living space.
          </p>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-300">
            <li><a href="/" className="hover:text-[#9AE6B4] transition">Home</a></li>
            <li><a href="/products" className="hover:text-[#9AE6B4] transition">Products</a></li>
            <li><a href="/about" className="hover:text-[#9AE6B4] transition">About</a></li>
            <li><a href="/contact" className="hover:text-[#9AE6B4] transition">Contact</a></li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex gap-4 text-gray-300">
            <a href="#" className="hover:text-[#9AE6B4] transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-[#9AE6B4] transition"><FaTwitter /></a>
            <a href="#" className="hover:text-[#9AE6B4] transition"><FaInstagram /></a>
            <a href="#" className="hover:text-[#9AE6B4] transition"><FaLinkedinIn /></a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-gray-400 text-sm">
         WoodNest. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
