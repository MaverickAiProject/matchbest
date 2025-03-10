import { ASSETS, GIFS } from '@/assets/assets'
import Image from 'next/image'

export default function Services() {
    const services = [
        {
            icon: GIFS.gif3,
            title: "Managed IT Services",
            desc: "Proactive 24/7 IT management, enterprise security solutions, and optimized cloud infrastructure"
        },
        {
            icon: GIFS.gif4,
            title: "IT Development Services",
            desc: "Custom software engineering, web applications, and mobile solutions with full-cycle development"
        },
        {
            icon: GIFS.gif6,
            title: "Solution Integration",
            desc: "Seamless integration of legacy systems with modern platforms and third-party APIs"
        },
        {
            icon: GIFS.gif1,
            title: "Process Improvement",
            desc: "Workflow automation and operational optimization through AI-driven software solutions"
        },
        {
            icon: GIFS.gif5,
            title: "IT Staffing",
            desc: "On-demand access to vetted professionals - cloud architects, developers, and security experts"
        },
        // {
        //     icon: ASSETS.gif1,
        //     title: "Tech Upgrade & Migration",
        //     desc: "Zero-downtime migration to modern ERP/CRM systems and cloud-native architectures"
        // },
        {
            icon: GIFS.gif2,
            title: "Digital Transformation",
            desc: "End-to-end modernization of operations, customer experience, and data ecosystems"
        }
    ]

    return (
        <section className="relative pb-10 max-w-6xl mx-auto overflow-hidden">

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Comprehensive <span className="bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">IT Solutions</span>
                    </h2>
                    <p className="text-xl text-gray-300/90">
                        Driving business growth through strategic technology implementation and digital innovation
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group relative p-px rounded-2xl overflow-hidden bg-gradient-to-br from-[#472283]/40 to-[#B372CF]/20 hover:from-[#B372CF]/40 hover:to-[#472283]/40 transition-all bottom-0 hover:bottom-2 duration-300"
                        >
                            <div className="relative h-full bg-[#0F0722] rounded-2xl p-8 hover:bg-black/90 transition-all">
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
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="mt-10 text-center">
                    <p className="text-xl text-gray-300 mb-6">
                        Ready to transform your IT infrastructure?
                    </p>
                    <button className="bg-gradient-to-r from-[#472283] to-[#361065] hover:from-[#5A2DA3] hover:to-[#472283] px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105">
                        Schedule Free Consultation
                    </button>
                </div>
            </div>
        </section>
    )
}