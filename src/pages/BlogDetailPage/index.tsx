import { useParams, Link, useNavigate, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Button } from "../../components/ui/button";
import GetInTouch from "../../components/GetInTouch";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    date: string;
    description: string;
    image: string;
    content?: React.ReactNode;
}

// Blog post data with detailed content for each post
const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "ego-buy-challenge",
        title: "How We Help You Overcome the \"Ego Buy\" Challenge in OTT/CTV Advertising",
        date: "Dec 8, 2024",
        description: "Discover how we tackle the \"ego buy\" in targeted advertising, offering solutions for both visibility and ROI.",
        image: "/blogs/ego-buy.png",
        content: (
            <div className="prose prose-lg prose-invert max-w-none">
                <p>In traditional TV advertising, it's common for advertisers to hear from friends or family who saw their ad. This feedback creates a sense of visibility and recognition—what we call the "ego buy"—but it often lacks data on actual business impact. The modern marketer needs both visibility and performance, creating a challenge in OTT/CTV advertising where traditional metrics don't always align with business objectives.</p>
                <p>While this targeted approach delivers results, it can leave you wondering if you're actually noticed. That's where we come in. Here's how we help you overcome the ego buy challenge and confidently embrace the power of OTT/CTV:</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">1. We Replace Ego Metrics with Hard Data</h2>
                <p>Instead of relying on anecdotal feedback, we provide detailed insights into your campaign's true impact:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Impression Metrics: Beyond the basic numbers, we show you exactly where your ads appear</li>
                    <li>Engagement Metrics: Insights like click-through rates, website visits, and calls</li>
                    <li>Attribution Data: Connecting ad exposure to actual purchases or inquiries</li>
                    <li>Audience Insights: Detailed breakdowns of who's seeing your ads and their characteristics</li>
                </ul>
                <p>We help you see beyond vanity metrics to understand how your advertising truly impacts your potential customers.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">2. We Offer "Visibility Placements" for Ego Buy Reassurance</h2>
                <p>If feedback from friends and family is important to you, we can allocate a small portion of your budget for broad, untargeted placements. These high-visibility placements create the opportunity to see your company, while the rest of the budget remains laser-focused on your target audience for maximum ROI.</p>
                <p>This gives you the best of both worlds: personal recognition and business results.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">3. We Educate You on the Power of Precision</h2>
                <p>Our team will work with you to reframe your perspective on visibility. Here's how we explain it:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Targeted Advertising = Smarter Advertising: Imagine a billboard that only appears to drivers who need your service. That's OTT/CTV in essence.</li>
                    <li>Ego Buy vs. ROI: Would you rather everyone see your ad—or just the people who are ready to convert?</li>
                    <li>The "Echo Effect": Even with targeted advertising, your business gains credibility as satisfied customers create word-of-mouth buzz.</li>
                </ul>
                <p>We'll understand the value of targeting and why reaching less viewers can result in more effective than general visibility.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">4. We Leverage Social Proof for Personal Visibility</h2>
                <p>Want your friends and family to see your ad? We'll help you repurpose your campaigns for social media sharing! Instead of wasting your ad on platforms like Instagram, Facebook, or LinkedIn, you can manage your personal network while keeping your OTT/CTV strategy focused on conversions.</p>
                <p>This satisfies the ego but keeps dollars concentrated on campaign precision and ROI.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">5. We Help You Shift the Focus to What Matters</h2>
                <p>At the end of the day, your ads success isn't defined by who saw it—it's defined by the results it generates. With OTT/CTV, we're targeting the right audience in the right way, ensuring every dollar spent drives business growth. We'll help your campaign deliver on these core goals as you:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Reach the right customers</li>
                    <li>Maximize every ad dollar</li>
                    <li>Measure actual impact</li>
                </ul>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Why Choose Us?</h2>
                <p>We understand that transitioning to OTT/CTV requires more than just a shift in technology—it requires a shift in mindset. That's why we're here to guide you every step of the way.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Dedicated Account Managers: Always ready to answer questions and address concerns</li>
                    <li>Transparent Reporting: Clear dashboards showing how your ad performs</li>
                    <li>Strategy Consultations: Regular check-ins to optimize your business and campaign results</li>
                    <li>Expert Support: Education and insights to help you feel confident in every campaign</li>
                </ul>
                <p>With OTT/CTV, Business Growth, The Choice is Yours.</p>
                <p>Our team at Fox Media Pro is committed to helping you navigate modern advertising with our tools, transparency, and expertise, we'll help you navigate the ego buy challenge and unlock the full potential of targeted advertising.</p>
            </div>
        )
    },
    {
        id: "2",
        slug: "bait-and-switch",
        title: "The Bait-and-Switch in OTT/CTV Advertising - How to Protect Your Budget and Maximize ROI",
        date: "Nov 27, 2024",
        description: "Explore the hidden traps in low-CPM offers",
        image: "/blogs/bait-switch.png",
        content: (
            <div className="prose prose-lg prose-invert max-w-none">
                <p>In the fast-paced world of OTT/CTV and connected TV/CTV advertising, the "bait-and-switch" phenomenon has become increasingly common. As the industry grows, so do the pitfalls that can drain your budget while delivering subpar results. Understanding these tactics is essential to protect performance results, and this guide will help you navigate the complex landscape.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">The Allure of Low CPMs and the Hidden Conversion Costs</h2>
                <p>Low CPMs can be a compelling hook for advertisers, but they often come with deeply embedded disadvantages your campaign is paying for in other ways:</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">1. Frequency Cap Manipulation</h3>
                <p>Some providers artificially lower CPMs by bombarding the same users with excessive frequency (showing the same ad multiple times in a short period).</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>What it looks like: "Our CPM is only $8!"</li>
                    <li>The reality: Each user sees your ad 15+ times, creating annoyance rather than engagement</li>
                </ul>

                <h3 className="text-[31px] font-bold mt-6 mb-3">2. Rotator Overuse</h3>
                <p>Your ad gets placed into a "rotator" with other ads, which competes to display with dozens of others, reducing visibility and impact.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>What it looks like: "Premium placement at budget rates!"</li>
                    <li>The reality: Your ad rarely appears because it's competing with dozens of others</li>
                </ul>

                <h3 className="text-[31px] font-bold mt-6 mb-3">3. Liquidation Inventory "Layering"</h3>
                <p>Unsold inventory is disguised as premium content because your demand configuration "qualifies to monetize low-value impressions."</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">4. Crafty Placement Inventory Mix Masking</h3>
                <p>Your campaign runs across "premium networks, access to 'special placements'" leading your ads into directories away of junk sites and apps.</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">5. Shifting Viewability Metrics</h3>
                <p>Providers may change how they measure and report viewability that aren't fully captured in client-facing engagement reports.</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">6. Inflated Reach Claims</h3>
                <p>When reach values and hidden technology mix, we see a pattern that dramatically increase the actual cost of your campaign.</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">7. Targeting Loopholes</h3>
                <p>Advertisers may be handed less-than-optimal targeting parameters, technology, or campaign differentiation.</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">8. Auto-Optimization for Reach</h3>
                <p>Some platforms automatically optimize toward reach (quantity) rather than engagement or conversion (quality). This typically enables auto-fulfillment.</p>

                <h3 className="text-[31px] font-bold mt-6 mb-3">9. Excessive Inventory Level Flexibility</h3>
                <p>The platform makes accommodations without your consultation between the premium offer versus a poor campaign return.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">How to Spot the Bait-and-Switch</h2>
                <p>Protect your campaign by watching for these key red flags:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>CPMs far below market average (if it seems too good to be true, it probably is)</li>
                    <li>Limited or vague reporting on placement locations</li>
                    <li>Resistance to third-party verification or audience validation</li>
                    <li>Unclear frequency management policies</li>
                    <li>Contracts with minimal performance guarantees</li>
                </ul>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Smart OTT/CTV Budget Protection Tips</h2>
                <p>Follow these steps to safeguard your OTT/CTV ad spend:</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>Demand transparency in placement reporting</li>
                    <li>Set clear frequency caps (typically 2-3 exposures per user within a defined period)</li>
                    <li>Request detailed inventory breakdowns</li>
                    <li>Establish KPIs beyond just CPM efficiency</li>
                    <li>Implement third-party verification where possible</li>
                    <li>Start small and scale based on verified performance</li>
                    <li>Work with partners who offer transparent, performance-based pricing</li>
                </ol>

                <h2 className="text-[31px] font-bold mt-8 mb-4">A Partner You Can Trust: Fox and Top Stream Media</h2>
                <p>The key to successful OTT/CTV campaigns is transparency and control. Some Fox of the Media Pro, we embrace a partnership model focused on your business outcomes, not just media metrics. Our approach includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Complete inventory transparency with source-level reporting</li>
                    <li>Performance-based pricing aligned with your business goals</li>
                    <li>Regular optimization reviews and strategy adjustments</li>
                    <li>Advanced targeting without sacrificing quality</li>
                    <li>Verified premium placements with brand safety guarantees</li>
                </ul>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Final Thoughts</h2>
                <p>The allure of low CPMs in OTT/CTV advertising can be strong, but savvy marketers look beyond the price tag to the true value delivered. By recognizing the signs of bait-and-switch tactics and partnering with transparent providers, you can maximize both the efficiency and effectiveness of your streaming TV campaigns.</p>
                <p>Remember: In OTT/CTV advertising, the goal isn't just to secure the lowest CPM—it's to achieve the best return on your advertising investment.</p>
            </div>
        )
    },
    {
        id: "3",
        slug: "ott-vs-ctv-cable",
        title: "OTT (Over-The-Top) and CTV (Connected TV) vs. Cable and Broadcast TV",
        date: "Dec 8, 2024",
        description: "Discover how Fox Media Pro is revolutionizing the way we approach streaming technology.",
        image: "/blogs/ott-vs-ctv.png",
        content: (
            <div className="prose prose-lg prose-invert max-w-none">
                <p>The television landscape has undergone a dramatic transformation in recent years, with OTT and CTV platforms challenging the dominance of traditional cable and broadcast TV. Understanding the key differences and advantages of each medium is crucial for advertisers looking to optimize their media strategies.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Defining the Landscape</h2>
                <p><strong>OTT (Over-The-Top):</strong> Content delivered via the internet, bypassing traditional distribution methods. This includes streaming services like Netflix, Hulu, and HBO Max.</p>
                <p><strong>CTV (Connected TV):</strong> Television sets connected to the internet, either through built-in capabilities (Smart TVs) or external devices (Roku, Apple TV, etc.).</p>
                <p><strong>Cable TV:</strong> Content delivered through coaxial cable infrastructure, typically requiring a subscription to a cable provider.</p>
                <p><strong>Broadcast TV:</strong> Over-the-air television signals captured by an antenna, offering free access to local network affiliates.</p>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Key Advantages of OTT/CTV</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Advanced Targeting:</strong> Demographic, behavioral, and interest-based targeting capabilities</li>
                    <li><strong>Precision Measurement:</strong> Individual household and user-level measurement</li>
                    <li><strong>Engagement Tracking:</strong> View completion rates, interactive ad performance</li>
                    <li><strong>Flexibility:</strong> Various ad formats and lengths to suit campaign objectives</li>
                    <li><strong>Reaching Cord-Cutters:</strong> Access to audiences who have abandoned traditional TV</li>
                </ul>

                <h2 className="text-[31px] font-bold mt-8 mb-4">The Continuing Value of Traditional TV</h2>
                <ul className="list-disc pl-6 space-y-2">
                    <li><strong>Mass Reach:</strong> Still unmatched for simultaneous large audience exposure</li>
                    <li><strong>Brand Safety:</strong> Well-established content standards and regulation</li>
                    <li><strong>Live Event Dominance:</strong> Sports, awards shows, and breaking news</li>
                    <li><strong>Established Measurement:</strong> Familiar metrics and industry standards</li>
                </ul>

                <h2 className="text-[31px] font-bold mt-8 mb-4">Fox Media Pro's Integrated Approach</h2>
                <p>At Fox Media Pro, we recognize that the future of advertising lies in strategically combining the strengths of both traditional and streaming platforms. Our approach includes:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Cross-platform campaigns that leverage the unique strengths of each medium</li>
                    <li>Unified measurement frameworks that provide holistic campaign insights</li>
                    <li>Advanced audience matching to extend reach across viewing environments</li>
                    <li>Creative optimization tailored to each viewing context</li>
                </ul>

                <p>As the boundaries between traditional and digital TV continue to blur, our expertise in navigating this complex landscape helps advertisers achieve optimal results across the entire video ecosystem.</p>
            </div>
        )
    }
];

export default function BlogDetailPage() {
    const { slug } = useParams<{ slug: string }>();
    const [post, setPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    // Scroll to top when component mounts or slug changes
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [slug, location.pathname]);

    useEffect(() => {
        // Find the blog post by slug
        const foundPost = blogPosts.find(p => p.slug === slug);

        // Add a small delay to simulate network request
        const timer = setTimeout(() => {
            setPost(foundPost || null);
            setLoading(false);
        }, 300);

        return () => clearTimeout(timer);
    }, [slug]);

    if (loading) {
        return (
            <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (!post) {
        return (
            <div className="relative min-h-[calc(74vh-7.8px)] bg-black w-full flex flex-col items-center justify-center text-white pb-20 pt-48">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Blog Post Not Found</h1>
                    <p className="text-xl mb-8">The blog post you're looking for doesn't exist.</p>
                    <Link to="/blogs" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-lg">
                        Back to Blogs
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <>
            <div className="relative min-h-[calc(74vh-7.8px)] bg-black w-full flex flex-col items-center justify-center text-white pb-20 pt-48">
                <div className="container mx-auto px-8 md:px-4 max-w-6xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-8"
                    >
                        {/* Hero Section */}
                        <span className="text-[#AEAEAE] text-[16px] font-medium block mb-2">{post.date}</span>
                        <div>
                            <h1 className="text-[39px] font-bold mb-4 tracking-wider">{post.title}</h1>
                            <p className="text-[20px] text-[#AEAEAE]">{post.description}</p>
                        </div>

                        <img src={post.image} alt={post.title} className="w-full  md:h-[423px] rounded-[31px] object-cover" />

                        {/* Content Section */}
                        <div className="mb-16">
                            {post.content}
                        </div>

                        <Button
                            onClick={() => navigate('/blogs')}
                            size="sm" className="border border-white text-white bg-transparent text-[18px] md:py-5 px-8"
                        >
                            <svg className="w-4 h-4 mr-2 rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                            Back to Blogs
                        </Button>
                    </motion.div>
                </div>
            </div>
            <GetInTouch />
        </>
    );
} 