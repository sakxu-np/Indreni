import React from "react";
import Image from "next/image";

const ProductsSection = () => {
  return (
    <section className="bg-green-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="mb-6 h-80">
              <Image
                src="/everest-roast.jpg"
                alt="Everest Roast"
                width={200}
                height={300}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold">EVEREST ROAST</h3>
          </div>
          <div className="text-center">
            <div className="mb-6 h-80">
              <Image
                src="/thamel-roast.jpg"
                alt="Thamel Roast"
                width={200}
                height={300}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold">THAMEL ROAST</h3>
          </div>
          <div className="text-center">
            <div className="mb-6 h-80">
              <Image
                src="/espresso.jpg"
                alt="Espresso Roast"
                width={200}
                height={300}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold">ESPRESSO ROAST</h3>
          </div>
          <div className="text-center">
            <div className="mb-6 h-80">
              <Image
                src="/medium.jpg"
                alt="Medium Roast"
                width={200}
                height={300}
                className="mx-auto h-full w-full object-cover"
              />
            </div>
            <h3 className="text-white text-xl font-bold">MEDIUM ROAST</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
