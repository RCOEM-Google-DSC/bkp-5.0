import Image from "next/image";

interface LeaderboardEntry {
  rank: number;
  name: string;
  country: string;
  flag: string;
  score: number;
  scoreColor: string;
}

export default function Leaderboard() {
  const leaderboardData: LeaderboardEntry[] = [
    {
      rank: 1,
      name: "Simran Wang",
      country: "China",
      flag: "/images/flags/china.png",
      score: 95,
      scoreColor: "bg-red-500",
    },
    {
      rank: 2,
      name: "R Chinmay",
      country: "India",
      flag: "/images/flags/india.png",
      score: 89,
      scoreColor: "bg-orange-500",
    },
    {
      rank: 3,
      name: "Guffrida",
      country: "Italy",
      flag: "/images/flags/italy.png",
      score: 84,
      scoreColor: "bg-yellow-500",
    },
    {
      rank: 4,
      name: "Kode",
      country: "Japan",
      flag: "/images/flags/japan.png",
      score: 79,
      scoreColor: "bg-red-500",
    },
    {
      rank: 5,
      name: "Ajay Singh Deora",
      country: "India",
      flag: "/images/flags/india.png",
      score: 75,
      scoreColor: "bg-orange-500",
    },
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50">
      <span className="flex justify-center mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-500 font-sans text-shadow text-center px-2">
        GLOBAL LEADERBOARD 2024
      </span>
      <div className="max-w-6xl mx-auto mt-10">
        <Image
          src="/Leaderboard.png"
          alt="Leaderboard Background"
          width={800}
          height={400}
          className="w-full h-auto"
        />
      </div>

      <div className="flex justify-center mt-6 sm:mt-8 px-4">
        <a
          href="https://unstop.com/o/kZSVs5q?lb=sDELTvhK&utm_medium=Share&utm_source=ashutpan9454&utm_campaign=Online_coding_challenge"
          target="_blank"
          rel="noopener noreferrer"
          className="px-6 py-4 sm:px-8 sm:py-6 lg:px-12 lg:py-8 bg-red-600 text-white rounded-full shadow-lg hover:bg-red-700 hover:shadow-xl transition-all duration-300 text-lg sm:text-xl lg:text-2xl font-bold transform hover:scale-105 active:scale-95"
        >
          <span className="flex items-center gap-2">
            Register Now
            {/* <span className="text-xl sm:text-2xl">→</span> */}
          </span>
        </a>
      </div>
    </section>
  );
}
