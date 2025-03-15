import Button from '@/components/Button'
import LayoutProvider from '@/components/layout/LayoutProvider'
import { FiUsers, FiBriefcase, FiGlobe, FiPlus, FiStar } from 'react-icons/fi'

export default function ITStaffingPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className="relative pt-28 pb-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            IT Staffing Solutions
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Hire Top IT Talent with Matchbest Software
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            Finding the right IT professionals for your business can be challenging. At Matchbest Software, we provide IT staffing solutions to help companies scale their workforce with skilled, experienced, and reliable IT professionals.
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
                            Why Choose Our IT Staffing Services?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { icon: <FiUsers className="w-12 h-12 mb-4 text-[#B372CF]" />, title: "Access to Top Talent", description: "Vast pool of pre-vetted IT professionals" },
                                { icon: <FiBriefcase className="w-12 h-12 mb-4 text-[#B372CF]" />, title: "Cost-Effective Hiring", description: "Reduce recruitment time and costs" },
                                { icon: <FiGlobe className="w-12 h-12 mb-4 text-[#B372CF]" />, title: "Flexible Models", description: "Contract, full-time, remote, or on-site" },
                                { icon: <FiStar className="w-12 h-12 mb-4 text-[#B372CF]" />, title: "Industry Expertise", description: "Specialists in various tech domains" },
                                { icon: <FiPlus className="w-12 h-12 mb-4 text-[#B372CF]" />, title: "Quick Turnaround", description: "Fast hiring for urgent needs" }
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
                            Our IT Staffing Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                { title: "Contract Staffing", description: "Short-term & long-term contract professionals for project-based work" },
                                { title: "Permanent Hiring", description: "Full-time IT recruitment with cultural fit assessment" },
                                { title: "Remote Staffing", description: "Global talent access with performance tracking" },
                                { title: "Team Augmentation", description: "Scale your team flexibly with expert resources" },
                                { title: "Executive Hiring", description: "CTOs, IT managers, and tech leadership recruitment" }
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

            {/* Expertise Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our IT Talent Expertise
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {[
                                { icon: "👨‍💻", title: "Software Developers" },
                                { icon: "📊", title: "Data Scientists" },
                                { icon: "🔒", title: "Cybersecurity" },
                                { icon: "☁️", title: "Cloud Engineers" },
                                { icon: "🖥️", title: "DevOps" },
                                { icon: "📱", title: "UI/UX Designers" }
                            ].map((item, index) => (
                                <div key={index} className="p-6 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="text-lg font-semibold text-[#B372CF]">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Process Section */}
            <section className="pt-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our IT Staffing Process
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                            {[
                                { step: "🔹", title: "Requirement Analysis", description: "Understand your needs" },
                                { step: "🔹", title: "Talent Sourcing", description: "Screen & shortlist" },
                                { step: "🔹", title: "Interview Process", description: "Skill assessments" },
                                { step: "🔹", title: "Onboarding", description: "Smooth integration" },
                                { step: "🔹", title: "Ongoing Support", description: "Performance monitoring" }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.step}</div>
                                    <h3 className="text-xl font-semibold text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* CTA Section */}
            <section className="pb-20 pt-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                                Hire the Best IT Talent
                            </h2>
                            <p className="text-xl text-gray-300 mb-8">
                                Need skilled IT professionals for your business? We're here to help!
                            </p>
                            <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                                Get Started
                            </Button>
                        </div>
                    </div>
                </LayoutProvider>
            </section>
        </div>
    )
}