import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

const CompanyStorySection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          In 1999, we started off as the first specialty coffee shop in Nepal.
          Over the years, we have diversified from a small coffee shop to an
          enterprise franchising the Nepali Coffee brand, nationally and
          internationally.
        </p>
        <Button
          variant="outline"
          className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
        >
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
};

export default CompanyStorySection;
