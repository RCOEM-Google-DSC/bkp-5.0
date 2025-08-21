import React from "react";
import Image from "next/image";

interface PartnerLogo {
  id: number;
  name: string;
  logo: string;
  size: "small" | "medium" | "large";
}

const Partners: React.FC = () => {
  const partnerLogos: PartnerLogo[] = [
    {
      id: 1,
      name: "CodeChef",
      logo: "/images/partner1.svg",
      size: "large",
    },
    // {
    //   id: 2,
    //   name: "Partner 2",
    //   logo: "/images/partner2.svg",
    //   size: "large",
    // },
    // {
    //   id: 3,
    //   name: "Partner 3",
    //   logo: "/assets/partners/partner-3-logo.png",
    //   size: "medium",
    // },
  ];

  const getLogoSize = (size: string) => {
    switch (size) {
      case "small":
        return "w-16 h-16 md:w-24 md:h-24";
      case "medium":
        return "w-20 h-20 md:w-32 md:h-32";
      case "large":
        return "w-48 h-48 md:w-48 md:h-48";
      default:
        return "w-20 h-20 md:w-32 md:h-32";
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
          )`,
        }}
      />

      {/* Decorative Leaves */}
      <div className="absolute top-10 left-4 md:top-25 md:left-80">
        <Image
          src="/images/petals.svg"
          alt="Decorative Leaf"
          width={80}
          height={80}
          className="md:w-[150px] md:h-[150px]"
        />
      </div>

      <div className="absolute top-10 right-4 md:top-25 md:right-80">
        <Image
          src="/images/petals.svg"
          alt="Decorative Leaf"
          width={80}
          height={80}
          className="md:w-[150px] md:h-[150px]"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10 container mx-auto px-4 py-10 md:px-6 md:py-20 flex flex-col items-center justify-center min-h-screen">
        {/* Title */}
        <h2 className="text-4xl md:text-6xl font-light text-black text-center tracking-wide mb-8 md:mb-14">
          Partners
        </h2>

        {/* Description */}
        <p className="text-gray-700 text-center max-w-md md:max-w-2xl mb-10 md:mb-20 leading-relaxed text-base md:text-lg">
          We’re excited to announce that our upcoming event BKP 5.0 is happening
          in collaboration with CodeChef as our official partner!{" "}
        </p>

        {/* Partner Logos */}
        <div className="flex flex-wrap gap-6 justify-center items-center mb-10 w-full">
          {partnerLogos.map((partner) => (
            <div
              key={partner.id}
              className={`flex flex-col items-center ${getLogoSize(
                partner.size
              )}`}
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={180}
                height={180}
                className={`object-contain ${getLogoSize(partner.size)}`}
              />
              <span className="mt-2 text-sm md:text-base text-gray-600 text-center">
                {partner.name}
              </span>
            </div>
          ))}
        </div>

        {/* Bottom Red Line */}
        <div className="w-40 h-1 md:w-96 bg-red-600"></div>
      </div>
    </section>
  );
};

export default Partners;
