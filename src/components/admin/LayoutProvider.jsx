'use client'

import React from 'react'
import { useAuth } from '@/lib/contexts/AuthContext'
import Auth from '../Auth';
import Sidebar from '../layout/Sidebar';

function LayoutProvider({ children }) {

    const { user } = useAuth();

    if (!user) {
        return <Auth />
    }

    return (
        <main>
            <section className="flex">
                <div className='hidden lg:block'>
                    <Sidebar />
                </div>
                <div className='flex-1 max-h-screen overflow-y-scroll'>
                    {children}
                </div>
            </section>
        </main>
    )
}

export default LayoutProvider;


