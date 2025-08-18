import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-gradient-to-br from-orange-50 to-pink-50 ">
      {/* Main Container */}
      
      <div >
        {/* Header Text */}
        <div className="flex justify-between items-start mb-12 px-50">
          <div className="flex-1">
            <Image
              src="/images/bkp5.svg"
              alt="Lord Ganesha"
              width={520}
              height={520}
              className="w-96 h-96 object-contain"
            />

            {/* Date and Time Info Box */}
            <div className='-mt-10'>
                <Image
                  src="/images/dates.svg"
                  alt="Date and Time Info"
                  width={400}
                  height={200}
                  className="w-96 h-auto object-contain"
                />
            </div>
          </div>
          
          {/* Ganesha Image */}
          <div className="flex-shrink-0 ml-8 mt-20 relative">
            {/* Background blur pink color */}
            <div className="absolute inset-0 rounded-full bg-pink-300 blur-2xl opacity-40 -z-10 w-full h-full" />
            <Image
              src="/images/finalbappa.svg"
              alt="Lord Ganesha"
              width={300}
              height={300}
              className="w-96 h-96 object-contain"
            />
          </div>
        </div>
        
        {/* Decorative Border */}
        
      </div>

      <div className='grid lg:grid-cols-2 '>
        <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/pattern.png"
              alt="Decorative Border"
              width={1600}
              height={400}
              
            />
          </div>
        </div>
         <div className="relative h-32 overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/pattern.png"
              alt="Decorative Border"
              width={1600}
              height={200}
            />
          </div>
        </div>
        
        
      </div>
       
    
    </section>
  );
};

export default HeroSection;