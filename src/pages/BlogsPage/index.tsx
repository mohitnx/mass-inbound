import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";
import { Button } from "../../components/ui/button";
import GetInTouch from "./sections/GetInTouch";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "ego-buy-challenge",
        title: "How We Help You Overcome the \"Ego Buy\" Challenge in OTT/CTV Advertising",
        date: "Dec 8, 2024",
        description: "Discover how we tackle the \"ego buy\" in targeted advertising, offering solutions for both visibility and ROI.",
        image: "/blogs/ego-buy.png"
    },
    {
        id: "2",
        slug: "bait-and-switch",
        title: "The Bait-and-Switch in OTT/CTV Advertising - How to Protect Your Budget and Maximize ROI",
        date: "Nov 27, 2024",
        description: "Explore the hidden traps in low-CPM offers",
        image: "/blogs/bait-switch.png"
    },
    {
        id: "3",
        slug: "ott-vs-ctv-cable",
        title: "OTT (Over-The-Top) and CTV (Connected TV) vs. Cable and Broadcast TV",
        date: "Dec 8, 2024",
        description: "Discover how Fox Media Pro is revolutionizing the way we approach streaming technology.",
        image: "/blogs/ott-vs-ctv.png"
    }
];

export default function BlogsPage() {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

    return (
        <>
        <div className="relative min-h-[calc(74vh-7.8px)] bg-black w-full flex flex-col items-center justify-center text-white pb-20 pt-48">
            <div className="container mx-auto px-8 md:px-4 max-w-6xl">
                <div className="text-center mb-16">
                    <h1 className="text-[49px] md:text-5xl font-bold">Blogs</h1>
                    <p className="text-[20px] text-[#F5F5F5]">Our blog for all things related to OTT / CTV streaming</p>
                </div>

                <div className="flex flex-col space-y-16">
                    {blogPosts.map((post, index) => (
                        <Link
                            to={`/blogs/${post.slug}`}
                            key={post.id}
                            className="block"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="flex flex-col md:flex-row gap-8 group"
                            >
                                <div className="w-full md:w-3/5 relative overflow-hidden rounded-2xl h-[408px]">
                                    <motion.img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover"
                                        initial={{ scale: 1 }}
                                        animate={{ scale: hoveredIndex === index ? 1.05 : 1 }}
                                        transition={{ duration: 0.4 }}
                                    />
                                    <motion.div
                                        className={cn(
                                            "absolute inset-0 bg-gradient-to-r from-blue-600/30 to-purple-600/30",
                                            "opacity-0"
                                        )}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: hoveredIndex === index ? 0.5 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                </div>
                                <div className="w-full md:w-2/5 flex flex-col justify-start">
                                    <div className="mb-3">
                                        <span className="text-[#AEAEAE] text-xs font-medium">{post.date}</span>
                                    </div>
                                    <h2 className="text-2xl md:text-[25px] font-bold mb-4 group-hover:text-blue-400 transition-colors leading-tight tracking-wider">
                                        {post.title}
                                    </h2>
                                    <p className="text-[#AEAEAE] mb-6 text-[20px]">{post.description}</p>
                                    <motion.div
                                        className="text-blue-400 font-medium flex items-center text-lg"
                                        initial={{ x: 0 }}
                                        animate={{ x: hoveredIndex === index ? 5 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <Button className="text-[#F5F5F5] text-[20px] font-medium">Read More</Button>
                                    </motion.div>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>

        <GetInTouch />
        </>
    );
}
