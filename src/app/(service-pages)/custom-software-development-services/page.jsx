import { FiCheckCircle, FiCode, FiCloud, FiTrendingUp, FiShield, FiDatabase } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Button from '@/components/Button'

export default function CustomSoftwareDevelopmentPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            Custom Software Development Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Innovative, Scalable & Future-Ready Solutions
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            In today’s fast-paced digital world, custom software solutions are essential for businesses looking to streamline operations, improve efficiency, and stay ahead of the competition. At Matchbest Software, we specialize in building custom, scalable, and high-performance software solutions tailored to your business needs.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Choose Matchbest Software for Software Development?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Custom-Tailored Solutions",
                                    description: "Built specifically for your business needs."
                                },
                                {
                                    icon: <FiCode className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cutting-Edge Technologies",
                                    description: "AI, Cloud, Blockchain, and more."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Secure & Scalable",
                                    description: "Ensuring long-term performance and security."
                                },
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Agile Development Approach",
                                    description: "Faster deployment and continuous improvements."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "End-to-End Support",
                                    description: "From planning to post-launch maintenance."
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

            {/* Our Software Development Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Software Development Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Custom Software Development",
                                    description: "Enterprise solutions, SaaS platforms, CRM & ERP systems, and supply chain management tools."
                                },
                                {
                                    title: "Web Application Development",
                                    description: "Progressive Web Apps (PWAs), cloud-based web apps, and full-stack development."
                                },
                                {
                                    title: "AI & Automation Software",
                                    description: "AI-powered business tools, machine learning solutions, and NLP-driven automation."
                                },
                                {
                                    title: "Mobile Application Development",
                                    description: "Cross-platform and native apps for iOS and Android, business apps, and e-commerce solutions."
                                },
                                {
                                    title: "Cloud-Based Software Development",
                                    description: "Cloud migration, microservices, serverless architecture, and secure cloud solutions."
                                },
                                {
                                    title: "Software Maintenance & Support",
                                    description: "Performance optimization, feature enhancements, and security updates."
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
                                { icon: "🛍", title: "Retail & E-Commerce" },
                                { icon: "🚀", title: "Startups & SaaS" },
                                { icon: "🏥", title: "Healthcare" },
                                { icon: "🎓", title: "Education & E-Learning" }
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
                            Let’s Build Your Next Software Solution!
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Whether you need enterprise software, AI-driven automation, or cloud solutions, Matchbest Software is here to turn your vision into reality.
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