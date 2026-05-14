import Image from "next/image";

const partners = [
  {
    src: "/clubs/GDG_NAGPUR_final.png",
    alt: "GDG NAGPUR",
    bgColor: "bg-transparent",
    size: "h-40 sm:h-48",
  },
  {
    src: "/clubs/GDG_NAGPUR_CLOUD_final.png",
    alt: "GDG CLOUD NAGPUR",
    bgColor: "bg-transparent",
    size: "h-40 sm:h-48",
  },
  {
    src: "/clubs/DOTSLASH.jpg",
    alt: "DOT SLASH",
    bgColor: "bg-black",
    size: "h-40 sm:h-48",
  },
  {
    src: "/clubs/NEXMEET.png",
    alt: "NEXMEET",
    bgColor: "bg-black",
    size: "h-40 sm:h-48",
  },
  {
    src: "/clubs/JD.png",
    alt: "GDG JD",
    bgColor: "bg-transparent",
    size: "h-56 sm:h-64",
  },
  {
    src: "/clubs/GDG_YCCE_final.png",
    alt: "GDG YCCE",
    bgColor: "bg-transparent",
    size: "h-56 sm:h-64",
  },
  {
    src: "/clubs/GDG_CCOEW_final.png",
    alt: "GDG CCOEW",
    bgColor: "bg-transparent",
    size: "h-40 sm:h-48",
  },
  {
    src: "/clubs/GDG_GCE_final.png",
    alt: "GDG GCE",
    bgColor: "bg-transparent",
    size: "h-40 sm:h-48",
  },
];

export default function CommunityPartners() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <span className="flex justify-center mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 font-sans text-shadow text-center px-2">
        Community Partners
      </span>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-8">
        {partners.map((partner, idx) => (
          <div
            key={idx}
            className={`flex items-center justify-center rounded-lg p-4 ${partner.bgColor}`}
          >
            <div className={`relative w-full ${partner.size}`}>
              <Image
                src={partner.src}
                alt={partner.alt}
                fill
                className={`object-contain ${partner.alt === "GDG JD" || partner.alt === "GDG YCCE"
                    ? "scale-150"
                    : "scale-100"
                  }`}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
