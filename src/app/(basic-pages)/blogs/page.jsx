import LayoutProvider from '@/components/layout/LayoutProvider'
import React from 'react'
import BlogsList from './components/BlogsList'

export default function page() {
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white pt-14 sm:pt-24">
            <LayoutProvider>
                <BlogsList />
            </LayoutProvider>
        </div>
    )
}
