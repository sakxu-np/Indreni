
import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";


const AboutUsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex flex-col items-center">
          <Image
            src="/The Journey from Crop to Cup.jpg"
            alt="About Inderini Coffee"
            width={400}
            height={250}
            className="rounded-lg shadow-lg mb-8"
          />
          <h2 className="text-4xl font-bold text-gray-900 mb-6">About Us</h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            Founded in 1999, Inderini Coffee began as Nepal's first specialty coffee shop. Over the years, we've grown from a humble café into a pioneering enterprise, championing Nepali coffee both nationally and internationally. Our mission is to deliver the finest coffee experience, foster community, and empower local farmers through sustainable practices.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed mb-8">
            We believe in quality, hospitality, and innovation. Every cup we serve is a testament to our commitment to excellence and our love for coffee culture.
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
    </section>
  );
};

export default AboutUsSection;
