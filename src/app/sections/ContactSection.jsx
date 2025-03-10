'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import { useState } from 'react'
// import { Toaster } from 'sonner'
import { Toaster } from '@/components/ui/sonner'

export function ContactSection() {
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [isSubmitting, setIsSubmitting] = useState(false)

    const onSubmit = async (data) => {
        setIsSubmitting(true)
        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            })

            if (response.ok) {
                toast.success(
                    <div className="flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span>Message sent successfully!</span>
                    </div>
                )
                reset()
            } else {
                toast.error('Failed to send message. Please try again.')
            }
        } catch (error) {
            toast.error('An error occurred. Please try again later.')
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="relative py-20 bg-gradient-to-b from-black to-[#0F0722] overflow-hidden">
            {/* Animated background elements */}
            <div className="absolute inset-0 opacity-20">
                <div className="absolute -top-1/3 left-1/2 w-[800px] h-[800px] bg-[radial-gradient(#472283_15%,transparent_60%)] blur-3xl animate-pulse" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl mx-auto"
                >
                    <div className="backdrop-blur-lg border border-[#472283]/50 rounded-3xl p-8 bg-[#0F0722]/60 relative overflow-hidden">
                        {/* Floating grid pattern */}
                        <div className="absolute inset-0 -z-10 opacity-20">
                            {[...Array(50)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute w-1 h-1 bg-[#B372CF] rounded-full"
                                    style={{
                                        left: `${Math.random() * 100}%`,
                                        top: `${Math.random() * 100}%`,
                                        animation: `float ${10 + Math.random() * 20}s infinite`
                                    }}
                                />
                            ))}
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent text-center">
                            Let's Connect
                        </h2>

                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.2 }}
                            >
                                <Input
                                    {...register('name', { required: 'Name is required' })}
                                    placeholder="Your Name"
                                    className="bg-[#472283]/20 border-[#472283]/50 hover:border-[#B372CF]/50 text-gray-300"
                                />
                                {errors.name && <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4 }}
                            >
                                <Input
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    placeholder="Your Email"
                                    className="bg-[#472283]/20 border-[#472283]/50 hover:border-[#B372CF]/50 text-gray-300"
                                />
                                {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 }}
                            >
                                <Textarea
                                    {...register('message', { required: 'Message is required' })}
                                    placeholder="Your Message"
                                    rows={5}
                                    className="bg-[#472283]/20 border-[#472283]/50 hover:border-[#B372CF]/50 text-gray-300"
                                />
                                {errors.message && <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>}
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-center"
                            >
                                <Button
                                    type="submit"
                                    disabled={isSubmitting}
                                    className="w-full bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] transition-all relative"
                                >
                                    {isSubmitting ? (
                                        <div className="flex items-center justify-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                            </svg>
                                            <span>Sending...</span>
                                        </div>
                                    ) : (
                                        'Send Message'
                                    )}
                                </Button>
                            </motion.div>
                        </form>
                    </div>

                    {/* Floating Feature Cards */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-12">
                        {['24/7 Support', 'Fast Response', 'Secure Connection'].map((text, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2 * i }}
                                className="p-4 text-center border border-[#472283]/50 rounded-xl bg-[#0F0722]/60 backdrop-blur-sm"
                            >
                                <div className="text-[#B372CF] text-lg font-medium">{text}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <style jsx global>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
      `}</style>
            <Toaster
                richColors
                position="top-center"
                theme="dark"
                visibleToasts={1}
                toastOptions={{
                    style: {
                        background: '#0F0722',
                        border: '1px solid #472283',
                        color: '#fff'
                    }
                }}
            />
        </section>
    )
}