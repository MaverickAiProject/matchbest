import { ASSETS } from '@/assets/assets'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Image from 'next/image'

export default function WhyChooseUs() {
    return (
        <section className="relative py-20 md:py-28 bg-black overflow-hidden">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-72 -right-[350px] w-[800px] h-[800px] bg-[#472283]/30 rounded-full blur-3xl" />
                {/* <div className="absolute -bottom-64 -right-64 w-[700px] h-[700px] bg-[#361065]/40 rounded-full blur-3xl" /> */}
            </div>

            <LayoutProvider>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row gap-14 xl:gap-24 items-center">
                        {/* Text Content */}
                        <div className="flex-1 max-w-2xl lg:max-w-none">
                            <div className="relative group">
                                <div className="absolute -left-4 -top-4 w-24 h-24 bg-[#B372CF]/20 blur-3xl rounded-full" />
                                <h2 className="text-4xl md:text-5xl xl:text-[3.5rem] font-bold leading-tight mb-4 bg-[linear-gradient(45deg,#FFF_30%,#B372CF_70%)] bg-clip-text text-transparent">
                                    Your Digital Evolution <span className="inline-block bg-[linear-gradient(45deg,#B372CF,#472283)] bg-clip-text text-transparent">Architects</span>
                                </h2>
                            </div>

                            <p className="text-lg md:text-xl text-gray-300/90 leading-relaxed mb-8">
                                With <span className="font-semibold text-[#B372CF]">12+ years</span> of transforming enterprises across 15 industries, we engineer technological DNA that drives sustainable growth.
                            </p>

                            <ul className="space-y-5 mb-10">
                                {[
                                    { title: "360° Tech Governance", desc: "Network security to cloud architecture" },
                                    { title: "Compliance-First Approach", desc: "HIPAA/GDPR/PCI-DSS ready solutions" },
                                    { title: "ROI-Driven Models", desc: "35% avg. cost reduction in first year" }
                                ].map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start p-4 rounded-xl backdrop-blur-sm bg-gradient-to-r from-[#472283]/20 to-transparent hover:from-[#B372CF]/10 transition-all"
                                    >
                                        <div className="mr-4 mt-1 w-3 h-3 rounded-full bg-[#B372CF] flex-shrink-0" />
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-100 mb-1.5">{item.title}</h3>
                                            <p className="text-gray-400">{item.desc}</p>
                                        </div>
                                    </li>
                                ))}
                            </ul>

                            {/* <button className="relative overflow-hidden group px-8 py-4 rounded-2xl bg-gradient-to-r from-[#472283] to-[#361065] hover:to-[#4A2485] transition-all shadow-xl hover:shadow-2xl">
                                <span className="relative z-10 text-lg font-semibold">Download Capability Statement</span>
                                <div className="absolute inset-0 -z-10 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <div className="absolute -inset-2 bg-[radial-gradient(300px_circle_at_center,#B372CF_0%,transparent_70%)] animate-pulse" />
                                </div>
                            </button> */}
                        </div>

                        {/* Image Section */}
                        <div className="flex-1 w-full max-w-2xl xl:max-w-none">
                            <div className="relative aspect-[1.1] rounded-3xl overflow-hidden border border-[#472283]/50 hover:border-[#B372CF]/70 transition-colors">
                                <div className="absolute inset-0 -z-10">
                                    <div className="absolute -top-20 -left-20 w-96 h-96 bg-[#B372CF]/10 blur-3xl rounded-full" />
                                </div>

                                <Image
                                    src={ASSETS.heroImg}
                                    alt="Tech Dashboard"
                                    fill
                                    className="object-cover object-left-top"
                                    quality={100}
                                />

                                {/* Gradient Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

                                {/* Animated Border */}
                                <div className="absolute inset-0 rounded-3xl border-2 border-transparent hover:border-[#B372CF]/30 transition-all" />
                            </div>
                        </div>
                    </div>
                </div>
            </LayoutProvider>

        </section>
    )
}