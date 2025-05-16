import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import GetInTouch from "../../components/GetInTouch";
interface FAQItem {
    id: string;
    question: string;
    answer: string;
}

const faqs: FAQItem[] = [
    {
        id: "1",
        question: "How Can I Beat Competitor Pricing?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    },
    {
        id: "2",
        question: "How Can I Provide Pinpoint Placement?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    },
    {
        id: "3",
        question: "How Can I Offer More Filters Than Other Companies?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    },
    {
        id: "4",
        question: "Do I Track Activity to Your Website?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    },
    {
        id: "5",
        question: "What Sets My Services Apart?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    },
    {
        id: "6",
        question: "Why Should You Choose Fox Media Pro?",
        answer: "I purchase ad inventory at the same cost as my competitors. The difference is, I don't have the high overhead or the need to stack marketing agencies on top of me. This allows me to catch those savings directly to you, offering unbeatable pricing for the same product."
    }
];

export default function FAQsPage() {
    const [openFAQs, setOpenFAQs] = useState<Set<string>>(new Set());

    // Check if screen is mobile and open all FAQs if true
    useEffect(() => {
        const checkIfMobile = () => {
            const mobile = window.innerWidth < 768;

            if (mobile) {
                // Open all FAQs on mobile
                const allIds = faqs.map(faq => faq.id);
                setOpenFAQs(new Set(allIds));
            } else {
                // Close all FAQs on desktop
                setOpenFAQs(new Set());
            }
        };

        // Initial check
        checkIfMobile();

        // Add resize listener
        window.addEventListener('resize', checkIfMobile);

        // Cleanup
        return () => window.removeEventListener('resize', checkIfMobile);
    }, []);

    const toggleFAQ = (id: string) => {
        setOpenFAQs(prev => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const isFAQOpen = (id: string) => openFAQs.has(id);

    return (
        <>
        <div className="relative min-h-[105vh] bg-black w-full text-white pb-16">
            <div className="container mx-auto px-4 max-w-3xl pt-44">
                <div className="text-center">
                    <span className="text-[#0061EF] text-[25px] font-medium uppercase tracking-wide">FAQs</span>
                    <h1 className="text-[49px] font-bold mt-4 mb-2 tracking-wide text-left md:text-center">Frequently Asked Questions</h1>
                    <p className="text-[20px] text-[#AEAEAE] mb-12">Why Fox Media Pro?</p>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <motion.div
                            key={faq.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4 }}
                            className="border border-[#2F2F2F] rounded-xl overflow-hidden"
                        >
                            <button
                                onClick={() => toggleFAQ(faq.id)}
                                className="w-full px-6 py-4 flex justify-between items-start text-left font-medium focus:outline-none"
                            >
                                <span className="text-[24px] w-[90%] md:w-full">{faq.question}</span>
                                <div className={`text-[#0061EF] mt-2 transition-transform duration-300 ${isFAQOpen(faq.id) ? 'rotate-180' : ''}`}>
                                    <img src="/icons/arrow-icon.svg" className="w-7 h-7" alt="Arrow" />
                                </div>
                            </button>
                            <AnimatePresence>
                                {isFAQOpen(faq.id) && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="overflow-hidden"
                                    >
                                        <div className="px-6 py-5 text-[#AEAEAE] text-[16px] leading-relaxed">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>

        <GetInTouch />
        </>
    );
} 