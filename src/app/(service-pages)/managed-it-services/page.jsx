import Image from 'next/image'
import { FiCheckCircle, FiShield, FiCloud, FiHeadphones, FiTrendingUp } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Link from 'next/link'
import Button from '@/components/Button'

export default function ManagedITPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            Managed IT Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Empowering Your Business with Expert IT Management
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            At Matchbest Software, we provide comprehensive Managed IT Services to ensure your business runs smoothly and securely. Our experts handle your IT infrastructure, security, and support, allowing you to focus on your core business operations.
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
                            Why Choose Our Managed IT Services?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiHeadphones className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "24/7 Monitoring & Support",
                                    description: "Proactive monitoring to detect and resolve issues before they impact your business."
                                },
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cost-Effective Solutions",
                                    description: "Reduce operational costs while improving efficiency with our tailored IT solutions."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Enhanced Security & Compliance",
                                    description: "Advanced security measures to protect against cyber threats and ensure regulatory compliance."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Scalable IT Infrastructure",
                                    description: "Flexible and scalable solutions that grow with your business needs."
                                },
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Expert IT Consultation",
                                    description: "Access to a team of experienced IT professionals for strategic planning and implementation."
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

            {/* Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Managed IT Services Include
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "IT Infrastructure Management",
                                    description: "Continuous monitoring of networks, servers, and cloud systems. Performance optimization and resource allocation. Hardware and software lifecycle management."
                                },
                                {
                                    title: "Cybersecurity & Data Protection",
                                    description: "Firewall and antivirus management. Data backup, disaster recovery, and incident response. Security audits and risk assessment."
                                },
                                {
                                    title: "Help Desk & Technical Support",
                                    description: "24/7 IT support for troubleshooting and issue resolution. Remote and on-site assistance for hardware and software. Dedicated IT support teams for businesses of all sizes."
                                },
                                {
                                    title: "Cloud Services & Migration",
                                    description: "Cloud-based infrastructure management (AWS, Azure, Google Cloud). Seamless migration to cloud environments. Cloud security, backups, and storage optimization."
                                },
                                {
                                    title: "IT Compliance & Risk Management",
                                    description: "Ensuring adherence to industry regulations (GDPR, HIPAA, ISO, etc.). Security policy implementation and training. Continuous monitoring and compliance audits."
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

            {/* Industries Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Industries We Serve
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🏦", title: "Finance & Banking" },
                                { icon: "🏥", title: "Healthcare" },
                                { icon: "🛒", title: "E-commerce & Retail" },
                                { icon: "🏭", title: "Manufacturing" },
                                { icon: "📊", title: "Corporate Enterprises" }
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
                            Get Started with Matchbest Software
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to transform your IT infrastructure? Contact us today to discuss your business needs.
                        </p>
                        <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div >
    )
}