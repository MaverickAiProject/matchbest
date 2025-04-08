import { ContactSection } from '@/app/sections/ContactSection'
import React from 'react'

export const metadata = {
    title: 'Contact Us - Matchbest Software | Get in Touch for IT Solutions',
    description: 'Contact Matchbest Software today to discuss your IT needs. Whether you need IT consulting, application development, or system integration, our team is ready to help you achieve your business goals.',
    keywords: [
        'Contact Matchbest Software ',
        'IT Solutions Contact',
        'IT Consulting Contact',
        'Application Development Contact',
        'System Integration Contact',
        'NOC/SOC Management Contact',
        'Matchbest Software Support',
        'Get in Touch Matchbest Software',
        'Matchbest Software Contact Information'
    ],
    openGraph: {
        title: 'Contact Us - Matchbest Software | Get in Touch for IT Solutions',
        description: 'Contact Matchbest Software today to discuss your IT needs. Whether you need IT consulting, application development, or system integration, our team is ready to help you achieve your business goals.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Matchbest Software - Contact Us',
            },
        ],
        url: 'https://matchbestsoftware.com/contact',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Contact Us - Matchbest Software | Get in Touch for IT Solutions',
        description: 'Contact Matchbest Software today to discuss your IT needs. Whether you need IT consulting, application development, or system integration, our team is ready to help you achieve your business goals.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/contact',
    },
    icons: {
        icon: '/favicon.ico',
    },
};

function page() {
    return (
        <div className='pt-28'>
            <ContactSection />
        </div>
    )
}

export default page
