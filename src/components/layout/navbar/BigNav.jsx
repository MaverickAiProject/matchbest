"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'
import LayoutProvider from '../LayoutProvider'
import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from 'lucide-react'

export default function BigNav() {
    const [isVisible, setIsVisible] = useState(true)
    const [lastScrollY, setLastScrollY] = useState(0)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false)
            } else {
                setIsVisible(true)
            }
            setLastScrollY(window.scrollY)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [lastScrollY])

    return (
        <LayoutProvider>
            {/* Main Header */}
            <header className={`py-4 fixed left-0 mx-auto w-full z-40 backdrop-blur-sm sm:backdrop-blur-none border-b border-gray-400/50 sm:border-none transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex px-3 sm:px-0 pr-6 sm:pr-0 justify-between sm:backdrop-blur-sm backdrop-blur-none items-center sm:shadow-lg md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto">
                    <Link href="/">
                        <div className="flex gap-2 p-2 rounded-lg items-center">
                            <Image src={ASSETS.logo} alt="Logo" height={30} width={30} priority className="rounded-full border border-white/20" />
                            <h2 className="font-semibold text-xl">MATCHBEST</h2>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <nav className="flex gap-8 text-sm">
                            <Link href="/" className="text-white/70 hover:text-white transition">Home</Link>
                            <Link href="/services" className="text-white/70 hover:text-white transition">Services</Link>
                            <Link href="/contact" className="text-white/70 hover:text-white transition">Contact Us</Link>
                            <Link href="/about" className="text-white/70 hover:text-white transition">About Us</Link>
                        </nav>
                    </div>

                    <div className="flex gap-4 items-center justify-center">
                        <Button />
                        {/* Mobile Hamburger */}
                        <div className={`md:hidden  ${mobileMenuOpen ? "hidden" : ""}`}>
                            <button onClick={() => setMobileMenuOpen(true)}>
                                <Menu className={`text-white text-2xl mt-2`} />
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer */}
            <div className={`fixed inset-0 z-50 transition-all duration-300 ease-in-out ${mobileMenuOpen ? 'translate-x-0 top' : '-translate-x-full'}`}>
                <div className="absolute inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
                <div className="relative bg-[#0F0722] w-64 h-full p-6">
                    <div className="flex justify-between items-center mb-8 border-b pb-5 border-white/25">
                        <div className="flex items-center gap-2">
                            <Image src={ASSETS.logo} alt="Logo" height={30} width={30} priority className="rounded-full border border-white/20" />
                            <h2 className="font-semibold text-xl text-white">MATCHBEST</h2>
                        </div>
                        <button onClick={() => setMobileMenuOpen(false)}>
                            <FiX className="text-white text-2xl" />
                        </button>
                    </div>
                    <nav className="flex flex-col gap-4">
                        {[
                            { name: 'Home', link: '/' },
                            { name: 'Services', link: '/services' },
                            { name: 'Contact Us', link: '/contact' },
                            { name: 'About Us', link: '/about' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="text-white/70 hover:text-white transition"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </LayoutProvider >
    )
}
