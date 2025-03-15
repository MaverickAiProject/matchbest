import { FiCheckCircle, FiCloud, FiTrendingUp, FiShield, FiCode, FiBarChart } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Button from '@/components/Button'

export default function DigitalTransformationPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            Digital Transformation Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Transform Your Business with Cutting-Edge Digital Solutions
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            In today’s fast-paced digital world, businesses must adapt, innovate, and evolve to stay ahead of the competition. At Matchbest Software, we help organizations leverage the power of AI, cloud computing, automation, and data-driven insights to drive efficiency, improve customer experiences, and unlock new growth opportunities.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>

            {/* Why Digital Transformation Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Digital Transformation?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Enhance Efficiency",
                                    description: "Automate workflows, reduce manual efforts, and optimize processes."
                                },
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Improve Customer Experience",
                                    description: "Deliver seamless, personalized, and engaging digital interactions."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Increase Agility",
                                    description: "Adapt quickly to market changes with flexible and scalable solutions."
                                },
                                {
                                    icon: <FiBarChart className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Data-Driven Decision Making",
                                    description: "Gain valuable insights through analytics and AI-driven intelligence."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Competitive Advantage",
                                    description: "Stay ahead with innovative digital strategies and advanced technologies."
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

            {/* Our Digital Transformation Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Digital Transformation Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "AI & Automation",
                                    description: "Implement AI-driven chatbots, automate tasks with RPA, and optimize operations with AI-powered decision-making."
                                },
                                {
                                    title: "Cloud Adoption & Migration",
                                    description: "Migrate to AWS, Azure, or Google Cloud. Build scalable, cost-effective cloud-based applications."
                                },
                                {
                                    title: "Enterprise Software Solutions",
                                    description: "Custom ERP, CRM, and HRM systems for better business management and collaboration."
                                },
                                {
                                    title: "Data Analytics & Business Intelligence",
                                    description: "Harness Big Data, AI, and Machine Learning for real-time insights and predictive analytics."
                                },
                                {
                                    title: "Cybersecurity & Risk Management",
                                    description: "Secure your data and networks with zero-trust security and AI-powered threat detection."
                                },
                                {
                                    title: "Digital Marketing & Customer Engagement",
                                    description: "Develop personalized marketing strategies with AI-driven insights and CRM integrations."
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

            {/* Industries We Empower Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Industries We Empower
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🏦", title: "Finance & Banking" },
                                { icon: "🛒", title: "Retail & E-commerce" },
                                { icon: "🏥", title: "Healthcare" },
                                { icon: "🏭", title: "Manufacturing & Logistics" },
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
                            Start Your Digital Transformation with Matchbest Software
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to future-proof your business with cutting-edge technology? Let’s build a digital-first strategy together!
                        </p>
                        <Button />
                    </div>
                </div>
            </section>
        </div>
    )
}