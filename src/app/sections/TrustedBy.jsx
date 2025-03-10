import { LOGOs } from '@/assets/assets'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Image from 'next/image'
import React from 'react'

function TrustedBy() {
    return (
        <section className="relative pt-20 pb-36 overflow-hidden">
            {/* Background effect */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-1/3 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(#472283_20%,transparent_60%)] blur-3xl" />
            </div>

            <LayoutProvider>
                <div className="flex flex-col items-center">
                    <h2 className="text-4xl md:text-6xl font-bold text-center mb-14 relative inline-block">
                        <span className="relative z-10">
                            <span className="bg-gradient-to-r from-[#B372CF] via-[#8A4EBF] to-[#472283] bg-clip-text text-transparent">
                                Trusted by Leading
                            </span>
                            <span className="block mt-2 bg-gradient-to-r from-[#472283] via-[#8A4EBF] to-[#B372CF] bg-clip-text text-transparent">
                                Enterprises
                            </span>
                        </span>

                        {/* Animated background elements */}
                        <div className="absolute -top-4 -left-8 w-48 h-48 bg-[radial-gradient(circle,#B372CF_10%,transparent_60%)] blur-xl opacity-20 animate-pulse" />
                        <div className="absolute -bottom-4 -right-8 w-32 h-32 bg-[radial-gradient(circle,#472283_20%,transparent_70%)] blur-lg opacity-30 animate-float" />
                    </h2>

                    <div className="w-full max-w-6xl mx-auto">
                        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-8 px-4">
                            {LOGOs.map((logoObj, index) => {
                                const logoUrl = Object.values(logoObj)[0]
                                return (
                                    <div
                                        key={index}
                                        className="flex items-center border border-white/20 justify-center p-4 bg-[#472283]/10 rounded-xl hover:bg-[#B372CF]/10 transition-all duration-300 hover:border-purple-500"
                                    >
                                        <Image
                                            src={logoUrl}
                                            alt="Trusted company logo"
                                            width={160}
                                            height={80}
                                            className="h-12 w-auto object-contain transition-all"
                                            quality={100}
                                        />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </LayoutProvider>
        </section>
    )
}

export default TrustedBy