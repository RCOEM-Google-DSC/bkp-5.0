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

interface MissionSectionProps {
  className?: string;
}

const MissionSection: React.FC<MissionSectionProps> = ({ className = "" }) => {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 via-pink-50 to-red-50 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Main Mission Card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-orange-600 via-red-600 to-pink-600 shadow-2xl">
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
          <div className="absolute top-10 left-10 w-20 h-20 bg-white bg-opacity-20 rounded-full blur-xl"></div>
          <div className="absolute bottom-10 right-20 w-32 h-32 bg-yellow-400 bg-opacity-20 rounded-full blur-2xl"></div>
          <div className="absolute top-1/3 right-10 w-16 h-16 bg-pink-300 bg-opacity-30 rounded-full blur-lg"></div>

          <div className="relative px-8 py-16 md:px-16 md:py-20">
            {/* Icon Header */}
            <div className="flex justify-center mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-white bg-opacity-20 rounded-full blur-lg scale-110"></div>
                <div className="relative bg-white bg-opacity-20 backdrop-blur-sm rounded-full p-4 border border-white border-opacity-30">
                  <Users className="w-12 h-12 text-white" />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div className="text-center mb-12">
              <p className="text-xl md:text-2xl lg:text-3xl text-white leading-relaxed font-light">
                <span className="font-semibold">CodeChef</span> is the Indian
                Competitive Programming platform,
                <br className="hidden md:block" />
                and a{" "}
                <span className="relative">
                  <span className="relative z-10 font-semibold">
                    key part of our coding journey
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-2 bg-yellow-300 bg-opacity-50 rounded-full"></span>
                </span>
                .
              </p>
            </div>

            {/* Mission Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {/* BKP Card */}
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="bg-yellow-400 bg-opacity-30 rounded-xl p-3 mr-4 group-hover:bg-opacity-40 transition-all duration-300">
                    <Sparkles className="w-6 h-6 text-yellow-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-yellow-300 group-hover:text-yellow-200 transition-colors duration-300">
                    BKP
                  </h3>
                </div>
                <p className="text-white text-opacity-90 text-lg leading-relaxed">
                  Our flagship competitive programming initiative driving
                  innovation and excellence
                </p>
              </div>

              {/* Central India Card */}
              <div className="bg-white bg-opacity-15 backdrop-blur-sm rounded-2xl p-6 border border-white border-opacity-20 hover:bg-opacity-20 transition-all duration-300 group">
                <div className="flex items-center mb-4">
                  <div className="bg-pink-400 bg-opacity-30 rounded-xl p-3 mr-4 group-hover:bg-opacity-40 transition-all duration-300">
                    <MapPin className="w-6 h-6 text-pink-200" />
                  </div>
                  <h3 className="text-2xl font-bold text-pink-200 group-hover:text-pink-100 transition-colors duration-300">
                    Central India
                  </h3>
                </div>
                <p className="text-white text-opacity-90 text-lg leading-relaxed">
                  Boosting CodeChef&apos;s presence and inspiring the next
                  generation of programmers
                </p>
              </div>
            </div>

            {/* Vision Statement */}
            <div className="text-center">
              <div className="inline-flex items-center bg-white bg-opacity-20 backdrop-blur-sm rounded-full px-8 py-4 border border-white border-opacity-30">
                <Target className="w-5 h-5 text-yellow-300 mr-3" />
                <span className="text-white font-medium text-lg">
                  Inspiring more students to join the CP community
                </span>
                <Heart className="w-5 h-5 text-pink-300 ml-3" />
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-16 text-center">
          <div className="inline-block">
            <div className="relative group">
              {/* Animated Background */}
              <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-red-600 rounded-full blur-xl opacity-60 group-hover:opacity-80 transition-opacity duration-300 scale-110"></div>

              {/* Button */}
              <button className="relative bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-12 py-5 rounded-full text-xl font-bold transition-all duration-300 transform hover:scale-105 shadow-2xl group-hover:shadow-orange-500/25 border-2 border-white border-opacity-20">
                <span className="flex items-center">
                  Join BKP 2024
                  <ArrowRight className="w-6 h-6 ml-3 group-hover:translate-x-1 transition-transform duration-300" />
                </span>
              </button>
            </div>
          </div>

          {/* Supporting Text */}
          <p className="mt-6 text-gray-600 text-lg max-w-2xl mx-auto">
            Be part of India&apos;s largest competitive programming movement and
            shape the future of coding in Central India
          </p>

          {/* Stats Preview */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
              <Code className="w-8 h-8 text-orange-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">7600+</div>
              <div className="text-gray-600">Submissions in 2023</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-red-100">
              <MapPin className="w-8 h-8 text-red-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">7+</div>
              <div className="text-gray-600">Countries Reached</div>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-pink-100">
              <Users className="w-8 h-8 text-pink-600 mx-auto mb-3" />
              <div className="text-3xl font-bold text-gray-900 mb-2">30+</div>
              <div className="text-gray-600">Institutions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
