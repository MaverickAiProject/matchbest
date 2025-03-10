"use client"
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import { ASSETS } from '@/assets/assets'
import Button from '@/components/Button'
import LayoutProvider from '../LayoutProvider'
import { Ham } from 'lucide-react'

export default function BigNav() {

    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > lastScrollY) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }
            setLastScrollY(window.scrollY);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScrollY]);

    return (
        <LayoutProvider>
            <header className={`py-4 left-0 mx-auto fixed  z-50 w-full border-b border-white/15 md:border-none transition-all duration-700 ease-in-out ${isVisible ? "translate-y-0" : "-translate-y-full"}`}>
                <div className='flex justify-between shadow-md backdrop-blur-sm items-center md:border border-white/15 md:p-2.5 rounded-xl max-w-3xl mx-auto'>

                    <div className='h-fit w-fit rounded-lg flex gap-2 p-2 justify-center items-center'>
                        <Image src={ASSETS.logo} alt="Logo" height={30} width={30} priority />
                        <h2 className='font-semibold text-xl'>MATCHBEST</h2>
                    </div>

                    <div className='hidden md:block'>
                        <nav className='flex gap-8 text-sm'>
                            <a href="#" className='text-white/70 hover:text-white transition'>Home</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Services</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>Contact Us</a>
                            <a href="#" className='text-white/70 hover:text-white transition'>About Us</a>
                        </nav>
                    </div>

                    <div className='flex gap-4 items-center'>
                        <Button />
                        {/* <Ham /> */}
                    </div>
                </div>
            </header>
        </LayoutProvider>
    )
}
