import { IconMailFilled } from "@tabler/icons-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const navLinks = [
  { name: "Services", to: "/services" },
  { name: "About", to: "/about" },
  { name: "FAQs", to: "/faqs" },
  { name: "Blogs", to: "/blogs" },
  { name: "Contact", to: "/contact" },
];

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = useLocation();

  return (
    <header
      className={`absolute top-0 z-50 text-white w-screen ${
        pathname.pathname === "/about" || pathname.pathname === "/contact"
          ? "bg-[#060606]"
          : "bg-none"
      }`}
    >
      {/* Top blue bar */}
      <div className="bg-blue-600 text-white text-sm flex justify-center md:justify-end items-center px-[10px] md:px-[20px] lg:px-[96px] py-1">
        <span className="flex items-center gap-1 font-sans-inter font-normal text-xs leading-[140%] tracking-[0%] text-center">
          <IconMailFilled className="h-[17px]" />
          <a href="mailto:carter@foxmediabuy.com" className="hover:text-blue-200">carter@foxmediabuy.com</a>
        </span>
      </div>
      {/* Main header */}
      <div className="flex md:flex-row items-center justify-between px-[10px] md:px-[20px] lg:px-[60px] py-3 md:py-5">
        {/* Logo and name */}
        <Link to="/" className="w-[117px] md:w-[359px]">
          {/* Placeholder logo */}
          <img
            src="/logo/logo.png"
            alt="Fox Media Pro Logo"
            className="hidden md:flex "
          />
          <img
            src="/logo/logoSm.png"
            alt="Fox Media Pro Logo"
            className="flex md:hidden"
          />
        </Link>

        {/* Desktop/Tablet nav */}
        <nav className="hidden md:flex gap-6 items-center flex-1 justify-center">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="font-medium text-[#FEFEFE] text-[18px] leading-[120%] tracking-[0%]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions */}
        <div className="items-center gap-4 flex">
          <Link to="/get-started" className="hidden md:flex">
            <Button variant="default">Get Started</Button>
          </Link>
          <div className="flex items-center gap-2">
            <img src="/icons/call.svg" alt="Call Us" />
            <div className="flex flex-col text-left gap-0">
              <span className=" text-primary-200 leading-[140%] tracking-[0%]">
                Call Us
              </span>
              <span className="text-[16px] leading-[140%] tracking-[0%]">
                <a href="tel:9415868512" className="hover:text-blue-400">(941) 586-8512</a>
              </span>
            </div>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-[25px] focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <div className="relative w-8 h-8 flex items-center justify-center">
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`absolute h-0.5 w-6 bg-white transform transition duration-300 ease-in-out ${
                menuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden px-6 py-5 flex flex-col gap-4 animate-fade-in bg-gradient-to-b from-[#00296480] to-[#0061EF20] backdrop-blur-[10px] transition-all duration-300 ease-in-out">
          {navLinks.map((link, index) => (
            <Link
              key={link.name}
              to={link.to}
              className="py-1 flex items-center justify-between text-[16px] font-medium border-b border-[#ffffff20] hover:text-blue-400 transition-all duration-200"
              onClick={() => setMenuOpen(false)}
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <span>{link.name}</span>
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-60"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </Link>
          ))}
          {/* <Link
            to="/get-started"
            onClick={() => setMenuOpen(false)}
            className="mt-2 self-start"
          >
            <Button variant="default">Get Started</Button>
          </Link> */}
        </nav>
      )}
    </header>
  );
}
