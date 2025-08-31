import React from "react";
import Image from "next/image";

const BannerSection: React.FC = () => {
  return (
    <section className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-br from-orange-50 to-pink-50">
      <a
        href="https://www.codechef.com/GDGRBUFL"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-orange-500 hover:bg-orange-600 text-white py-3 font-semibold rounded-b-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-0.5"
      >
        <span className="underline decoration-2 underline-offset-2">
          🔗 Click here for the contest - It's live!
        </span>
      </a>
    </section>
  );
};

export default BannerSection;
