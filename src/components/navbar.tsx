"use client";
import React, { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import Image from "next/image";

interface NavItem {
  label: string;
  href: string;
  isSection?: boolean;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "#about", isSection: true },
  { label: "Prizes", href: "#prizes", isSection: true },
  { label: "Leaderboard", href: "#leaderboard", isSection: true },
];

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleSectionClick = (href: string, isSection?: boolean) => {
    if (isSection && href.startsWith("#")) {
      const element = document.getElementById(href.substring(1));
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="mt-6 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-2">
            <Image
              src="/images/gdg.svg"
              alt="Logo"
              width={180}
              height={180}
              className="mt-3.5"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) =>
              item.isSection ? (
                <button
                  key={item.label}
                  onClick={() => handleSectionClick(item.href, item.isSection)}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-md transition-colors duration-200 relative hover:underline cursor-pointer"
                  style={{
                    textUnderlineOffset: "4px",
                    textDecorationColor: "#FD6500",
                  }}
                >
                  {item.label}
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  className="text-gray-600 hover:text-gray-900 px-3 py-2 text-md transition-colors duration-200 relative hover:underline"
                  style={{
                    textUnderlineOffset: "4px",
                    textDecorationColor: "#FD6500",
                  }}
                >
                  {item.label}
                </Link>
              )
            )}
            <Link
              href="/participate"
              className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            >
              Participate
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-orange-500 p-2"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border mt-8 border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-gradient-to-br from-orange-50 to-pink-50">
              {navItems.map((item) =>
                item.isSection ? (
                  <button
                    key={item.label}
                    onClick={() =>
                      handleSectionClick(item.href, item.isSection)
                    }
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-md transition-colors duration-200 w-full text-left"
                  >
                    {item.label}
                  </button>
                ) : (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-gray-600 hover:text-gray-900 block px-3 py-2 text-md transition-colors duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </Link>
                )
              )}
              <Link
                href="/participate"
                className="bg-orange-600 hover:bg-orange-700 text-white block px-6 py-2 rounded-md text-sm font-medium transition-colors duration-200 mt-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Participate
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
