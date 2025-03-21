import { ASSETS } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import LayoutProvider from '../LayoutProvider'
import { NAV_LINKS, SERVICE_LINKS } from '@/lib/links'

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#0F0722] to-black border-t border-[#472283]/50">
            <LayoutProvider>
                <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="space-y-6 md:col-span-2">
                            <div className="flex items-center gap-3">
                                <Image src={ASSETS.logo} alt="Logo" height={60} width={60} priority className='rounded-xl' />
                                <span className="text-2xl sm:text-5xl font-bold bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                                    Matchbest
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed max-w-[480px] text-justify">
                                MatchBest Software is a leading IT services and system integration firm specializing in IT consulting, application development, and NOC/SOC management. We deliver secure, high-performance solutions with a strong focus on media, OTT platforms, and digital transformation.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <h4 className="text-[#B372CF] font-semibold mb-2">Services</h4>
                            <ul className="space-y-3">
                                {SERVICE_LINKS.map((service, index) => (
                                    <li key={index}>
                                        <Link href={service.link} className="text-gray-400 hover:text-[#B372CF] hover:pl-2 transition-all text-sm">
                                            {service.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="text-[#B372CF] font-semibold mb-2">Contact</h4>
                                <div className="space-y-3 text-gray-400 text-sm">
                                    <div className="flex items-center gap-2">
                                        <svg className="w-5 h-5 text-[#472283]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                        </svg>
                                        <span>contact@matchbestsoftware.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="space-y-4">
                                <h4 className="text-[#B372CF] font-semibold mb-2">Quick Links</h4>
                                <ul className="space-y-3">
                                    {NAV_LINKS.map((item, index) => (
                                        <li key={index}>
                                            <Link href={item.link} className="text-gray-400 hover:text-[#B372CF] hover:pl-2 transition-all text-sm">
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>

                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-[#472283]/30 mt-12 pt-8 text-center">
                        <p className="text-gray-500 text-sm">
                            © 2024 Matchbest Software. All rights reserved.
                            <span className="block md:inline-block mt-2 md:mt-0 md:ml-4">
                                <Link href="/privacy-policy" className="hover:text-[#B372CF] transition-colors">Privacy Policy</Link>
                                <span className="mx-2">•</span>
                                <Link href="/terms-and-conditions" className="hover:text-[#B372CF] transition-colors">Terms and Conditions</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </LayoutProvider>
        </footer >
    )
}

export default Footer