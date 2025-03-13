import Button from '@/components/Button'
import { FiCloud, FiDatabase, FiShield, FiTrendingUp, FiSettings } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'

export default function CloudMigrationPage() {
    return (
        <div className="space-y-10 pb-7 pt-12">
            {/* Hero Section */}
            <section className="relative pt-28 pb-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            Cloud Migration Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Seamlessly Transition to the Cloud with Matchbest Software
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            In today's digital landscape, cloud computing is no longer an option—it’s a necessity. At Matchbest Software, we help businesses migrate to the cloud efficiently, securely, and with minimal disruption. Whether you're moving from on-premise infrastructure or shifting between cloud providers, our cloud migration services ensure a smooth and cost-effective transition.
                        </p>
                        <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                            Get Started
                        </Button>
                    </div>
                </div>
            </section>

            {/* Why Move to the Cloud Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Move to the Cloud?
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Scalability",
                                    description: "Easily expand or downsize based on your needs."
                                },
                                {
                                    icon: <FiCloud className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cost Efficiency",
                                    description: "Reduce infrastructure and maintenance costs."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Security & Compliance",
                                    description: "Robust security measures and regulatory compliance."
                                },
                                {
                                    icon: <FiSettings className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Improved Performance",
                                    description: "Faster data processing and reduced downtime."
                                },
                                {
                                    icon: <FiDatabase className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Remote Accessibility",
                                    description: "Work from anywhere with cloud-based applications."
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
                            Our Cloud Migration Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Cloud Strategy & Assessment",
                                    description: "Evaluating your current infrastructure and defining a cloud roadmap. Selecting the best cloud model (Public, Private, or Hybrid Cloud). Cost-benefit analysis and risk assessment."
                                },
                                {
                                    title: "Cloud Platform Migration",
                                    description: "Infrastructure Migration – Shifting servers, databases, and storage to the cloud. Application Migration – Moving apps to cloud-native environments. Database Migration – Secure migration of databases to cloud platforms like AWS RDS, Azure SQL, or Google Cloud SQL."
                                },
                                {
                                    title: "Hybrid & Multi-Cloud Solutions",
                                    description: "Integrating cloud services with on-premise infrastructure. Implementing multi-cloud strategies for flexibility and redundancy. Ensuring seamless interoperability between different cloud environments."
                                },
                                {
                                    title: "Security & Compliance",
                                    description: "Implementing cloud security best practices. Data encryption, access control, and threat monitoring. Ensuring GDPR, HIPAA, ISO 27001, and other regulatory compliance."
                                },
                                {
                                    title: "Cloud Optimization & Cost Management",
                                    description: "Performance tuning for cloud applications. Resource allocation and cost optimization strategies. Ongoing monitoring and maintenance to reduce cloud spending."
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

            {/* Migration Process Section */}
            <section className="pt-20 pb-24 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Cloud Migration Process
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🔹", title: "Assessment & Planning", description: "Analyzing your existing infrastructure and defining migration goals." },
                                { icon: "🔹", title: "Migration Strategy", description: "Choosing the right cloud migration approach (Lift & Shift, Replatforming, or Refactoring)." },
                                { icon: "🔹", title: "Implementation", description: "Seamless execution of the migration plan with minimal downtime." },
                                { icon: "🔹", title: "Testing & Optimization", description: "Ensuring application performance and security." },
                                { icon: "🔹", title: "Support & Maintenance", description: "Continuous monitoring and post-migration support." }
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

            {/* Cloud Platforms Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Cloud Platforms We Work With
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                            {[
                                { icon: "☁️", title: "Amazon Web Services (AWS)", description: "Scalable and secure cloud solutions." },
                                { icon: "☁️", title: "Microsoft Azure", description: "Enterprise-grade cloud computing." },
                                { icon: "☁️", title: "Google Cloud Platform (GCP)", description: "High-performance cloud infrastructure." },
                                { icon: "☁️", title: "IBM Cloud & Oracle Cloud", description: "Custom solutions for businesses." }
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
            <section className="pt-20 pb-24 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Industries Benefiting from Cloud Migration
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🏦", title: "Finance & Banking" },
                                { icon: "🛍️", title: "E-commerce & Retail" },
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
            <section className="pb-20 pt-10">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Future-Proof Your Business with Cloud Migration
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Ready to harness the power of the cloud? Let us help you transition smoothly!
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