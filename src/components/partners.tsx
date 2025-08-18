import React from 'react';
import Image from 'next/image';

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
  size: 'small' | 'medium' | 'large';
}

const Partners: React.FC = () => {
  const partnerLogos: PartnerLogo[] = [
    {
      id: 1,
      name: 'Partner 1',
      logo: '/images/partner1.svg',
      size: 'large'
    },
    {
      id: 2,
      name: 'Partner 2',
      logo: '/images/partner2.svg',
      size: 'large'
    },
    {
      id: 3,
      name: 'Partner 3',
      logo: '/assets/partners/partner-3-logo.png',
      size: 'medium'
    }
  ];

  const getLogoSize = (size: string) => {
    switch (size) {
      case 'small':
        return 'w-24 h-24';
      case 'medium':
        return 'w-32 h-32';
      case 'large':
        return 'w-40 h-40';
      default:
        return 'w-32 h-32';
    }
  };

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 2px,
            rgba(255,255,255,0.1) 2px,
            rgba(255,255,255,0.1) 4px
          )`
        }}
      />
      
      {/* Decorative Leaves */}
      <div className="absolute top-25 left-80">
        <Image
          src="/images/petals.svg"
          alt="Decorative Leaf"
          width={150}
          height={150}
        />
      </div>

      <div className="absolute top-25 right-80">
        <Image
          src="/images/petals.svg"
          alt="Decorative Leaf"
          width={150}
          height={150}
   
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Top Red Line */}
       

        {/* Title */}
        <h2 className="text-6xl md:text-7xl font-light text-black  text-center tracking-wide mb-14">
          Partners
        </h2>

        {/* Description */}
        <p className="text-black text-center max-w-2xl mb-20 leading-relaxed text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
        </p>

        {/* Partner Logos */}
        <Image
          src="/images/partner1.svg"
          alt="Partner Logos"
          width={400}
          height={400}
          className="mx-auto"
        />

        {/* Bottom Red Line */}
        <div className="w-96 h-1 bg-red-600"></div>
      </div>
    </section>
  );
};

export default Partners;