import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ShoppingBag } from "lucide-react";

const BuyOnlineSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Buy Online
            </h2>
            <p className="text-gray-600 text-lg mb-2 font-medium">
              CURATED SELECTION OF COFFEE,
            </p>
            <p className="text-gray-600 text-lg mb-8 font-medium">
              DELIVERED TO YOUR DOORSTEP
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              After we harvest coffee from our farm, our experts process them
              with the greatest care; subsequently, they are immediately
              packaged, preserving freshness, and sent off to all our outlets.
            </p>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
              <ShoppingBag className="mr-2 h-5 w-5" />
              Buy Online
            </Button>
          </div>

          <div className="lg:col-span-1 flex justify-center">
            <div className="relative">
              <Image
                src="/product-jaba.jpg"
                alt="Coffee bag with decorative elements"
                width={1200}
                height={1200}
                className="relative z-10 w-full h-full"
              />
              {/* Decorative elements would go here */}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Why Java Coffee?
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <p className="text-gray-600">
                    Inderini offers its customers the best-tasting coffee
                    beverages in the country.
                  </p>
                </div>
                <div className="flex items-start">
                  <div className="w-6 h-6 bg-orange-500 rounded-full flex-shrink-0 mt-1 mr-4"></div>
                  <p className="text-gray-600">
                    We have achieved this by using high-quality ingredients.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuyOnlineSection;
