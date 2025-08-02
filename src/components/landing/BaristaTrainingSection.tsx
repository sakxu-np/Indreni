import React from "react";
import { Button } from "../ui/button";
import { ArrowRight, FileText } from "lucide-react";
import Image from "next/image";

const BaristaTrainingSection = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-gray-500 text-sm font-medium mb-4 tracking-wider">
              TRAINING & WORKSHOP
            </p>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Barista Training
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Vocational training equips individuals with practical skills to
              empower themselves and contribute to their personal and
              professional advancement.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                variant="outline"
                className="border-gray-900 text-gray-900 hover:bg-gray-900 hover:text-white bg-transparent"
              >
                <FileText className="mr-2 h-4 w-4" />
                Barista School Brochure
              </Button>
            </div>
          </div>
          <div>
            <Image
              src="/Barista Training.jpg"
              alt="Barista training session"
              width={600}
              height={400}
              className="rounded-lg shadow-lg"
            />
            <div></div>
          </div>
        </div>
      </div>
      <div className="py-6">
        {
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d5553.188177560406!2d85.32166649126998!3d27.693915070525588!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2snp!4v1752565506546!5m2!1sen!2snp"
            width="100%"
            height="450"
            loading="lazy"
          />
        }
      </div>
    </section>
  );
};

export default BaristaTrainingSection;
