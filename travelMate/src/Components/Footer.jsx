import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-4 mt-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-wrap justify-between items-center">
        {/* Column 1 */}
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-lg font-semibold">TravelX</h2>
          <p className="text-gray-400 text-sm mt-1">
            Explore the world with the best travel guides and offers.
          </p>
        </div>

        {/* Column 2 */}
        <div className="flex-1 min-w-[200px]">
          <h3 className="text-lg font-semibold">Quick Links</h3>
          <ul className="mt-1 text-gray-400 text-sm space-x-4 flex">
            <li><a href="#" className="hover:text-white">Home</a></li>
            <li><a href="#" className="hover:text-white">Destinations</a></li>
            <li><a href="#" className="hover:text-white">Tours</a></li>
            <li><a href="#" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Column 3 */}
        <div className="flex-1 min-w-[200px] text-right">
          <h3 className="text-lg font-semibold">Follow Us</h3>
          <div className="mt-1 flex gap-4 justify-end">
            <a href="#" className="text-gray-400 hover:text-white">Facebook</a>
            <a href="#" className="text-gray-400 hover:text-white">Instagram</a>
            <a href="#" className="text-gray-400 hover:text-white">Twitter</a>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-gray-500 text-sm mt-4 border-t border-gray-700 pt-2">
        © {new Date().getFullYear()} TravelX. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
