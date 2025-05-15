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
          info@example.com
        </span>
      </div>
      {/* Main header */}
      <div className="flex md:flex-row items-center justify-between px-[10px] md:px-[20px] lg:px-[60px] py-3 md:py-5">
        {/* Logo and name */}
        <Link to="/" className="flex items-center gap-2 md:w-[359px]">
          {/* Placeholder logo */}
          <img
            src="/logo/logo.png"
            alt="Fox Media Pro Logo"
            className="hidden md:flex"
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
        <div className="items-center gap-4 mt-3 md:mt-0 flex">
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
                (941) 586-8512
              </span>
            </div>
          </div>
        </div>
        {/* Hamburger for mobile */}
        <button
          className="md:hidden ml-4"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Open menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden px-4 pb-4 flex flex-col gap-2 animate-fade-in">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              className="py-2 border-b border-gray-800 hover:text-blue-400"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link to="/get-started" onClick={() => setMenuOpen(false)}>
            <Button variant="default">Get Started</Button>
          </Link>
        </nav>
      )}
    </header>
  );
}
