import { FiCheckCircle, FiCloud, FiShield, FiTrendingUp, FiServer, FiHeadphones } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Button from '@/components/Button'

export default function ITConsultingPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            IT Consulting Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Strategic IT Solutions for Business Growth
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            In today’s digital era, businesses must leverage technology to stay competitive. Matchbest Software offers expert IT consulting services to help organizations optimize technology, improve security, and drive digital transformation.
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
                            Why Choose Matchbest Software for IT Consulting?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Tailored IT Strategies",
                                    description: "Custom solutions based on your business needs."
                                },
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Expert Technology Guidance",
                                    description: "Leverage AI, Cloud, and Automation effectively."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cost-Effective Solutions",
                                    description: "Reduce IT expenses while maximizing ROI."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Scalable & Future-Ready",
                                    description: "IT solutions designed for long-term growth."
                                },
                                {
                                    icon: <FiHeadphones className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "End-to-End Support",
                                    description: "From IT planning to execution and monitoring."
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

            {/* Our IT Consulting Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our IT Consulting Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "IT Strategy & Digital Transformation Consulting",
                                    description: "IT roadmap development, digital transformation, and technology assessments."
                                },
                                {
                                    title: "Cloud Consulting & Migration",
                                    description: "Cloud strategy, migration planning, and security compliance."
                                },
                                {
                                    title: "Cybersecurity Consulting",
                                    description: "Risk assessment, penetration testing, and identity management."
                                },
                                {
                                    title: "IT Infrastructure & Network Consulting",
                                    description: "Network optimization, infrastructure modernization, and server management."
                                },
                                {
                                    title: "IT Support & Managed Services Consulting",
                                    description: "IT helpdesk, proactive monitoring, and disaster recovery planning."
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
                                { icon: "🏥", title: "Healthcare & Pharmaceuticals" },
                                { icon: "📦", title: "Retail & E-Commerce" },
                                { icon: "🚀", title: "Startups & SMBs" },
                                { icon: "🏢", title: "Enterprise & Corporate" }
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
                            Get Expert IT Consulting Today!
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Whether you need strategic IT planning, cybersecurity solutions, or cloud transformation, Matchbest Software is here to guide you.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>
        </div>
    )
}