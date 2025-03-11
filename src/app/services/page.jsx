import React from 'react'
import Services from '../sections/Services'
import { FAQ } from '../sections/FAQ'

export default function page() {
    return (
        <div className='pb-20 pt-12 bg-gradient-to-b from-[#0F0722] to-black'>
            {/* Header Section */}
            <div className="container mx-auto px-4 relative z-10">
                <div
                    className="max-w-4xl mx-auto text-center py-20"
                >
                    <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                        Transform Your Business Through Technology
                    </h1>

                    <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto"                        >
                        Enterprise-grade IT solutions designed to accelerate growth and drive digital innovation
                    </p>

                    <div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="mt-12 p-6 rounded-2xl bg-[#472283]/10 border border-[#472283]/30 backdrop-blur-sm"
                    >
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                            {[
                                { number: '12+', label: 'Years Experience' },
                                { number: '98%', label: 'Client Retention' },
                                { number: '500+', label: 'Projects Delivered' },
                                { number: '24/7', label: 'Global Support' },
                            ].map((stat, index) => (
                                <div key={index} className="p-4">
                                    <div className="text-3xl font-bold text-[#B372CF] mb-2">{stat.number}</div>
                                    <div className="text-sm text-gray-300">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Services />
            <FAQ />
        </div>
    )
}
