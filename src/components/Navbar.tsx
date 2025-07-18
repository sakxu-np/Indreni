"use client"
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronDown, Cross, Search } from "lucide-react";
import { LuMenu } from 'react-icons/lu';

const Navbar = () => {
  const [menu, setMenu] = useState(false);


  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Image
              src="/logo.png?height=60&width=120"
              alt="Inderini Coffee"
              width={120}
              height={40}
              className="h-10 w-auto"
            />
          </div>
          <div className="block md:hidden"> 
            <div onClick={ () => setMenu(!menu)}> {menu ? <Cross />: <LuMenu/> }</div></div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link
                href="#"
                className="text-gray-900 hover:text-gray-700 px-3 py-2 text-sm font-medium border-b-2 border-gray-900"
              >
                Home
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                About Us
              </Link>
              <div className="relative group">
                <button className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center">
                  Services
                  <ChevronDown className="ml-1 h-4 w-4" />
                </button>
              </div>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Locations
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Franchise
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Loyalty App
              </Link>
              <Link
                href="#"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Career at Java
              </Link>
              <Link
                href="/express"
                className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium"
              >
                Express
              </Link>
            </div>
          </div>

          <div className="flex items-center">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer" />
          </div>
        </div>
      </div>
      {menu && (
<div className="relative flex h-screen items-center justify-center z-50 transition-transform duration-600 ease-in-out">
        <div className="absolute inset-y-0 flex w-full  z-50 transition-transform duration-600 ease-in-out">
          <div className="ml-10 flex flex-col w-full items-center pt-16  text-center space-y-4 transition-transform duration-600 ease-in-out">
              <Link
              onClick={() => setMenu(false)}
                href="#"
                className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                Home
              </Link>
              <Link
              onClick={() => setMenu(false)}
                href="#"
                  className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                About Us
              </Link>
              <div className="relative group w-full">
                <button onClick={() => setMenu(false)}   className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold">
                  Services
                 
                </button>
              </div>
              <Link
              onClick={() => setMenu(false)}
                href="#"
                 className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                Locations
              </Link>
              <Link
              onClick={() => setMenu(false)}
                href="#"
                  className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                Franchise
              </Link>
              <Link
              onClick={() => setMenu(false)}
                href="#"
                  className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                Loyalty App
              </Link>
              <Link
              onClick={() => setMenu(false)}
                href="#"
                  className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold"
              >
                Career at Java
              </Link>
              <Link
              onClick={() => setMenu(false)}
                href="/express"
                 className="w-full text-gray-900 hover:text-gray-700 px-3 py-4 text-3xl font-semibold "
              >
                Express
              </Link>
            </div>
        </div>
      </div>
      )}
      
    </nav>
  );
};

export default Navbar;
