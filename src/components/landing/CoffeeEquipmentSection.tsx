import React from "react";
import Image from "next/image";

const CoffeeEquipmentSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <Image
              src="/Coffee Equipment.jpg"
              alt="Professional coffee equipment"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-4 tracking-wider">
              BECAUSE WE LOVE COFFEE
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Coffee Equipment
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Your all-in-one coffee equipment destination.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeEquipmentSection;
