"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Trophy, Medal, Award, Star, Crown } from "lucide-react";

interface LeaderboardEntry {
  id: number;
  name: string;
  points: number;
  prasadDelivered: number;
  avatar: string;
  rank: number;
  badge?: string;
}

interface LeaderboardProps {
  className?: string;
}

const Leaderboard: React.FC<LeaderboardProps> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"weekly" | "monthly" | "allTime">(
    "weekly"
  );

  // Sample leaderboard data
  const leaderboardData: LeaderboardEntry[] = [
    {
      id: 1,
      name: "Rajesh Sharma",
      points: 2500,
      prasadDelivered: 150,
      avatar: "/images/avatar1.svg",
      rank: 1,
      badge: "crown",
    },
    {
      id: 2,
      name: "Priya Patel",
      points: 2350,
      prasadDelivered: 142,
      avatar: "/images/avatar2.svg",
      rank: 2,
      badge: "trophy",
    },
    {
      id: 3,
      name: "Amit Kumar",
      points: 2200,
      prasadDelivered: 130,
      avatar: "/images/avatar3.svg",
      rank: 3,
      badge: "medal",
    },
    {
      id: 4,
      name: "Sneha Joshi",
      points: 1950,
      prasadDelivered: 118,
      avatar: "/images/avatar4.svg",
      rank: 4,
    },
    {
      id: 5,
      name: "Vikram Singh",
      points: 1800,
      prasadDelivered: 105,
      avatar: "/images/avatar5.svg",
      rank: 5,
    },
    {
      id: 6,
      name: "Anita Gupta",
      points: 1650,
      prasadDelivered: 95,
      avatar: "/images/avatar6.svg",
      rank: 6,
    },
    {
      id: 7,
      name: "Rohit Mehta",
      points: 1500,
      prasadDelivered: 88,
      avatar: "/images/avatar7.svg",
      rank: 7,
    },
    {
      id: 8,
      name: "Kavya Reddy",
      points: 1350,
      prasadDelivered: 82,
      avatar: "/images/avatar8.svg",
      rank: 8,
    },
  ];

  const getRankIcon = (rank: number, badge?: string) => {
    if (badge === "crown" || rank === 1) {
      return <Crown className="w-6 h-6 text-yellow-500" />;
    } else if (badge === "trophy" || rank === 2) {
      return <Trophy className="w-6 h-6 text-gray-400" />;
    } else if (badge === "medal" || rank === 3) {
      return <Medal className="w-6 h-6 text-orange-600" />;
    } else if (rank <= 10) {
      return <Star className="w-5 h-5 text-orange-500" />;
    }
    return null;
  };

  const getRankBackground = (rank: number) => {
    if (rank === 1) return "bg-gradient-to-r from-yellow-400 to-yellow-600";
    if (rank === 2) return "bg-gradient-to-r from-gray-300 to-gray-500";
    if (rank === 3) return "bg-gradient-to-r from-orange-400 to-orange-600";
    return "bg-gradient-to-r from-orange-100 to-pink-100";
  };

  const getTextColor = (rank: number) => {
    if (rank <= 3) return "text-white";
    return "text-gray-800";
  };

  return (
    <section
      className={`py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-orange-50 to-pink-50 ${className}`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Trophy className="w-12 h-12 text-orange-600 mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Leaderboard
            </h1>
            <Award className="w-12 h-12 text-orange-600 ml-4" />
          </div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Celebrating our top prasad delivery champions who spread Ganpati
            Bappas blessings far and wide!
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-full p-1 shadow-lg">
            {(["weekly", "monthly", "allTime"] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  activeTab === tab
                    ? "bg-orange-600 text-white shadow-md"
                    : "text-gray-600 hover:text-orange-600"
                }`}
              >
                {tab === "allTime"
                  ? "All Time"
                  : tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Top 3 Podium */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {leaderboardData.slice(0, 3).map((entry, index) => (
            <div
              key={entry.id}
              className={`relative ${
                index === 0
                  ? "md:order-2"
                  : index === 1
                  ? "md:order-1"
                  : "md:order-3"
              }`}
            >
              <div
                className={`${getRankBackground(
                  entry.rank
                )} rounded-2xl p-6 text-center shadow-xl transform transition-transform hover:scale-105`}
              >
                {/* Rank Badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-white rounded-full p-3 shadow-lg">
                    {getRankIcon(entry.rank, entry.badge)}
                  </div>
                </div>

                {/* Avatar */}
                <div className="mt-8 mb-4">
                  <div className="w-20 h-20 mx-auto bg-white rounded-full flex items-center justify-center text-2xl font-bold text-gray-800">
                    {entry.name.charAt(0)}
                  </div>
                </div>

                {/* User Info */}
                <h3
                  className={`text-xl font-bold mb-2 ${getTextColor(
                    entry.rank
                  )}`}
                >
                  {entry.name}
                </h3>
                <p
                  className={`text-3xl font-extrabold mb-2 ${getTextColor(
                    entry.rank
                  )}`}
                >
                  {entry.points.toLocaleString()}
                </p>
                <p className={`text-sm ${getTextColor(entry.rank)} opacity-90`}>
                  {entry.prasadDelivered} Prasad Delivered
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Rest of Leaderboard */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="bg-gradient-to-r from-orange-600 to-red-600 px-6 py-4">
            <h3 className="text-2xl font-bold text-white text-center">
              Rankings
            </h3>
          </div>

          <div className="divide-y divide-gray-100">
            {leaderboardData.slice(3).map((entry) => (
              <div
                key={entry.id}
                className="px-6 py-4 hover:bg-gradient-to-r hover:from-orange-50 hover:to-pink-50 transition-all duration-200"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    {/* Rank */}
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full">
                      <span className="text-sm font-bold text-gray-700">
                        #{entry.rank}
                      </span>
                    </div>

                    {/* Avatar */}
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center text-white font-bold">
                      {entry.name.charAt(0)}
                    </div>

                    {/* Name and Stats */}
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {entry.name}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {entry.prasadDelivered} prasad delivered
                      </p>
                    </div>
                  </div>

                  {/* Points and Icon */}
                  <div className="flex items-center space-x-3">
                    <div className="text-right">
                      <p className="text-xl font-bold text-orange-600">
                        {entry.points.toLocaleString()}
                      </p>
                      <p className="text-xs text-gray-500">points</p>
                    </div>
                    {getRankIcon(entry.rank)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-xl">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Want to climb the leaderboard?
            </h3>
            <p className="text-gray-600 mb-6">
              Start delivering prasad and earning points to spread Ganpati
              Bappas blessings!
            </p>
            <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-all duration-200 transform hover:scale-105 shadow-lg">
              Start Participating
            </button>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-10 left-10 opacity-20">
          <div className="w-32 h-32 bg-gradient-to-r from-orange-400 to-pink-400 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-20 right-20 opacity-20">
          <div className="w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl"></div>
        </div>
      </div>
    </section>
  );
};

export default Leaderboard;
