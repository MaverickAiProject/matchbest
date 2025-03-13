import Button from '@/components/Button'
import LayoutProvider from '@/components/layout/LayoutProvider'
import { FiCheckCircle, FiCloud, FiCode, FiDatabase, FiCpu } from 'react-icons/fi'

export default function SystemIntegrationPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className="relative pt-28 pb-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-abcd">
                            System Integration Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Seamless Integration for Maximum Efficiency
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            At Matchbest Software, we provide expert system integration services to help businesses streamline their operations by connecting various applications, platforms, and IT infrastructures into a unified system. Our goal is to enhance efficiency, eliminate data silos, and ensure seamless communication between your systems.
                        </p>
                        <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why System Integration is Essential Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why System Integration is Essential?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Enhanced Efficiency",
                                    description: "Automate workflows and reduce manual tasks."
                                },
                                {
                                    icon: <FiDatabase className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Improved Data Accuracy",
                                    description: "Real-time data synchronization across platforms."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Scalability",
                                    description: "Easily expand and integrate new technologies."
                                },
                                {
                                    icon: <FiCode className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cost Savings",
                                    description: "Reduce operational costs with optimized processes."
                                },
                                {
                                    icon: <FiCpu className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Better Decision-Making",
                                    description: "Gain deeper insights with centralized data."
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
            <section className="pb-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our System Integration Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "API Integration",
                                    description: "Connecting third-party APIs for smooth data exchange. Secure and efficient API development and integration. RESTful, GraphQL, and SOAP-based API solutions."
                                },
                                {
                                    title: "Cloud Integration",
                                    description: "Migrate and integrate cloud services (AWS, Azure, Google Cloud). Hybrid cloud and multi-cloud integration strategies. Cloud-native application development."
                                },
                                {
                                    title: "Enterprise Application Integration (EAI)",
                                    description: "Unifying business applications like CRM, ERP, HRMS, and more. Middleware solutions for seamless communication between systems. Scalable and flexible integration frameworks."
                                },
                                {
                                    title: "Data Integration & ETL Services",
                                    description: "Centralized data processing for analytics and reporting. Data warehousing and transformation solutions. ETL (Extract, Transform, Load) pipeline development."
                                },
                                {
                                    title: "IoT & Device Integration",
                                    description: "Connecting smart devices, sensors, and IoT platforms. Secure data transmission and monitoring solutions. Industrial IoT (IIoT) for smart manufacturing and automation."
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

            {/* Approach Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Approach to System Integration
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🔹", title: "Assessment & Planning", description: "Understanding your business needs and existing infrastructure." },
                                { icon: "🔹", title: "Solution Design", description: "Crafting a custom integration strategy." },
                                { icon: "🔹", title: "Development & Implementation", description: "Seamless execution of integration solutions." },
                                { icon: "🔹", title: "Testing & Optimization", description: "Ensuring high performance and security." },
                                { icon: "🔹", title: "Support & Maintenance", description: "Continuous monitoring and updates." }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Industries Section */}
            <section className="pb-8">
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
                                { icon: "🏭", title: "Manufacturing & Logistics" },
                                { icon: "📡", title: "Telecommunications" }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-semibold text-[#B372CF]">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* CTA Section */}
            <section className="pb-24">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Transform Your Business with Seamless Integration
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to unify your business systems for maximum efficiency? Let’s get started!
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