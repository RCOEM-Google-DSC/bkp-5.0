import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-pink-50">
      {/* Main Container */}
      <div>
        {/* Header Text */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-8 lg:mb-12 px-4 lg:px-12">
          <div className="flex-1 w-full lg:w-auto flex flex-col items-center lg:items-start">
            <Image
              src="/images/bkp5.svg"
              alt="Lord Ganesha"
              width={320}
              height={320}
              className="w-64 h-64 lg:w-96 lg:h-96 object-contain"
            />

            {/* Date and Time Info Box */}
            <div className="-mt-6 lg:-mt-10">
              <Image
                src="/images/dates.svg"
                alt="Date and Time Info"
                width={260}
                height={120}
                className="w-64 h-auto lg:w-96 object-contain"
              />
            </div>
          </div>

          {/* Ganesha Image */}
          <div className="flex-shrink-0 mt-8 lg:ml-8 lg:mt-20 relative flex justify-center lg:block w-full lg:w-auto">
            {/* Background blur pink color */}
            <div className="absolute inset-0 rounded-full bg-pink-300 blur-2xl opacity-40 -z-10 w-full h-full" />
            <Image
              src="/images/finalbappa.svg"
              alt="Lord Ganesha"
              width={220}
              height={220}
              className="w-56 h-56 lg:w-96 lg:h-96 object-contain"
            />
          </div>
        </div>
        {/* Decorative Border */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          <div className="relative h-16 lg:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/pattern.png"
                alt="Decorative Border"
                width={800}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
          {/* Show second border only on large screens */}
          <div className="hidden lg:block relative h-16 lg:h-32 overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src="/images/pattern.png"
                alt="Decorative Border"
                width={800}
                height={100}
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
