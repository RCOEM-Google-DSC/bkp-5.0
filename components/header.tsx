"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Prize", href: "#prize" },
    { name: "Collaborators", href: "#collaborators" },
  ];

  // Your Unstop link
  const unstopLink =
    "https://unstop.com/o/kZSVs5q?lb=sDELTvhK&utm_medium=Share&utm_source=ashutpan9454&utm_campaign=Online_coding_challenge";

  // Close mobile menu when clicking outside or resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (isMenuOpen && !target.closest("header")) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <>
      <header className="sticky top-10 z-50 py-3 md:py-6 bg-gradient-to-br from-orange-50 to-pink-50 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-12 md:h-16">
            {/* Logo */}
            <div className="flex items-center space-x-2 flex-shrink-0">
              <Image
                src="/gdg.png"
                alt="Google Developer Student Clubs"
                width={120}
                height={120}
                className="w-20 h-20 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-40 lg:h-40 object-contain"
                priority
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 text-sm lg:text-base font-medium transition-colors duration-200 hover:underline underline-offset-4"
                >
                  {item.name}
                </a>
              ))}
              <a
                href={unstopLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-600 text-white px-4 lg:px-6 py-2 lg:py-2.5 rounded-lg text-sm lg:text-base font-medium hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200"
              >
                Participate
              </a>
            </nav>

            {/* Mobile menu button */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-white/50 transition-colors duration-200 relative z-10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-6 h-6">
                <Menu
                  size={24}
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen ? "rotate-180 opacity-0" : "rotate-0 opacity-100"
                  }`}
                />
                <X
                  size={24}
                  className={`absolute inset-0 transform transition-all duration-300 ${
                    isMenuOpen
                      ? "rotate-0 opacity-100"
                      : "-rotate-180 opacity-0"
                  }`}
                />
              </div>
            </button>
          </div>

          {/* Mobile Navigation */}
          <div
            className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
              isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
            }`}
          >
            <div className="py-4 border-t border-gray-200/50 mt-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item, index) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 text-base font-medium py-2 px-2 rounded-lg hover:bg-white/50 transition-all duration-200 transform hover:translate-x-2"
                    onClick={() => setIsMenuOpen(false)}
                    style={{
                      animationDelay: `${index * 50}ms`,
                    }}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href={unstopLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-red-600 text-white px-6 py-3 rounded-lg text-base font-medium hover:bg-red-700 hover:shadow-lg transform hover:scale-105 transition-all duration-200 w-full text-center mt-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Participate
                </a>
              </nav>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
