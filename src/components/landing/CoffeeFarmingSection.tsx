import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CoffeeFarmingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="h-88 w-full relative">
            <Image
              src="/The Journey from Crop to Cup.jpg"
              alt="Coffee cherries on plant"
              fill
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div>
            <p className="text-gray-500 text-sm font-medium mb-4 tracking-wider">
              COFFEE FARMING
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              The Journey from Crop to Cup
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Grown in the ideal Himalayan air, our coffee beans are roasted to
              perfection and sent off to all our outlets to deliver the best
              coffee experience.
            </p>
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CoffeeFarmingSection;
