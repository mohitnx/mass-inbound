import { BackgroundImage } from "../../components/BackgroundImage";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IconCircleCheck, IconCircleCheckFilled } from "@tabler/icons-react";
import { FormInput } from "../../components/ui/FormInput";
import { FormTextarea } from "../../components/ui/FormTextarea";
import { Button } from "../../components/ui/button";
import { ContactCard } from "../../components/ui/ContactCard";
import { Confetti } from "../../components/ui/Confetti";
import axios from "axios";

export function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    website: "",
    message: "",
    consent: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [isErrorState, setIsErrorState] = useState(false);
  const formContainerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isSubmitted) {
      setShowConfetti(true);
      const timer = setTimeout(() => {
        setShowConfetti(false);
      }, 5000); // Match confetti duration
      return () => clearTimeout(timer);
    }
  }, [isSubmitted]);

  useEffect(() => {
    if (isErrorState) {
      // Automatically transition back to the form after 4 seconds
      const timer = setTimeout(() => {
        setIsErrorState(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [isErrorState]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const target = e.target as HTMLInputElement;
      setFormData((prev) => ({ ...prev, [name]: target.checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setIsErrorState(false);

    try {
      // Try using an updated API endpoint
      // If this endpoint doesn't exist or work, you'll need to update it with a valid one
      const apiEndpoint = "https://5dkqxgif4l.execute-api.us-east-2.amazonaws.com/prod/submit";

      console.log("Submitting form to:", apiEndpoint);

      // Store form data in localStorage for recovery if needed
      localStorage.setItem("contactFormData", JSON.stringify({
        first_name: formData.firstName,
        last_name: formData.lastName,
        phone_number: formData.phone,
        email: formData.email,
        company_name: formData.company,
        company_website: formData.website,
        message: formData.message,
        consent: formData.consent,
        timestamp: new Date().toISOString()
      }));

      // Use axios instead of fetch with timeout
      const response = await axios({
        method: 'post',
        url: apiEndpoint,
        data: {
          first_name: formData.firstName,
          last_name: formData.lastName,
          phone_number: formData.phone,
          email: formData.email,
          company_name: formData.company,
          company_website: formData.website,
          message: formData.message,
          consent: formData.consent,
        },
        timeout: 10000, // 10-second timeout
        headers: {
          'Content-Type': 'application/json'
        }
      });

      // Axios automatically throws errors for non-2xx responses, so we don't need the !response.ok check
      console.log("Form submitted successfully:", response.data);

      // Form submitted successfully
      setIsSubmitted(true);
      setShowConfetti(true);

      // Reset form after 5 seconds ONLY after successful submission
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          company: "",
          website: "",
          message: "",
          consent: false,
        });
      }, 5000);
    } catch (error) {
      // For error cases, we do NOT reset the form data
      console.error("Form submission error:", error);
      let errorMessage = "Failed to submit form. ";

      // Extract and prepare error message
      if (axios.isAxiosError(error)) {
        if (error.code === 'ECONNABORTED') {
          errorMessage += "Request timed out. Please try again later.";
        } else if (!error.response) {
          errorMessage += "Network error: The server may be down or unreachable. Please check your connection and try again.";
        } else {
          errorMessage += `Server error (${error.response.status}): ${error.response.data || error.message}`;
        }

        // Log detailed error information for debugging
        let errorDetail = "";
        if (error.response) {
          errorDetail = `Status: ${error.response.status}, ${JSON.stringify(error.response.data || '')}`;
        } else if (error.request) {
          errorDetail = "No response received from server";
        } else {
          errorDetail = error.message;
        }
        console.error("API Error Details:", errorDetail);
      } else if (error instanceof Error) {
        errorMessage += error.message;
      }

      // Show error to user
      setSubmitError(errorMessage);
      setIsErrorState(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative w-full flex flex-col items-center justify-center text-white text-center pb-20 pt-40 md:pt-60 min-h-screen">
      {/* Background stars effect */}
      <BackgroundImage imagePath="/backgrounds/star.png" />

      {showConfetti && <Confetti />}

      <div className="max-w-[800px] mx-auto px-4 relative z-10 mb-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-lg md:text-heading-1 font-medium leading-[140%] tracking-[0%] text-white text-center mb-[28px]"
        >
          Contact with us Today!
        </motion.h2>
      </div>

      <div className="grid grid-cols-12 gap-1 w-full max-w-7xl px-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="col-span-12 md:col-span-7 xl:col-span-8"
        >
          <div
            ref={formContainerRef}
            className={`backdrop-blur-sm border border-[#0061EF] p-8 rounded-[10px] relative overflow-hidden transition-all duration-1000 h-[900px] md:h-[660px] lg:h-[630px] ${isSubmitted || isErrorState
              ? "bg-gradient-to-l from-[#0061EF] to-[#002964]"
              : "bg-[#FEFEFE]/10"
              } flex`}
          // style={{ minHeight: formHeight ? `${formHeight + 68}px` : 'auto' }} // Add padding (p-8 = 64px)
          >
            {/* Shimmer effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent shimmer-effect"></div>

            <AnimatePresence mode="wait">
              {isSubmitted && !isErrorState ? (
                <motion.div
                  ref={successRef}
                  key="success"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative z-10 flex flex-col items-center justify-center m-auto"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      transition: {
                        times: [0, 0.6, 1],
                        duration: 0.8,
                        delay: 0.3,
                      },
                    }}
                    className="mb-6 float-animation"
                  >
                    <div>
                      <img
                        src="/icons/icon-checkbox.svg"
                        alt="Check"
                        className="w-[50px] h-[50px]"
                      />
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.8, duration: 0.5 },
                    }}
                    className="text-[31px] font-bold mb-4 text-white"
                  >
                    Thank you for reaching out!
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.2, duration: 0.5 },
                    }}
                    className="text-center text-white text-[14px]"
                  >
                    Your message has been sent successfully. We will get back to
                    you soon!
                  </motion.p>
                </motion.div>
              ) : isErrorState ? (
                <motion.div
                  ref={successRef}
                  key="error"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    transition: {
                      duration: 0.5,
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                    },
                  }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  className="relative z-10 flex flex-col items-center justify-center m-auto w-full max-w-[500px]"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{
                      scale: [0, 1.2, 1],
                      transition: {
                        times: [0, 0.6, 1],
                        duration: 0.8,
                        delay: 0.3,
                      },
                    }}
                    className="mb-6 float-animation"
                  >
                    <div className="bg-red-100 p-3 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[30px] h-[30px] text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                  </motion.div>

                  <motion.h3
                    initial={{ opacity: 0, y: 20 }}
                    animate={{
                      opacity: 1,
                      y: 0,
                      transition: { delay: 0.8, duration: 0.5 },
                    }}
                    className="text-[31px] font-bold mb-4 text-white text-center"
                  >
                    Submission Error
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.2, duration: 0.5 },
                    }}
                    className="text-center text-white text-[14px] mb-4"
                  >
                    {submitError}
                  </motion.p>

                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{
                      opacity: 1,
                      transition: { delay: 1.8, duration: 0.5 },
                    }}
                    className="text-center text-white/70 text-[12px]"
                  >
                    Returning to form...
                  </motion.p>
                </motion.div>
              ) : (
                <motion.div
                  ref={formRef}
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative z-10 w-full"
                >
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <FormInput
                        name="firstName"
                        placeholder="First Name"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        name="lastName"
                        placeholder="Last Name"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <FormInput
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <FormInput
                        name="company"
                        placeholder="Company Name"
                        value={formData.company}
                        onChange={handleChange}
                      />
                      <FormInput
                        name="website"
                        placeholder="Company Website"
                        value={formData.website}
                        onChange={handleChange}
                      />
                      <div className="md:col-span-2">
                        <FormTextarea
                          name="message"
                          placeholder="Your Message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={6}
                          required
                        />
                      </div>
                      <div className="md:col-span-2 flex items-start gap-2">
                        <div className="relative mt-1">
                          <input
                            type="checkbox"
                            id="consent"
                            name="consent"
                            checked={formData.consent}
                            onChange={handleChange}
                            className="opacity-0 absolute h-5 w-5 cursor-pointer z-10"
                            required
                          />
                          <div className="cursor-pointer transition-all duration-300">
                            <AnimatePresence initial={false} mode="wait">
                              {formData.consent ? (
                                <motion.div
                                  key="checked"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <IconCircleCheckFilled className="size-7 text-[#0061EF]" />
                                </motion.div>
                              ) : (
                                <motion.div
                                  key="unchecked"
                                  initial={{ opacity: 0, scale: 0.8 }}
                                  animate={{ opacity: 1, scale: 1 }}
                                  exit={{ opacity: 0, scale: 0.8 }}
                                  transition={{ duration: 0.2 }}
                                >
                                  <IconCircleCheck className="size-7 text-white" />
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </div>
                        <label
                          htmlFor="consent"
                          className="text-[12px] text-white/80 text-left cursor-pointer tracking-wider mt-[0.5px]"
                        >
                          By checking this box, I consent to receive marketing
                          and promotional messages, including special offers,
                          discounts, new product updates among others. Message
                          frequency may vary. Message & data rates may apply.
                          Reply HELP for help or STOP to opt-out.
                        </label>
                      </div>
                      <div className="md:col-span-2">
                        <Button
                          type="submit"
                          size="default"
                          className="w-full group relative overflow-hidden rounded-xl hover:rounded-xl"
                          disabled={isSubmitting}
                        >
                          <span className="relative z-10">
                            {isSubmitting ? "Sending..." : "Send Message"}
                          </span>
                          <span className="absolute inset-0 h-full w-full bg-white/10 transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-out"></span>
                        </Button>
                      </div>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="col-span-12 md:col-span-5 xl:col-span-4 flex flex-col gap-6"
        >
          <div className="text-left p-8 rounded-[10px] h-full">
            <p className="text-[20px] text-[#F68104]">Contact</p>
            <h3 className="text-[49px]">Let's Connect</h3>
            <p className="text-[20px] mb-6">We're here to help!</p>

            <div className="space-y-6">
              <ContactCard
                title="Call Us"
                description="(941) 586-8512"
                icon={<img src="/icons/call.svg" alt="Call Us" />}
                href="tel:+19415863512"
              />

              <ContactCard
                title="Email Us"
                description="bruce@flowmediapro.com"
                icon={<img src="/icons/mail.svg" alt="Email Us" />}
                href="mailto:bruce@foxmediapro.com"
              />

              <ContactCard
                title="Location"
                description="United States"
                icon={<img src="/icons/location.svg" alt="Location" />}
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
