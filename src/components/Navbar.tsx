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
          <div className="flex items-center group cursor-pointer transition-transform duration-200 hover:scale-105">
            <div className="rounded-full border-4 border-yellow-400 shadow-lg p-1 bg-white transition-shadow duration-200 group-hover:shadow-yellow-200">
              <Image
                src="/logo.png"
                alt="Inderini Coffee"
                width={120}
                height={60}
                className="h-[60px] w-auto drop-shadow-md rounded-full"
                priority
              />
            </div>
          </div>
          <div className="block md:hidden"> 
            <div onClick={ () => setMenu(!menu)}> {menu ? <Cross />: <LuMenu/> }</div></div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <Link href="/">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Home</button>
              </Link>
              <Link href="/aboutus">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">About Us</button>
              </Link>
              <Link href="/services">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition flex items-center">Services <ChevronDown className="ml-1 h-4 w-4" /></button>
              </Link>
              <Link href="/location">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Locations</button>
              </Link>
              <Link href="/franchise">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Franchise</button>
              </Link>
              <Link href="/loyaltyapp">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Loyalty App</button>
              </Link>
              <Link href="/careerofjava">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Career at Java</button>
              </Link>
              <Link href="/express">
                <button className="px-4 py-2 rounded bg-gray-100 text-gray-900 font-medium hover:bg-yellow-200 transition">Express</button>
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
              <Link href="/">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Home</button>
              </Link>
              <Link href="/aboutus">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">About Us</button>
              </Link>
              <Link href="/services">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Services</button>
              </Link>
              <Link href="/location">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Locations</button>
              </Link>
              <Link href="/franchise">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Franchise</button>
              </Link>
              <Link href="/loyaltyapp">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Loyalty App</button>
              </Link>
              <Link href="/careerofjava">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Career at Java</button>
              </Link>
              <Link href="/express">
                <button onClick={() => setMenu(false)} className="w-full text-gray-900 bg-gray-100 hover:bg-yellow-200 rounded px-3 py-4 text-2xl font-semibold mb-2 transition">Express</button>
              </Link>
            </div>
        </div>
      </div>
      )}
      
    </nav>
  );
};

export default Navbar;
