
import { FaInstagram, FaFacebookF, FaPinterestP } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 h-60 text-gray-400 py-8 ">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          {/* Logo and Tagline */}
          <div className="flex items-center space-x-2">
            <h1 className="text-white text-2xl font-bold">3legant</h1>
            <span className="text-gray-400">| Gift & Decoration Store</span>
          </div>

          {/* Navigation Links */}
          <nav className="space-x-6">
            <a href="#" className="hover:text-white">Home</a>
            <a href="#" className="hover:text-white">Shop</a>
            <a href="#" className="hover:text-white">Product</a>
            <a href="#" className="hover:text-white">Blog</a>
            <a href="#" className="hover:text-white">Contact Us</a>
          </nav>
        </div>

        {/* Divider */}
        <hr className="border-gray-700 mb-4" />

        {/* Copyright and Social Media */}
        <div className="flex justify-between items-center">
          <p className="text-sm">
            © 2023 3legant. All rights reserved <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">Privacy Policy</a> <span className="mx-2">|</span>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </p>

          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              <FaInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaFacebookF size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <FaPinterestP size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
