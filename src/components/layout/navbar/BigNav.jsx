"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ASSETS, GIFS } from '@/assets/assets'
import Button from '@/components/Button'
import LayoutProvider from '../LayoutProvider'
import { FiMenu, FiX } from 'react-icons/fi'
import { Menu } from 'lucide-react'

export default function BigNav() {
    const services = [
        {
            icon: GIFS.gif3,
            link: "/managed-it-services",
            title: "Managed IT Services",
        },
        {
            icon: GIFS.gif4,
            link: "/website-development-services",
            title: "Website Development",
        },
        {
            icon: GIFS.gif6,
            link: "/app-development-services",
            title: "App Development",
        },
        {
            icon: GIFS.gif1,
            link: "/custom-software-development-services",
            title: "Software Development",
        },
        {
            icon: GIFS.gif2,
            link: "/system-integration-services",
            title: "System Integration",
        },
        {
            icon: GIFS.gif5,
            link: "/cloud-migration-services",
            title: "Cloud Migration",
        },
        {
            icon: GIFS.gif2,
            link: "/digital-transformation-services",
            title: "Digital Transformation",
        },
        {
            icon: GIFS.gif6,
            link: "/it-consulting-services",
            title: "IT Consulting",
        },
        {
            icon: GIFS.gif5,
            link: "/it-staffing",
            title: "IT Staffing Solutions",
        }
    ];


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
            <header className={`pt-6 pb-4 fixed left-0 mx-auto w-full z-40 backdrop-blur-sm sm:backdrop-blur-none border-b border-gray-400/50 sm:border-none transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className="flex px-3 relative sm:px-0 pr-6 sm:pr-0 justify-between sm:backdrop-blur-sm backdrop-blur-none items-center sm:shadow-lg md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto">
                    <Link href="/">
                        <div className="flex gap-2 p-2 rounded-lg items-center">
                            <Image src={ASSETS.logo} alt="Logo" height={30} width={30} priority className="rounded-full border border-white/20" />
                            <h2 className="font-semibold text-xl">MATCHBEST</h2>
                        </div>
                    </Link>

                    <div className="hidden md:block ">
                        <nav className="flex gap-8 text-sm">
                            <Link href="/" className="text-white/70 hover:text-white transition">Home</Link>

                            <div className="group relative">
                                <Link
                                    href="/services"
                                    className="text-white/70 hover:text-white transition"
                                >
                                    Services
                                </Link>
                                <div className="absolute top-full left-21 -translate-x-1/2 w-3xl opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
                                    <div className="mt-9 bg-[#130923] backdrop-blur-sm sm:shadow-lg md:border border-white/15 p-6 rounded-xl max-w-3xl mx-auto transform -translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-2 py-2">
                                            {services?.map((item, index) => (
                                                <Link
                                                    href={item.link}
                                                    key={index}
                                                    className="group relative bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl overflow-hidden"
                                                >
                                                    <div className="absolute inset-0 rounded-lg pointer-events-none">
                                                        <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-900 opacity-0 group-hover:opacity-30 transition-opacity duration-300 rounded-lg" />
                                                    </div>

                                                    <div className="relative flex flex-col items-start gap-4">
                                                        <div className="flex items-center gap-3 justify-center">
                                                            {/* Animated Icon Container */}
                                                            <div className="p-2 rounded-lg group-hover:scale-110 transition-transform duration-300">
                                                                <Image
                                                                    alt={item.title}
                                                                    src={item.icon}
                                                                    width={40}
                                                                    height={40}
                                                                    className="filter brightness-125 group-hover:brightness-150 transition-all duration-300"
                                                                />
                                                            </div>
                                                            <h3 className="text-base font-semibold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-300 group-hover:to-pink-300 transition-colors duration-300">
                                                                {item.title}
                                                            </h3>
                                                        </div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <Link href="/blogs" className="text-white/70 hover:text-white transition">Blogs</Link>
                            <Link href="/about" className="text-white/70 hover:text-white transition">About Us</Link>
                            {/* <Link href="/contact" className="text-white/70 hover:text-white transition">Contact Us</Link> */}
                        </nav>
                    </div>

                    <div className="flex gap-4 items-center justify-center">
                        <Button />
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
                            { name: 'About Us', link: '/about' },
                            { name: 'Contact Us', link: '/contact' },
                            { name: 'Blogs', link: '/blogs' },
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
