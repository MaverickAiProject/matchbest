"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'
import LayoutProvider from '../LayoutProvider'
import { FiMenu, FiX } from 'react-icons/fi'

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
            <header className={`py-4 fixed left-0 w-full z-50 backdrop-blur-sm transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex px-3 sm:px-0 pr-6 sm:pr-0 justify-between items-center shadow-md md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto">
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
                            <Link href="/contact-us" className="text-white/70 hover:text-white transition">Contact Us</Link>
                            <Link href="/about-us" className="text-white/70 hover:text-white transition">About Us</Link>
                        </nav>
                    </div>

                    <div className="flex gap-4 items-center">
                        <Button />
                        {/* Mobile Menu Toggle */}
                        <div className="md:hidden">
                            <button onClick={() => setMobileMenuOpen(prev => !prev)}>
                                {mobileMenuOpen ? <FiX className="text-white text-2xl" /> : <FiMenu className="text-white text-2xl" />}
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            {/* Mobile Navigation Drawer from the Right */}
            <div className="fixed inset-0 z-40">
                {/* Overlay */}
                {mobileMenuOpen && (
                    <div className="absolute inset-0 bg-black opacity-50" onClick={() => setMobileMenuOpen(false)}></div>
                )}
                <div
                    className={`absolute top-0 right-0 bg-[#0F0722] w-64 h-full p-6 transition-transform duration-300 ease-in-out transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="flex justify-between items-center mb-8">
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
                            { name: 'Contact Us', link: '/contact-us' },
                            { name: 'About Us', link: '/about-us' }
                        ].map((item, index) => (
                            <Link
                                key={index}
                                href={item.link}
                                className="text-white/70 hover:text-white transition text-lg"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </LayoutProvider>
    )
}
