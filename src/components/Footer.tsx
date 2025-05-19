import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";

export function Footer() {
  return (
    <footer className="w-full bg-black text-white border-t-[2px] border-[#0061EF]">
      <div className="lg:container mx-auto px-[10px] md:px-[20px] lg:px-[50px] pt-0 pb-10 sm:py-12">
        <div className="flex flex-col md:hidden">
          <Link to="/" className="flex items-center gap-2 mb-4">
            <img src="/logo/logo.png" alt="Fox Media Pro Logo" />
          </Link>
        </div>
        <div className="px-[30px] gap-[80px] flex justify-start">
          <div className="grid grid-cols-1 md:grid-cols-5 lg:grid-cols-7 gap-5 lg:gap-8">
            {/* Logo and company info */}
            <div className="hidden md:flex flex-col lg:w-[200px]">
              <Link to="/" className="flex items-center gap-2 mb-4">
                <img src="/logo/logo.png" alt="Fox Media Pro Logo" />
              </Link>
            </div>
            <div className="hidden lg:block"></div>

            {/* Company Links */}
            <div className="flex flex-col gap-[10px]">
              <h3 className="text-heading-5 font-medium">Company</h3>
              <ul className="space-y-[10px]">
                <li>
                  <Link
                    to="/about"
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
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
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
                  >
                    All Services
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/streaming-tv"
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
                  >
                    Streaming Tv
                  </Link>
                </li>
                <li>
                  <Link
                    to="/services/traditional-tv"
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
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
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
                  >
                    FAQS
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blogs"
                    className="text-[14px] lg:text-[16px] leading-[140%] tracking-[0%] hover:text-blue-400 whitespace-nowrap"
                  >
                    Blogs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="hidden lg:block"></div>
            <div className="md:block hidden">
              <div className="mt-6">
                <Link to="/contact">
                  <Button variant="default">Get Started</Button>
                </Link>
              </div>
              <div className="mt-4 flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                    <IconMailFilled className="h-[17px]" />
                    <p>
                      <a
                        href="mailto:carter@foxmediabuy.com"
                        className="hover:text-blue-400"
                      >
                        carter@foxmediabuy.com
                      </a>
                    </p>
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                    <IconPhoneFilled className="h-[17px]" />
                    <p>
                      <a href="tel:9415868512" className="hover:text-blue-400">
                        (941) 586-8512
                      </a>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="block md:hidden">
            <div className="mt-0 md:mt-6">
              <Link to="/get-started">
                <Button variant="default" className="p-[0px_20px]">
                  Get Started
                </Button>
              </Link>
            </div>
            <div className="mt-4 flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                  <IconMailFilled className="h-[17px]" />
                  <p>
                    <a
                      href="mailto:carter@foxmediabuy.com"
                      className="hover:text-blue-400"
                    >
                      carter@foxmediabuy.com
                    </a>
                  </p>
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[12px] leading-[140%] tracking-[0%] flex items-center gap-1">
                  <IconPhoneFilled className="h-[17px]" />
                  <p>
                    <a href="tel:9415868512" className="hover:text-blue-400">
                      (941) 586-8512
                    </a>
                  </p>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-500 py-[11px] text-center text-[12px] leading-[140%] tracking-[0%]">
        <p>
          Fox Media Pro 2025 · All rights reserved. Designed by{" "}
          <a
            href="https://www.massinbound.com"
            className="underline hover:text-blue-200"
            target="_blank"
          >
            Mass Inbound
          </a>
        </p>
      </div>
    </footer>
  );
}
