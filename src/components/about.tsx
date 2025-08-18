import React from 'react';
import Image from 'next/image';

interface AboutProps {
  className?: string;
}

const About: React.FC<AboutProps> = ({ className = '' }) => {
  return (
    <section className={`py-16 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6 ">
            <Image
              src="/images/about.svg"
              alt="Logo"
                width={240} 
                height={240}
            />
          </div>
        </div>

        {/* Main Content */}
        <div className=" p-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Bappa Ka Prasad</h2>
              <p className="text-lg text-gray-700 mb-6">
            Bappa Ka Prasad is a heartfelt initiative to share the blessings and joy of Ganesh Chaturthi. We deliver prasad from Ganpati pandals directly to your doorstep, ensuring everyone can partake in the festivities, no matter where they are.
              </p>
              <ul className="list-disc list-inside text-gray-700 mb-6">
            <li>Freshly prepared prasad from trusted pandals</li>
            <li>Safe and hygienic packaging</li>
            <li>Home delivery across select locations</li>
              </ul>
              <p className="text-md text-gray-600">
            Join us in celebrating Ganpati Bappa blessings and spread happiness with every prasad delivered!
              </p>
            </div>

            {/* Ganesh Illustration */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-400 to-red-500 rounded-3xl blur-2xl opacity-20 transform rotate-6"></div>
            <Image
              src="/images/bappa.png"
              alt="Ganesh Illustration"
              width={320}
              height={320}
            />
              </div>
            </div>
          </div>
        </div>
      {/* Closing tag for max-w-7xl mx-auto */}
      </div>
    </section>
  );
};

export default About;