import Image from "next/image";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Image
              src="/inderini.svg?height=40&width=120"
              alt="Inderini"
              width={120}
              height={40}
              className="h-10 w-auto mb-4 filter brightness-0 invert"
            />
            <p className="text-gray-400 text-sm">
              Serving Nepal Coffee Since 1999
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Locations
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Franchise
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Products</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="#" className="hover:text-white">
                  Coffee Beans
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Equipment
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Training
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white">
                  Express
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-gray-400">
              <li>Loyalty App</li>
              <li>Career Opportunities</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Inderini Coffee. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
