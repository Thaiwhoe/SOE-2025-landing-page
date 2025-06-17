import React from 'react';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-[#01562c] text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">EnterpriseNGR</h3>
            <p className="text-sm">
              A professional policy and advocacy group for Nigeria's Financial
              and Professional Services sector.
            </p>
          </div>
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  Reports
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Reports</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  SOE 2025 Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  SOE 2024 Report
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#01b71c] transition-colors">
                  SOE 2023 Report
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#01b71c] transition-colors">
                <FacebookIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#01b71c] transition-colors">
                <TwitterIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#01b71c] transition-colors">
                <LinkedinIcon size={20} />
              </a>
              <a href="#" className="hover:text-[#01b71c] transition-colors">
                <InstagramIcon size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} EnterpriseNGR. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>;
};
export default Footer;