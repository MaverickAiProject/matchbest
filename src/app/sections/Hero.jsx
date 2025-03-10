import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Image from 'next/image'
import React from 'react'

function Hero() {
    return (
        <section className="relative pt-32 pb-20 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute -top-32 -left-48 w-[800px] h-[800px] bg-[#472283]/30 rounded-full blur-3xl" />
                <div className="absolute -bottom-64 -right-64 w-[700px] h-[700px] bg-[#361065]/40 rounded-full blur-3xl" />
            </div>

            <div className="relative z-10">
                {/* Hero Content */}
                <div className="max-w-6xl mx-auto px-4 flex flex-col items-center text-center">
                    {/* Headings */}
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                        Transform Your{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B372CF] to-[#8A4EBF]">
                            IT Services
                        </span>
                        <br />
                        With Next-Gen Solutions
                    </h1>

                    <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8 max-w-3xl mx-auto">
                        At Matchbest Software, we specialize in revolutionary IT infrastructure solutions that drive growth and digital transformation.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex gap-4 mb-16">
                        <Button />
                    </div>

                    {/* Image Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
                        {[1, 2].map((item) => (
                            <div
                                key={item}
                                className="relative group overflow-hidden rounded-xl hover:shadow-[0_8px_30px_rgba(103,46,166,0.2)] transition-all duration-300"
                            >
                                <div className="relative h-64">
                                    <Image
                                        src={ASSETS.heroImg3}
                                        alt="Solution showcase"
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#472283]/60 to-transparent" />
                                </div>
                                <div className="absolute bottom-0 left-0 right-0 p-4 text-left">
                                    <h3 className="text-white font-semibold text-lg">Solution {item}</h3>
                                    <p className="text-gray-300 text-sm">Innovative IT infrastructure</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Hero
