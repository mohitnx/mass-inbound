import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-[2px] border-[#0061EF]">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
          {/* Logo and company info */}
          <div className="flex flex-col">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <img src="/logo/logo.png" alt="Fox Media Pro Logo" />
            </Link>
          </div>

          <div className="hidden md:block"></div>

          {/* Company Links */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-heading-5 font-medium">Company</h3>
            <ul className="space-y-[10px]">
              <li>
                <Link
                  to="/about"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Links */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-heading-5 font-medium">Services</h3>
            <ul className="space-y-[10px]">
              <li>
                <Link
                  to="/services"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  All Services
                </Link>
              </li>
              <li>
                <Link
                  to="/services/streaming"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  Streaming Tv
                </Link>
              </li>
              <li>
                <Link
                  to="/services/traditional"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  Traditional Tv
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Links */}
          <div className="flex flex-col gap-[10px]">
            <h3 className="text-heading-5 font-medium">Resources</h3>
            <ul className="space-y-[10px]">
              <li>
                <Link
                  to="/faqs"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  FAQS
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400"
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden md:block"></div>

          <div>
            <div className="mt-6">
              <Link to="/get-started">
                <Button variant="default">Get Started</Button>
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                  <IconMailFilled className="h-[17px]" />
                  <p>info@example.com</p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                  <IconPhoneFilled className="h-[17px]" />
                  <p>(941) 586-8512</p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-500 py-[11px] text-center text-xs leading-[140%] tracking-[0%]">
        <p>
          Fox Media Pro 2025 · All rights reserved. Designed by{" "}
          <a
            href="https://www.massinbound.com"
            className="underline hover:text-blue-200"
          >
            Mass Inbound
          </a>
        </p>
      </div>
    </footer>
  );
}
