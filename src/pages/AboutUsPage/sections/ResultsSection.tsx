import { BackgroundImage } from "../../../components/BackgroundImage";
import { useState, useEffect } from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image: string;
}

function TestimonialCard({
  quote,
  author,
  company,
  image,
}: TestimonialCardProps) {
  return (
    <div
      className="bg-[#FFFFFF1A] backdrop-blur-[40px] rounded-[10px]  relative overflow-visible
                transition-all duration-500 ease-out hover:shadow-[0_0_20px_rgba(0,97,239,0.3)] 
                hover:scale-[1.02] cursor-pointer group border-[0.5px] border-[#FEFEFE]"
    >
      {/* Quote mark design element top */}
      <div className="absolute -top-4 -left-4 ">
        <img src="/icons/top-quote.svg" alt="top-quote" />
      </div>

      {/* Quote mark design element bottom */}
      <div className="absolute -bottom-4 -right-4">
        <img src="/icons/bottom-quote.svg" alt="bottom-quote" />
      </div>

      <div className="p-5 relative z-10">
        <p className="text-[#DFDFDF] leading-[140%] tracking-[0px] text-[16px] mb-[8px]">
          " {quote} "
        </p>

        <div className="flex items-center mt-4">
          <div className="w-[30px] h-[30px] rounded-full overflow-hidden mr-4 ">
            <img
              src={image}
              alt={author}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <div className="text-primary-500 text-[16px] leading-[140%] tracking-[0px]">
              {author}
            </div>
            <div className="text-[#DFDFDF] text-[12px] leading-[140%] tracking-[0px]">
              {company}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export function ResultsSection() {
  const testimonials = [
    {
      id: 1,
      quote:
        "Bruce is one of, if not the best, negotiator of television I've ever known. I have seen him on both sides of the negotiation and he has a unique ability to get an amazing amount of value for his clients while leaving the station with enough dignity to keep doing business with him even though they are selling to him at the lowest unit rate on the station. I'm still perplexed how he does it!",
      author: "Brian Brandy",
      company: "Board Member, Cox Media Group",
      image: "/images/man1.png",
    },
    {
      id: 2,
      quote:
        "I've had the pleasure of knowing Bruce for 20 years and collaborating on many projects. His wealth of experience, coupled with a genuine commitment to his clients' success, truly sets him apart. I particularly value his clear communication style, which is always focused on results. Like me, many clients continue to work with Bruce over the years because of the exceptional value he consistently delivers.",
      author: "Christine Harmon",
      company: "VP of Marketing",
      image: "/images/man2.png",
    },
    {
      id: 3,
      quote:
        "Bruce has been my TV media buyer for over 14 years and has placed over 250 million dollars in TV time for me. A number of other media buyers and agencies have pitched me for this business and my response is always the same: Show me you can purchase a market that matches Bruce's rates and spot placements AND drive in as many leads…do that, and you will have my business. No one has even come close! He is the best in the business.",
      author: "Michael Chen",
      company: "Elevate Digital Solutions",
      image: "/images/man3.png",
    },
  ];

  const [displayedTestimonials, setDisplayedTestimonials] =
    useState(testimonials);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 768) {
        // xs screen
        setDisplayedTestimonials(testimonials.slice(0, 1));
      } else if (width < 1024) {
        // md screen
        setDisplayedTestimonials(testimonials.slice(0, 2));
      } else {
        // lg screen
        setDisplayedTestimonials(testimonials);
      }
    };

    // Set initial value
    handleResize();

    // Add event listener
    window.addEventListener("resize", handleResize);

    // Clean up
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full relative py-[60px]">
      <BackgroundImage imagePath="/backgrounds/result-bg.png" />
      <div className="max-w-[1080px] mx-auto px-4">
        <h2 className="text-heading-3 sm:text-heading-1 font-medium leading-[140%] tracking-[0px] text-white text-center mb-8 sm:mb-16">
          Real Results, Real Stories
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {displayedTestimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
