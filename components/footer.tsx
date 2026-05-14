"use client"
import {
  EnvelopeClosedIcon,
  InstagramLogoIcon,
  TwitterLogoIcon,
  LinkedInLogoIcon,
} from "@radix-ui/react-icons";
import Image from "next/image";
import { IoLocationOutline } from "react-icons/io5";

export function Footer() {
  return (
    <div className="footer mt-4">
      <footer
        id="footer"
        className="relative flex w-full items-center justify-between py-6 md:py-10 px-4 md:px-0 flex-col md:flex-row md:h-80 overflow-hidden "
      >
        {/* Logo and Title Section */}
        <div className="flex w-full md:w-1/3 md:pl-16 flex-col items-center justify-center mb-6 md:mb-0">
          <Image
            src="/gdgico.svg"
            alt="logo"
            className="h-8 md:h-10 mb-3 md:mb-0"
            width={60}
            height={60}
            priority
          />
          <p className="pt-2 md:pt-4 text-lg md:text-2xl text-black text-center font-medium">
            Google Developer Groups
          </p>
          <div className="text-center mt-2">
            <span className="text-sm md:text-md text-blue-600 font-medium">
              On Campus
            </span>
            <span className="text-sm md:text-md text-black">
              {" "}• Ramdeobaba University
            </span>
          </div>
        </div>
        
        {/* Divider */}
        <div className="hidden md:block w-px h-48 bg-gray-300 dark:bg-gray-600"></div>
        <div className="block md:hidden w-full max-w-xs h-px bg-gray-300 dark:bg-gray-600 my-6"></div>
        
        {/* Contact Information Section */}
  <div className="flex w-full md:w-1/2 flex-col items-center md:items-start justify-center gap-4 md:gap-6 px-2 md:px-0">
          {/* Address */}
          <div className="flex flex-col items-center md:flex-row md:items-start w-full text-center md:text-left">
            <IoLocationOutline className="mt-1 mb-2 md:mb-0 mr-0 md:mx-12 md:mr-6 text-lg md:text-xl text-black flex-shrink-0" />
            <div className="text-sm md:text-md text-black leading-relaxed">
              Shri Ramdeobaba College of Engineering and Management, 
              <br/>
              Ramdeo Tekdi, Gittikhadan, Katol Road, Nagpur - 440013
            </div>
          </div>
          
          {/* Email */}
          <div className="flex flex-col items-center md:flex-row md:items-center w-full text-center md:text-left">
            <EnvelopeClosedIcon className="mb-2 md:mb-0 mr-0 md:ml-12 md:mr-6 text-lg md:text-xl text-black flex-shrink-0" />
            <a
              href="mailto:dsc.rknec@gmail.com"
              className="underline-offset-2 underline text-sm md:text-md text-black hover:text-blue-600 transition-colors break-all"
            >
              dsc.rknec@gmail.com
            </a>
          </div>
          
          {/* Social Media */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 py-4 md:py-6 w-full justify-center">
            <div className="text-sm md:text-md md:ml-8 text-black font-medium whitespace-nowrap text-center sm:text-left w-full sm:w-auto">
              Follow Us:
            </div>
            <div className="flex gap-6 md:gap-8 justify-center w-full sm:w-auto">
              <a
                href="https://www.instagram.com/gdg_rbu/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                aria-label="Follow us on Instagram"
              >
                <InstagramLogoIcon className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-pink-600 transition-colors" />
              </a>
              <a
                href="https://mobile.twitter.com/gdsc_rcoem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                aria-label="Follow us on Twitter"
              >
                <TwitterLogoIcon className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-blue-500 transition-colors" />
              </a>
              <a
                href="https://in.linkedin.com/company/gdsc-rcoem"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-gray-100 transition-all duration-200"
                aria-label="Follow us on LinkedIn"
              >
                <LinkedInLogoIcon className="w-5 h-5 md:w-6 md:h-6 text-black hover:text-blue-700 transition-colors" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
