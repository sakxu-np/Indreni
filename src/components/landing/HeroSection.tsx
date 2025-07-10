import Image from "next/image";
import React from "react";

const HeroSection = () => {
  return (
    <section className="relative h-screen bg-gradient-to-r from-orange-100 to-blue-100 overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Coffee lifestyle"
          fill
          className="object-cover"
          priority
        />
       
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
        <div className="max-w-2xl">
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 leading-tight">
            Coffee.
            <br />
            People.
            <br />
            Lifestyle.
          </h1>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
