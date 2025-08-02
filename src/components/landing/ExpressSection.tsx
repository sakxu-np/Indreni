import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Button } from "../ui/button";

const ExpressSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-4 tracking-wider">
              NOW BREWING OPPORTUNITY
            </p>
            <h2 className="text-5xl font-bold text-gray-900 mb-2">
              Inderini JAVA
            </h2>
            <div className="flex items-center mb-8">
              <span className="text-5xl font-bold text-gray-900">E</span>
              <span className="text-5xl font-bold text-yellow-500">X</span>
              <span className="text-5xl font-bold text-gray-900">PRESS</span>
            </div>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We`re excited to introduce Express, a dynamic new brand under the
              Inderini family – designed for fast service and modern
              lifestyles. Built on an economical franchise model, it`s a perfect
              entry point for aspiring entrepreneurs ready to start their coffee
              journey with us.
            </p>
            <Button
              variant="outline"
              className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
            >
              Learn More
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          <div>
            <Image
              src="/HIMALAYAN JAVA E X PRESS.jpg"
              alt="Inderini Express store interior"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpressSection;
