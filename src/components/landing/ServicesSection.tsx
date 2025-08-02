
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


const ServicesSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Image
            src="/Coffee Equipment.jpg"
            alt="Coffee Equipment"
            width={120}
            height={120}
            className="mx-auto mb-6 rounded-full shadow"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Services</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We offer a range of services to coffee lovers, entrepreneurs, and businesses. From barista training and equipment supply to franchise opportunities and consulting, our team is dedicated to supporting your coffee journey.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-50 rounded-lg p-8 shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Barista Training</h3>
            <p className="text-gray-600 mb-4">Professional training programs for aspiring and experienced baristas.</p>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Franchise Opportunities</h3>
            <p className="text-gray-600 mb-4">Join our growing network and bring specialty coffee to your community.</p>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div className="bg-gray-50 rounded-lg p-8 shadow">
            <h3 className="text-2xl font-bold mb-4 text-gray-900">Equipment Supply</h3>
            <p className="text-gray-600 mb-4">Supplying top-quality coffee equipment for cafes and businesses.</p>
            <Button variant="outline" className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
