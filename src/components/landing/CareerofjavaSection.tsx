import React from "react";

const CareerofjavaSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-6">Careers at Indreni Java</h2>
        <p className="text-gray-700 text-lg mb-8">
          Want to work with us? We’re always looking for people who are friendly and want to learn new things. If you like coffee and want to be part of a fun team, send us a message!
        </p>
        <p className="text-gray-700 text-base mb-8">
          It doesn’t matter if you have experience or not. If you’re interested, just reach out. We’ll help you get started and teach you what you need to know.
        </p>
        <a
          href="mailto:careers@indrenijava.com"
          className="inline-block bg-yellow-500 text-white px-8 py-3 rounded-lg font-bold hover:bg-yellow-600 transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
};

export default CareerofjavaSection;
