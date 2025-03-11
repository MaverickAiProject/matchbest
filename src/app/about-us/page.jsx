import React from 'react'
import { Button } from '@/components/ui/button'
import { FiCheckCircle, FiUsers, FiSettings, FiTrendingUp } from 'react-icons/fi'
import Image from 'next/image'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Link from 'next/link'

export default function AboutPage() {
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-14 sm:pt-24">
            <LayoutProvider>
                <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-12 py-20">
                    {/* Text Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold mb-4 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Who We Are
                        </h1>
                        <p className="text-lg sm:text-lg text-gray-300 mb-10 max-w-2xl mx-auto md:mx-0 leading-relaxed">
                            Matchbest Software is a trusted IT solutions provider specializing in Managed IT Services, IT Development, Solution Integration, Process Improvement Software, and IT Staffing. Our goal is to help businesses leverage technology to improve efficiency, security, and growth.
                        </p>
                        <Link href={"/contact-us"}>
                            <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-10 py-5 text-lg font-semibold hover:shadow-lg hover:shadow-[#B372CF]/20 transition-all">
                                Contact Us
                            </Button>
                        </Link>
                    </div>

                    {/* Image Content */}
                    <div className="flex-1 flex justify-center relative">
                        <div className="relative w-full max-w-md">
                            <Image
                                src="/about1.png"
                                alt="Who We Are"
                                width={600}
                                height={600}
                                className="object-cover rounded-3xl shadow-2xl z-10 relative"
                            />

                            {/* Background Glow Effect */}
                            <div className="absolute -inset-8 bg-[radial-gradient(#B372CF_20%,transparent_60%)] blur-3xl rounded-full opacity-40 animate-pulse" />

                            {/* Floating Elements */}
                            <div className="absolute -top-8 -right-8 w-24 h-24 bg-[#472283]/30 rounded-full blur-xl" />
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#B372CF]/20 rounded-full blur-xl" />
                        </div>
                    </div>
                </div>

                {/* Mission Section */}
                <section className="py-20 bg-[#0F0722] bg-opacity-80 rounded-[50px] mt-10">
                    <div className="container mx-auto px-4">
                        <div className="max-w-4xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                                Our Mission
                            </h2>
                            <p className="text-lg sm:text-xl text-gray-300 mb-8">
                                We aim to deliver reliable and scalable IT solutions that empower businesses to stay ahead in a fast-evolving digital landscape. With a team of skilled professionals, we deliver customized, scalable, and secure IT services tailored to your needs. Our commitment to quality, transparency, and client success sets us apart in the industry.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Why Choose Us Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Choose Us
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {[
                                {
                                    icon: <FiUsers className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Industry Expertise",
                                    description: "Our team has hands-on experience in IT services, ensuring reliable and innovative solutions."
                                },
                                {
                                    icon: <FiSettings className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Tailored Solutions",
                                    description: "We design customized IT strategies that align with your business goals and operational needs."
                                },
                                {
                                    icon: <FiTrendingUp className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "End-to-End Support",
                                    description: "From consultation to implementation, we provide seamless IT solutions with continuous support."
                                },
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Commitment to Quality",
                                    description: "We prioritize efficiency, security, and scalability to deliver high-quality IT services for long-term success."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors shadow-md hover:shadow-xl"
                                >
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Core Values Section */}
                <section className="py-20 bg-[#0F0722] bg-opacity-80 rounded-[50px]">
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-5xl font-bold mb-10 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {[
                                {
                                    title: "Innovation",
                                    description: "Staying updated with the latest technology trends."
                                },
                                {
                                    title: "Transparency",
                                    description: "Clear communication and ethical business practices."
                                },
                                {
                                    title: "Commitment",
                                    description: "Dedicated to delivering high-quality IT services."
                                }
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors shadow-md hover:shadow-xl"
                                >
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* CTA Section */}
                <section className="py-20">
                    <div className="container mx-auto px-4">
                        <div className="max-w-2xl mx-auto text-center">
                            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                                Get in Touch
                            </h2>
                            <p className="text-xl sm:text-2xl text-gray-300 mb-8">
                                Interested in working with us? Contact us today to discuss how we can support your business growth.
                            </p>
                            <Link href={"/contact-us"}>
                                <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                                    Contact Us
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </LayoutProvider>
        </div >
    )
}
