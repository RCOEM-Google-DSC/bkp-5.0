import React from "react";
import {
  Code,
  Heart,
  MapPin,
  Users,
  Sparkles,
  ArrowRight,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`font-sans py-12 px-2 sm:py-20 sm:px-4 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Mission Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#ea3014] via-[#ec4e12] to-[#e6842f] shadow-2xl">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg
              className="w-full h-full"
              viewBox="0 0 400 400"
              fill="none"
            >
              <defs>
                <pattern
                  id="grid"
                  width="40"
                  height="40"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M 40 0 L 0 0 0 40"
                    fill="none"
                    stroke="white"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect
                width="100%"
                height="100%"
                fill="url(#grid)"
              />
            </svg>
          </div>

          {/* Floating Decorative Elements */}
          {/* <div className="absolute top-6 left-6 w-14 h-14 sm:w-20 sm:h-20 bg-white bg-opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-6 right-10 w-20 h-20 sm:w-32 sm:h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-6 w-10 h-10 sm:w-16 sm:h-16 bg-pink-300 bg-opacity-30 rounded-full blur-lg"></div> */}

          <div className="relative px-4 py-8 sm:px-8 sm:py-16 md:px-16 md:py-20">
            {/* Main Text */}
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-base sm:text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                <span className="font-semibold">CodeChef</span> is the Indian
                Competitive Programming platform,
                <br className="hidden md:block" />
                and a{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold">
                    key part of our coding journey
                  </span>
                </span>
                .
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
              {/* BKP Card */}
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-yellow-400 bg-opacity-30 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 group-hover:bg-opacity-40 transition-all duration-300">
                    <Sparkles className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-200" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
                    BKP
                  </h3>
                </div>
                <p className="text-yellow-600 text-opacity-90 text-base sm:text-lg leading-relaxed">
                  Our flagship competitive programming initiative driving
                  innovation and excellence
                </p>
              </div>

              {/* Central India Card */}
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-4 sm:p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="bg-pink-400 bg-opacity-30 rounded-xl p-2 sm:p-3 mr-3 sm:mr-4 group-hover:bg-opacity-40 transition-all duration-300">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-pink-200" />
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold text-pink-200 group-hover:text-pink-100 transition-colors duration-300">
                    Central India
                  </h3>
                </div>
                <p className="text-pink-600 text-opacity-90 text-base sm:text-lg leading-relaxed">
                  Boosting CodeChef&apos;s presence and inspiring the next
                  generation of programmers
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="hidden sm:block text-center">
              <div className="inline-flex flex-wrap items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-4 py-2 sm:px-8 sm:py-4 border border-white border-opacity-30">
                <Target className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-300 mr-2 sm:mr-3" />
                <span className="text-yellow-600 font-medium text-base sm:text-lg">
                  Inspiring more students to join the CP community
                </span>
                <Heart className="w-4 h-4 sm:w-5 sm:h-5 text-pink-300 ml-2 sm:ml-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-10 sm:mt-16 text-center">
          <div className="inline-block w-full sm:w-auto">
            <div className="relative group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110"></div>

              {/* Button */}
              <Link
                href="https://unstop.com/hackathons/bappa-ka-prashad-50-google-developer-groupsgdg-shri-ramdeoababa-university-1544907?lb=2hDu92ja&utm_medium=Share&utm_source=csea1bar94977&utm_campaign=Online_coding_challenge"
                target="_blank"
                rel="noopener noreferrer"
                className="relative w-full sm:w-auto bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-3 sm:px-12 sm:py-5 rounded-full text-base sm:text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl group-hover:shadow-orange-500/25 border-2 border-white border-opacity-20 flex items-center justify-center"
              >
                Join BKP 5.0
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 ml-2 sm:ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </Link>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="mt-6 sm:mt-10 text-gray-600 text-base sm:text-lg max-w-xl sm:max-w-2xl mx-auto font-light">
            Be part of India&apos;s largest competitive programming movement and
            shape the future of coding in Central India
          </p>

          {/* Stats Preview */}
          <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 max-w-xl sm:max-w-4xl mx-auto px-4 sm:px-0">
            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 mb-4 sm:mb-0">
              <Code className="w-6 h-6 sm:w-8 sm:h-8 text-orange-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                7600+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Submissions in 2023
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100 mb-4 sm:mb-0">
              <MapPin className="w-6 h-6 sm:w-8 sm:h-8 text-red-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                7+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Countries Reached
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <Users className="w-6 h-6 sm:w-8 sm:h-8 text-pink-600 mx-auto mb-2 sm:mb-3" />
              <div className="text-2xl sm:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                30+
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                Institutions
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
