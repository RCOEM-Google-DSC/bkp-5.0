import React from "react";
import {
  ExternalLink,
  Code,
  Users,
  Globe,
  Building,
  TrendingUp,
  Calendar,
} from "lucide-react";

interface HistoryData {
  year: number;
  link: string;
  submissions: string;
  countries: string;
  institutions: string;
}

interface CodeChefHistoryProps {
  className?: string;
}

const CodeChefHistory: React.FC<CodeChefHistoryProps> = ({
  className = "",
}) => {
  const historyData: HistoryData[] = [
    {
      year: 2021,
      link: "BKP2021",
      submissions: "4000+",
      countries: "4+",
      institutions: "20+",
    },
    {
      year: 2022,
      link: "BKP2022",
      submissions: "6000+",
      countries: "7+",
      institutions: "30+",
    },
    {
      year: 2023,
      link: "BKP2023",
      submissions: "7600+",
      countries: "4+",
      institutions: "25",
    },
  ];

  const getGrowthPercentage = (current: string, previous: string) => {
    const currentNum = parseInt(current.replace(/[^\d]/g, ""));
    const previousNum = parseInt(previous.replace(/[^\d]/g, ""));
    const growth = (((currentNum - previousNum) / previousNum) * 100).toFixed(
      0
    );
    return growth;
  };

  const StatCard = ({
    icon: Icon,
    label,
    value,
    growth,
  }: {
    icon: React.ElementType;
    label: string;
    value: string;
    growth?: string;
  }) => (
    <div className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100">
      <div className="flex items-center justify-between mb-2">
        <Icon className="w-6 h-6 text-orange-600" />
        {growth && (
          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full font-semibold">
            +{growth}%
          </span>
        )}
      </div>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      <div className="text-sm text-gray-600">{label}</div>
    </div>
  );

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50 ${className}`}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <Code className="w-12 h-12 text-orange-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Our History with CodeChef
            </h1>
            <Code className="w-12 h-12 text-orange-600 ml-4" />
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-red-500 mx-auto mb-8"></div>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-400 via-red-400 to-pink-400 rounded-full"></div>

          {historyData.map((data, index) => (
            <div
              key={data.year}
              className="relative mb-16"
            >
              {/* Timeline Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-full border-4 border-white shadow-lg z-10"></div>

              {/* Content Card */}
              <div
                className={`flex items-center ${
                  index % 2 === 0 ? "flex-row" : "flex-row-reverse"
                }`}
              >
                <div
                  className={`w-full ${
                    index % 2 === 0 ? "pr-8 md:pr-16" : "pl-8 md:pl-16"
                  }`}
                >
                  <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                    {/* Year Header */}
                    <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <Calendar className="w-6 h-6 text-white mr-3" />
                          <h3 className="text-2xl font-bold text-white">
                            {data.year}
                          </h3>
                        </div>
                        <a
                          href="#"
                          className="flex items-center bg-white bg-opacity-20 hover:bg-opacity-30 text-white px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200"
                        >
                          {data.link}
                          <ExternalLink className="w-4 h-4 ml-2" />
                        </a>
                      </div>
                    </div>

                    {/* Stats Grid */}
                    <div className="p-6">
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <StatCard
                          icon={Code}
                          label="Submissions"
                          value={data.submissions}
                          growth={
                            index > 0
                              ? getGrowthPercentage(
                                  data.submissions,
                                  historyData[index - 1].submissions
                                )
                              : undefined
                          }
                        />
                        <StatCard
                          icon={Globe}
                          label="Countries"
                          value={data.countries}
                          growth={
                            index > 0
                              ? getGrowthPercentage(
                                  data.countries,
                                  historyData[index - 1].countries
                                )
                              : undefined
                          }
                        />
                        <StatCard
                          icon={Building}
                          label="Institutions"
                          value={data.institutions}
                          growth={
                            index > 0
                              ? getGrowthPercentage(
                                  data.institutions,
                                  historyData[index - 1].institutions
                                )
                              : undefined
                          }
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-full"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Overall Progress Summary */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
            <h3 className="text-3xl font-bold text-gray-900 mb-2">
              Growth Journey
            </h3>
            <div className="w-16 h-1 bg-gradient-to-r from-green-500 to-blue-500 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">90%</div>
              <div className="text-gray-600">Submission Growth</div>
              <div className="text-sm text-gray-500">2021 to 2023</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-red-600 mb-2">7+</div>
              <div className="text-gray-600">Countries Reached</div>
              <div className="text-sm text-gray-500">Peak in 2022</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">30+</div>
              <div className="text-gray-600">Max Institutions</div>
              <div className="text-sm text-gray-500">Consistent Growth</div>
            </div>
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-16 bg-gradient-to-r from-orange-600 to-red-600 rounded-2xl p-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <Users className="w-16 h-16 mx-auto mb-6 opacity-90" />
            <p className="text-xl md:text-2xl leading-relaxed mb-6">
              <strong>CodeChef</strong> is the Indian Competitive Programming
              platform, and a key part of our coding journey.
            </p>
            <div className="bg-white bg-opacity-20 rounded-xl p-6">
              <p className="text-lg md:text-xl">
                With <strong className="text-yellow-300">BKP</strong>, we aim to
                boost{" "}
                <strong className="text-yellow-300">
                  CodeChef&apos;s presence in Central India
                </strong>{" "}
                and beyond, inspiring more students to join the CP community.
              </p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-4 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
            Join BKP 2024
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 opacity-10">
          <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 opacity-10">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default CodeChefHistory;
