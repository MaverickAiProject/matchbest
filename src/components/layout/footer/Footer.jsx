import { ASSETS } from '@/assets/assets'
import Image from 'next/image'
import Link from 'next/link'
import LayoutProvider from '../LayoutProvider'
import { Instagram } from 'lucide-react'

function Footer() {
    return (
        <footer className="relative bg-gradient-to-b from-[#0F0722] to-black border-t border-[#472283]/50">
            <LayoutProvider>
                <div className="container mx-auto px-4 py-12 sm:py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12">
                        {/* Company Info */}
                        <div className="space-y-6">
                            <div className="flex items-center gap-3">
                                <Image src={ASSETS.logo} alt="Logo" height={30} width={30} priority />
                                <span className="text-2xl font-bold bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                                    Matchbest
                                </span>
                            </div>
                            <p className="text-gray-400 text-sm leading-relaxed">
                                Transforming businesses through innovative IT solutions and digital excellence.
                            </p>
                        </div>

                        {/* Services */}
                        <div className="space-y-4">
                            <h4 className="text-[#B372CF] font-semibold mb-2">Services</h4>
                            <ul className="space-y-3">
                                {[
                                    'Managed IT Services',
                                    'Custom Software Development',
                                    'System Integration',
                                    'IT Staffing Solutions',
                                    'Cloud Migration',
                                    'Digital Transformation'
                                ].map((service, index) => (
                                    <li key={index}>
                                        <Link href="#" className="text-gray-400 hover:text-[#B372CF] hover:pl-2 transition-all text-sm">
                                            {service}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Contact */}
                        <div className="space-y-4">
                            <h4 className="text-[#B372CF] font-semibold mb-2">Contact</h4>
                            <div className="space-y-3 text-gray-400 text-sm">
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#472283]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span>123 Tech Park, Silicon Valley, CA</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#472283]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                    <span>+1 (555) 123-4567</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <svg className="w-5 h-5 text-[#472283]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                    <span>contact@matchbest.com</span>
                                </div>
                            </div>
                        </div>

                        {/* Social & Newsletter */}
                        <div className="space-y-6">
                            {/* <div className="space-y-4">
                                <h4 className="text-[#B372CF] font-semibold">Follow Us</h4>
                                <div className="flex gap-4">
                                    {['linkedin', 'twitter', 'github', 'facebook'].map((platform, index) => (
                                        <Link key={index} href="#" className="p-2 rounded-lg bg-[#472283]/30 hover:bg-[#B372CF]/20 transition-colors">
                                            <svg className="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                                                <Instagram />
                                            </svg>
                                        </Link>
                                    ))}
                                </div>
                            </div> */}

                            <div className="space-y-4">
                                <h4 className="text-[#B372CF] font-semibold">Newsletter</h4>
                                <div className="flex gap-2">
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="flex-1 bg-[#472283]/20 border border-[#472283]/50 rounded-lg px-4 py-2 text-sm text-gray-300 focus:outline-none focus:border-[#B372CF]"
                                    />
                                    <button className="bg-gradient-to-r from-[#472283] to-[#B372CF] px-4 py-2 rounded-lg text-sm font-medium hover:opacity-90 transition-opacity">
                                        Subscribe
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Copyright */}
                    <div className="border-t border-[#472283]/30 mt-12 pt-8 text-center">
                        <p className="text-gray-500 text-sm">
                            © {new Date().getFullYear()} Matchbest Software. All rights reserved.
                            <span className="block md:inline-block mt-2 md:mt-0 md:ml-4">
                                <Link href="#" className="hover:text-[#B372CF] transition-colors">Privacy Policy</Link>
                                <span className="mx-2">•</span>
                                <Link href="#" className="hover:text-[#B372CF] transition-colors">Terms of Service</Link>
                            </span>
                        </p>
                    </div>
                </div>
            </LayoutProvider>
        </footer>
    )
}

export default Footer