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
        "id": "1",
        "slug": "ego-buy-challenge",
        "title": "How We Help You Overcome the \"Ego Buy\" Challenge in OTT/CTV Advertising",
        "date": "Dec 8, 2024",
        "description": "Discover how we tackle the \"ego buy\" in targeted advertising, offering solutions for both visibility and ROI.",
        "image": "/blogs/ego-buy.png",
        "content": (
            <div className="prose prose-lg prose-invert max-w-none">
                <p>In traditional TV advertising, its common for advertisers to hear from friends or family who saw their ad. This feedback creates a sense of visibility and reassurance—what we in the industry call the “ego buy” effect: However, OTT and CTV advertising operate differently, focusing on precision targeting. This means your ad reaches the right audience, not necessarily your immediate circle.</p>
                <p>While this targeted approach drives results, it can leave you wondering if your ad is being noticed. That’s where we come in. Here’s how we help you overcome the ego buy challenge and confidently embrace the power of OTT/CTV:</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">1. We Replace Ego Metrics with Hard Data</h2>
                <p>Instead of relying on anecdotal feedback, we provide detailed reports that show:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Impressions Delivered. How often your ad is shown to your target audience.</li>
                    <li>Engagement Metrics: Insights like click-through rates, website visits, and calls.</li>
                    <li>Attribution Date: Proof of how your ad drives real-world results, such as purchases or inquiries.</li>
                </ul>
                <p>What This Means for You?</p>
                <p>You’ll have clear, actionable evidence that your ad is being seen by the people who matter most—your potential customers.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">2. We Offer “Visibility Placements” for Ego Buy Reassurance</h2>
                <p>If feedback from friends and family is important to you, we can allocate a small portion of your budget for broad, untargeted placements. These ads ensure your personal circle has a chance to see your campaign, while the rest of the budget remains laser-focused on your target audience. What This Means for You?</p>
                <p>You get the best of both worlds: personal recognition and business results.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">3. We Educate You on the Power of Precision</h2>
                <p>Our team will work with you to reframe your perspective on visibility. Here’s how we explain it:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Targeted Advertising = Smarter Advertising: Imagine a billboard that only appears to drivers who need your service. That’s OTT/CTV in action.</li>
                    <li>Ego Buy vs. ROI: Would you rather everyone see your ad—or just the people who are ready to convert?</li>
                </ul>
                <p>What This Means for You?</p>
                <p>You’ll understand the value of targeting and why reaching your ideal customer is more effective than general visibility.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">4. We Leverage Social Proof for Personal Visibility</h2>
                <p>Want your friends and family to see your ad? Well help you repurpose your campaign for social media or other public-facing channels. By sharing your ad on platforms like Instagram, Facebook, or LinkedIn, you can engage your personal network while keeping your CTV/OTT strategy focused on conversions.</p>
                <p>What This Means for You?</p>
                <p>You’ll satisfy the ego buy reset without compromising your campaign’s precision and ROI.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">5. We Help You Shift the Focus to What Matters</h2>
                <p>At the end of the day, your ad’s success isn’t defined by who sees it—it’s defined by the results it generates. With OTT/CTV, you’re targeting the right audience in the right way, ensuring your dollars are spent effectively. We’ll keep your campaign aligned with your business goals so you can:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Reach the right customers.</li>
                    <li>Generate meaningful actions.</li>
                    <li>Maximize every dollar spent.</li>
                </ul>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">Why Choose Us?</h2>
                <p>We understand that transitioning to OTT/CTV requires more than just a shift in technology—it requires a shift in mindset. That’s why we’re here to guide you every step of the way.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Transparent results: Detailed reports showing exactly how your ad performs.</li>
                    <li>Tailored Solutions: Flotonic options to address your business and personal visibility needs.</li>
                    <li>Expert Support: Education and insights to help you feel confident in every campaign.</li>
                </ul>
                <p>Ego Metrics vs. Business Results: The Choice is Yours</p>
                <p>OTT and CTV are designed to deliver results where it matters most—your bottom line. With our tools, transparency, and expertise, we’ll help you navigate the ego buy challenge and unlock the full potential of targeted advertising.</p>
            </div>
        )
    },
    {
        "id": "2",
        "slug": "bait-and-switch",
        "title": "The Bait-and-Switch in OTT/CTV Advertising - How to Protect Your Budget and Maximize ROI",
        "date": "Nov 27, 2024",
        "description": "Explore the hidden traps in low-CPM offers",
        "image": "/blogs/bait-switch.png",
        "content": (
            <div className="prose prose-lg prose-invert max-w-none">
                <p className="mb-4">In the fast-paced world of over-the-top (OTT) and connected TV (CTV) advertising, low cost-per-thousand-impressions (CPM) offers are everywhere. On the surface, these deals seem like the perfect way to stretch your ad budget further. But beneath the enticing promise of low costs lies a host of pitfalls that can erode your campaigns effectiveness.</p>
                <p>This blog will explore the hidden traps in low-CPM offers, the bait-and-switch tactics companies use to exploit uninformed buyers, and how savvy media buyers can protect their investments and get the best value for their campaigns.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">The Allure of Low CPMs and the Hidden Costs</h2>
                <p>Low CPMs can be a compelling hook for advertisers, but they often come with strings attached that compromise your campaigns success. Here are some of the most common ways companies bait buyers and switch on delivery:</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">1. Frequency Cap Manipulation</h3>
                <p>Ads shown too often to the same viewers lead to fatigue and wasted impressions. Companies offering low CPMs may remove or severely limit frequency caps to artificially inflate impression counts.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">2. Rotator Overuse</h3>
                <p>Instead of guaranteed premium placements, your ads might compete in rotators with dozens of others, reducing visibility and impact. This shotgun approach diminishes targeting precision and ROI.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">3. Unqualified Audience Targeting</h3>
                <p>Low CPMs are often achieved by expanding audience criteria beyond your desired demographic, leading to irrelevant impressions and wasted spend.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">4. Selling Remnant Inventory as Premium</h3>
                <p>Some providers disguise low-quality or leftover ad slots as "premium placements," leaving you with ads delivered during off-peak times or in low-engagement content.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">5. Blurring Viewability Metrics</h3>
                <p>Providers may inflate metrics by counting impressions that aren't fully viewable, such as ads skipped or closed before engagement, making performance appear better than it is.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">6. Hidden Fees</h3>
                <p>Low CPMs often come with hidden technology, service, or platform fees that significantly increase the actual cost of your campaign.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">7. Bundling Low-Performing Inventory</h3>
                <p>Premium slots may be bundled with low-performing placements, reducing overall campaign effectiveness.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">8. Lack of Transparency in Reporting</h3>
                <p>Without detailed reporting, you can't verify whether ads were delivered to the right audience or in the promised context. This opacity enables sellers to cut corners.</p>
    
                <h3 className="text-[31px] font-bold mt-6 mb-3">9. Exclusive Contracts with Limited Flexibility</h3>
                <p>Locking you into long-term commitments without room for optimization ensures the provider wins—even if your campaign doesn't.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">How to Spot the Bait-and-Switch</h2>
                <p className="mb-4">Recognizing these tactics requires vigilance and the right questions. As a media buyer, always look deeper than CPM rates and demand transparency. Key red flags include:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Limited or vague reporting on campaign performance.</li>
                    <li>An overemphasis on CPM without discussion of other key metrics.</li>
                    <li>Generalized audience targeting that lacks specificity.</li>
                    <li>Contracts that require significant upfront commitments without flexibility.</li>
                </ul>
    
                <h2 className="mt-8 mb-4">Smart OTT/CTV Buying: Protecting Your Budget</h2>
                <p className="mb-4">To avoid these traps and maximize the return on your OTT/CTV ad spend, follow these best practices:</p>
                <ol className="list-decimal pl-6 space-y-2">
                    <li>Demand Full Transparency<br />Work only with providers who offer detailed reporting on audience demographics, viewability, and engagement. Transparency ensures accountability and allows for optimization.</li>
                    <li>Focus on ROI, NOI Just CPM<br />Low CPM means little if it doesn’t drive results. Evaluate campaigns based on metrics like cost-per-acquisition (CPA), brand lift, or conversion rates.</li>
                    <li>Enforce Frequency Caps<br />Negotiate frequency caps to ensure your audience sees your ad enough to drive action, but not so often that it causes fatigue or frustration.</li>
                    <li>Prioritize Premium Placements<br />Opt for pinpoint placements over rotators, ensuring your ad appears in high-quality content that aligns with your brand and audience.</li>
                    <li>Leverage Advanced Targeting<br />Use customizable filters to refine your audience based on demographics, geography, and interests. Avoid broad targeting that inflates impressions but lacks relevance.</li>
                    <li>Insist on Post-Buy Analysis<br />Post-buy reporting verifies whether a campaign delivered on its promises, ensuring impressions were served to the right audience under the agreed-upon conditions.</li>
                    <li>Test Before You Commits<br />Start with small budgets to assess the provider’s delivery and results before scaling up your spend or signing long-term contracts.</li>
                </ol>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">A Partner You Can Trust: Bruce Fox and Top Stream Media</h2>
                <p className="mb-6">The key to successful OTT/CTV campaigns lies in choosing the right partner. Bruce Fox of Fox Media Pro, for example, is a seasoned media professional with decades of experience negotiating advertising deals. Bruce uses Top Stream Media as his trusted OTT/CTV source. Top Stream Media eliminates middleman fees and prioritizes transparency, offering:</p>
                <ul className="list-disc pl-6 space-y-2 mb-6">
                    <li>Customizable targeting to ensure precise audience reach.</li>
                    <li>Pinpoint ad placements for maximum relevance and impact.</li>
                    <li>Comprehensive reporting to track performance and optimize campaigns.</li>
                    <li>Post-buy guarantees to ensure your campaign delivers results.</li>
                </ul>
                <p>By working with Bruce Fox and leveraging Top Stream Media’s innovative platform, you can avoid bait-and -switch tactics and deliver campaigns that resonate with your audience and drive ROI.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">Final Thoughts</h2>
                <p className="mb-6">The allure of low CPMs in OTT/CTV advertising can be hard to resist, but the hidden costs often outweigh the benefits. By recognizing bait-and -switch tactics and focusing on transparency, targeting, and meaningful metrics, you can safeguard your ad spend and deliver campaigns that drive real results.</p>
                <p>Remember, it’s not about spending less – it’s about spending smarter. With the expertise of partners like Bruce Fox and Top Stream Media, your OTT/CTV campaigns can become a cornerstone of your advertising success.</p>
            </div>
        )
    },
    {
        "id": "3",
        "slug": "ott-vs-ctv-cable",
        "title": "OTT (Over-The-Top) and CTV (Connected TV) vs. Cable and Broadcast TV",
        "date": "Dec 8, 2024",
        "description": "Discover how Fox Media Pro is revolutionizing the way we approach streaming technology.",
        "image": "/blogs/ott-vs-ctv.png",
        "content": (
            <div className="prose prose-lg prose-invert max-w-none">
                <p>In traditional TV advertising, the common for advertisers to hear from friends or family who saw their aid. This feedback creates a sense of visibility and reassurance—what we in the industry call the “ego buy” effect. However, OTT and CTV advertising operate differently, focusing on precision targeting. This means your ad reaches the right audience, not necessarily your immediate circle.</p>
    
                <p>While this targeted approach drives results, it can leave you wondering if your ad is being noticed. That’s where we come in. Here’s how we help you overcome the ego buy challenge and confidently embrace the power of OT/CTV:</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">1. We Replace Ego Metrics with Hard Data</h2>
                <p>Instead of relying on anecdotal feedback, we provide detailed reports that show:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Impressions Delivered: How often your ad is shown to your target audience.</li>
                    <li>Engagement Metrics: Insights like click-through rates, website visits, and calls.</li>
                    <li>Attribution Data: Proof of how your ad drives real-world results, such as purchases or inquiries.</li>
                </ul>
                <p>What This Means for You?</p>
                <p>You’ll have clear, actionable evidence that your ad is being seen by the people who matter most—your potential customers.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">2. We Offer “Visibility Placements” for Ego Buy Reassurance</h2>
                <p>If feedback from friends and family is important to you, we can allocate a small portion of your budget for broad, untargeted placements. These ads ensure your personal circle has a chance to see your campaign, while the rest of the budget remains laser-focused on your target audience. What This Means for You?</p>
                <p>You get the least of both words: personal recognition and business results.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">3. We Educate You on the Power of Precision</h2>
                <p>Our team will work with you to reframe your perspective on visibility. Here’s how we explain it:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Targeted Advertising = Smarter Advertising: Imagine a billboard that only appears to drivers who need your service. That’s OT/CTV in action.</li>
                    <li>Ego Buy vs. ROI: Would you rather everyone see your ad—or just the people who are ready to convert?</li>
                </ul>
                <p>What This Means for You?</p>
                <p>You’ll understand the value of targeting and why reaching your ideal customer is more effective than general visibility.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">4. We Leverage Social Proof for Personal Visibility</h2>
                <p>Want your friends and family to see your ad? We’ll help you repurpose your campaign for social media or other public-facing channels. By sharing your ad on platforms like Instagram, Facebook, or LinkedIn, you can engage your personal network while keeping your CTV/OTT strategy focused on conversations.</p>
                <p>What This Means for You?</p>
                <p>You’ll satisfy the ego buy need without compromising your campaigns precision and ROI.</p>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">5. We Help You Shift the Focus to What Matters</h2>
                <p>At the end of the day, your ad’s success isn’t defined by who sees it—it’s defined by the results it generates. With OT/CTV, you’re targeting the right audience in the right way, ensuring your dollars are spent effectively. We’ll keep your campaign aligned with your business goals so you can:</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Reach the right customers.</li>
                    <li>Generate meaningful actions.</li>
                    <li>Maximize every dollar spent.</li>
                </ul>
    
                <h2 className="text-[31px] font-bold mt-8 mb-4">Why Choose Us?</h2>
                <p>We understand that transitioning to OT/CTV requires more than just a shift in technology—it requires a shift in mindset. That’s why we’re here to guide you every step of the way.</p>
                <ul className="list-disc pl-6 space-y-2">
                    <li>Transparent Results: Detailed reports showing exactly how your ad performs.</li>
                    <li>Tailored Solutions: Flexible options or address your business and personal visibility needs.</li>
                    <li>Expert Support: Education and insights to help you feel confident in every campaign.</li>
                </ul>
    
                <p>Ego Metrics vs. Business Results: The Choice Is Yours</p>
                <p>OTT and CTV are designed to deliver results where it matters most—your bottom line. With our tools, transparency, and expertise, we’ll help you navigate the ego buy challenge and unlock the full potential of targeted advertising.</p>
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
                            size="sm" className="border border-white text-white bg-transparent text-[14px] px-8 h-[40px]"
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