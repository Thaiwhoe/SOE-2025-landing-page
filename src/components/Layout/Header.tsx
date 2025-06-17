import React, { useState } from 'react';
import { MenuIcon, XIcon } from 'lucide-react';
import logo from './asset/logo.png'

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex items-center">
          {/* Logo placeholder */}
          <div className="h-12.5 w-40 text-white font-bold flex items-center justify-center">
            <img src={logo} alt="EnterpriseNGR logo" className="h-30 object-contain" />
          </div>
        </div>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <a href="#" className="text-[#01562c] hover:text-[#01b71c] transition-colors">
            Home
          </a>
          <a href="#" className="text-[#01562c] hover:text-[#01b71c] transition-colors">
            About
          </a>
          <a href="#" className="text-[#01562c] hover:text-[#01b71c] transition-colors">
            Reports
          </a>
          <a href="#" className="text-[#01562c] hover:text-[#01b71c] transition-colors">
            Contact
          </a>
        </nav>
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-[#01562c] p-2" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}>
            {mobileMenuOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Navigation */}
      {mobileMenuOpen && <div className="md:hidden bg-white border-t border-gray-200">
          <nav className="flex flex-col">
            <a href="#" className="px-4 py-3 text-[#01562c] hover:text-[#01b71c] hover:bg-gray-50 transition-colors">
              Home
            </a>
            <a href="#" className="px-4 py-3 text-[#01562c] hover:text-[#01b71c] hover:bg-gray-50 transition-colors">
              About
            </a>
            <a href="#" className="px-4 py-3 text-[#01562c] hover:text-[#01b71c] hover:bg-gray-50 transition-colors">
              Reports
            </a>
            <a href="#" className="px-4 py-3 text-[#01562c] hover:text-[#01b71c] hover:bg-gray-50 transition-colors">
              Contact
            </a>
          </nav>
        </div>}
    </header>;
};
export default Header;