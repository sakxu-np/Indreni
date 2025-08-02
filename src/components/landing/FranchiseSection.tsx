import React from "react";
import Image from "next/image";

const FranchiseSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div>
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Become a Franchise Partner</h2>
          <p className="text-gray-700 text-lg mb-6">
            Join the Indreni Java family and bring premium Nepali coffee culture to your community! As a franchise partner, you’ll receive full support, training, and access to our renowned brand, products, and systems.
          </p>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Comprehensive Franchise Training</li>
            <li>Brand Recognition & Marketing Support</li>
            <li>Quality Products & Supply Chain</li>
            <li>Ongoing Operational Guidance</li>
            <li>Exclusive Territory Rights</li>
          </ul>
          <a
            href="mailto:franchise@indrenijava.com"
            className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
          >
            Apply for Franchise
          </a>
        </div>
        <div className="flex justify-center">
          <Image
            src="/everest-roast.jpg"
            alt="Indreni Java Franchise"
            width={600}
            height={800}
            className="rounded-lg shadow-lg object-cover w-full h-auto max-h-[800px]"
            priority
            quality={100}
          />
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;
