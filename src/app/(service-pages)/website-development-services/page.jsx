import { FiCheckCircle, FiGlobe, FiShoppingCart, FiCode, FiLayout, FiZap, FiShield } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Button from '@/components/Button'

export default function WebsiteDevelopmentPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            Website Development Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Build a Powerful Online Presence with Matchbest Software
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            A high-performing website is the foundation of your digital success. Whether you need a sleek business website, an interactive web application, or an advanced e-commerce platform, Matchbest Software delivers custom, scalable, and SEO-friendly web solutions that drive growth and engagement.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>

            {/* Why Invest in Professional Website Development Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Invest in Professional Website Development?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "First Impressions Matter",
                                    description: "A well-designed website builds trust and credibility."
                                },
                                {
                                    icon: <FiGlobe className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Better User Experience (UX)",
                                    description: "Optimized layouts ensure smooth navigation and interaction."
                                },
                                {
                                    icon: <FiZap className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "SEO & Performance Optimization",
                                    description: "Rank higher on Google and improve site speed."
                                },
                                {
                                    icon: <FiLayout className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Mobile-Friendly & Responsive",
                                    description: "Your website will look perfect on all devices."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Secure & Scalable",
                                    description: "Future-proof architecture with top-notch security measures."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Our Website Development Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Website Development Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Custom Website Development",
                                    description: "Tailor-made business websites, portfolio sites, and landing pages. Unique designs that align with your brand identity."
                                },
                                {
                                    title: "E-Commerce Website Development",
                                    description: "Build your online store with Shopify, WooCommerce, or custom solutions. Integrated payment gateways and SEO-friendly designs."
                                },
                                {
                                    title: "Web Application Development",
                                    description: "Custom-built SaaS platforms, dashboards, and portals. Scalable and cloud-based applications with seamless user experiences."
                                },
                                {
                                    title: "CMS-Based Website Development",
                                    description: "Websites built on WordPress, Webflow, Drupal, and more. Easy-to-use content management systems for non-technical users."
                                },
                                {
                                    title: "UI/UX Design & Prototyping",
                                    description: "User-friendly and visually stunning web interfaces. Wireframes and mockups before full development."
                                },
                                {
                                    title: "Website Optimization & Maintenance",
                                    description: "Improve loading speed and website performance. Regular updates, security patches, and bug fixes."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors">
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Industries We Serve
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🏦", title: "Finance & Banking" },
                                { icon: "🛒", title: "E-commerce & Retail" },
                                { icon: "🏥", title: "Healthcare" },
                                { icon: "🎓", title: "Education & E-Learning" },
                                { icon: "🚀", title: "Startups & Tech Firms" }
                            ].map((item, index) => (
                                <div key={index} className="sm:p-8 p-2 py-6 sm:py-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="sm:text-xl text-base font-semibold text-[#B372CF]">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* CTA Section */}
            <section className="pb-20 pt-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Let’s Build Your Dream Website Today!
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Whether you need a business website, e-commerce store, or web application, Matchbest Software is here to bring your vision to life.
                        </p>
                        <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}