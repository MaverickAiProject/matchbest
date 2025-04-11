"use client"

import { motion } from 'framer-motion'
import { ASSETS, GIFS } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'

export default function Services() {
    const services = [
        {
            icon: GIFS.gif4,
            link: "/website-development-services",
            title: "Website Development",
            desc: "Custom software engineering, web applications, and mobile solutions with full-cycle development"
        },
        {
            icon: GIFS.gif6,
            link: "/app-development-services",
            title: "App Development",
            desc: "End-to-end mobile app development, from concept to deployment, for iOS and Android platforms"
        },
        {
            icon: GIFS.gif9,
            link: "/custom-software-development-services",
            title: "Software Development",
            desc: "Bespoke software solutions tailored to business needs, ensuring scalability and efficiency"
        },
        {
            icon: GIFS.gif2,
            link: "/system-integration-services",
            title: "System Integration",
            desc: "Seamless integration of legacy systems with modern platforms and third-party APIs"
        },
        {
            icon: GIFS.gif7,
            link: "/cloud-migration-services",
            title: "Cloud Migration",
            desc: "Migrate to the cloud with minimal downtime, enhanced security, and optimized performance"
        },
        {
            icon: GIFS.gif2,
            link: "/digital-transformation-services",
            title: "Digital Transformation",
            desc: "End-to-end modernization of operations, customer experience, and data ecosystems"
        },
        {
            icon: GIFS.gif3,
            link: "/it-consulting-services",
            title: "IT Consulting",
            desc: "Expert guidance in IT strategy, infrastructure optimization, and technology adoption"
        },
        {
            icon: GIFS.gif5,
            link: "/it-staffing",
            title: "IT Staffing Solutions",
            desc: "On-demand access to professional cloud architects, developers, and security experts"
        },
        {
            icon: GIFS.gif8,
            link: "/managed-it-services",
            title: "Managed IT Services",
            desc: "Proactive 24/7 IT management, enterprise security solutions, and optimized cloud infrastructure"
        },
    ];


    return (
        <section className="relative pb-10 max-w-7xl mx-auto overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-10">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">  Comprehensive IT Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-300/90">
                        Driving business growth through strategic technology implementation and digital innovation
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 h-full w-full">
                    {services.map((service, index) => (
                        <Link key={index} href={service.link}>
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group relative h-full p-px w-full rounded-2xl overflow-hidden bg-gradient-to-br from-[#472283]/40 to-[#B372CF]/20 hover:from-[#B372CF]/40 hover:to-[#472283]/40 transition-all bottom-0 hover:bottom-2 duration-300"
                            >
                                <div className="relative h-full w-full bg-[#0F0722] rounded-2xl p-8 hover:bg-black/90 transition-all">
                                    <div className="mb-6">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            width={64}
                                            height={64}
                                            className="w-16 h-16 object-contain"
                                        />
                                    </div>
                                    <h3 className="text-2xl font-bold mb-4 group-hover:text-[#B372CF] transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-300/80 group-hover:text-gray-200 transition-colors">
                                        {service.desc}
                                    </p>
                                </div>
                            </motion.div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-10 text-center"
                >
                    <p className="text-xl text-gray-300 mb-6">
                        Ready to transform your IT infrastructure?
                    </p>
                    <Link href={"/contact"}>
                        <button className="cursor-pointer bg-gradient-to-r from-[#472283] to-[#361065] hover:from-[#5A2DA3] hover:to-[#472283] px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
                            Book Free Consultation
                        </button>
                    </Link>
                </motion.div>

            </div>
        </section>
    )
}