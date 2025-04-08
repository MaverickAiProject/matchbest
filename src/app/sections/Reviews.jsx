"use client"

import Image from 'next/image';
import { motion } from "framer-motion"
import { AVATAR } from '@/assets/assets';
import LayoutProvider from '@/components/layout/LayoutProvider';

function Testimonials() {
    const testimonials = [
        // {
        //     text: "Their managed IT services transformed our infrastructure reliability while reducing costs by 40%",
        //     name: "Michael Chen",
        //     title: "CTO @ TechFlow",
        //     avatarImg: AVATAR.avatar4,
        // },
        // {
        //     text: "The custom software development team delivered beyond our expectations with scalable solutions",
        //     name: "Sarah Johnson",
        //     title: "Director @ FinSecure",
        //     avatarImg: AVATAR.avatar2,
        // },
        {
            text: "Seamless integration of our legacy systems with modern platforms revolutionized our operations",
            name: "David Martinez",
            title: "CIO @ RetailPlus",
            avatarImg: AVATAR.avatar3,
        },
        {
            text: "Their IT staffing solutions provided exactly the cloud expertise we needed on demand",
            name: "Emma Wilson",
            title: "VP Ops @ HealthChain",
            avatarImg: AVATAR.avatar1,
        },
        {
            text: "The website they built for us is fast, secure, and perfectly aligned with our brand. Outstanding service!",
            name: "Rohan Mehta",
            title: "Founder @ EduSpark India",
            avatarImg: AVATAR.avatar5,
        },
        {
            text: "We migrated to the cloud with zero disruptions thanks to their expert team. Highly professional approach.",
            name: "Priya Sharma",
            title: "IT Head @ MedCure Pvt Ltd",
            avatarImg: AVATAR.avatar6,
        },
        {
            text: "Their digital transformation strategy helped us modernize workflows and boost productivity across departments.",
            name: "Arjun Iyer",
            title: "COO @ NexGen Retail",
            avatarImg: AVATAR.avatar7,
        },
        {
            text: "App development was smooth from idea to launch. The final product exceeded our expectations!",
            name: "Neha Patel",
            title: "Product Manager @ Finovo India",
            avatarImg: AVATAR.avatar8,
        }
    ]


    return (
        <LayoutProvider>
            <section className='py-10 md:py-14 mt-20 bg-gradient-to-b from-[#0F0722] to-black rounded-3xl border border-b-0 border-[#472283]/30'>
                <div className="container mx-auto">
                    <h2 className='text-4xl md:text-5xl text-center font-bold bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent'>
                        Client Success Stories
                    </h2>
                    <p className='text-gray-300 text-lg md:text-xl text-center mt-3 max-w-xl mx-auto'>
                        Trusted by enterprises to deliver transformative technology solutions
                    </p>
                    <div className='flex flex-col sm:flex-row sm:gap-5 justify-center items-center px-5 sm:px-10'>
                        <div className="relative sm:w-[30%] w-full mt-5 sm:mt-10">
                            <Image
                                src="/testimonial.png"
                                height={500}
                                width={500}
                                alt="IT Infrastructure"
                                className="object-cover rounded-3xl w-auto max-w-[250px] mx-auto h-full"
                            />
                        </div>

                        <div className='flex sm:flex-1 w-full sm:w-auto overflow-hidden mt-8 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]'>
                            <motion.div
                                className='flex gap-5 flex-none pr-5 p-6'
                                animate={{
                                    x: ["0%", "-60%"]
                                }}
                                transition={{
                                    duration: 48,
                                    ease: "linear",
                                    repeat: Infinity,
                                }}
                            >
                                {[...testimonials, ...testimonials, ...testimonials,].map((testimonial, index) => (
                                    <div
                                        key={index}
                                        className='border border-[#472283]/50 p-4 rounded-lg bg-[#0F0722] md:max-w-[300px] max-w-[220px] flex-none text-center cursor-pointer hover:border-[#B372CF] transition-all duration-300 hover:shadow-[0_10px_30px_rgba(179,114,207,0.15)]'
                                    >
                                        <div className='text-gray-300 text-base md:text-lg tracking-tight'>{testimonial.text}</div>
                                        <div className='flex flex-col items-center gap-3 mt-5'>
                                            <div className='relative after:content-[""] after:absolute after:inset-0 after:bg-[#472283] after:rounded-lg after:mix-blend-soft-light'>
                                                <Image
                                                    src={testimonial.avatarImg}
                                                    alt='Avatar'
                                                    height={100}
                                                    width={100}
                                                    className='h-11 w-11 rounded-lg relative z-10'
                                                />
                                            </div>
                                            <div className='flex flex-col'>
                                                <div className='text-[#B372CF]'>{testimonial.name}</div>
                                                <div className='text-gray-400 text-sm'>{testimonial.title}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </LayoutProvider>
    )
}

export default Testimonials