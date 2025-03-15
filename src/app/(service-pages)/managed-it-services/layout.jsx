export const metadata = {
    title: 'Managed IT Services | Matchbest Software',
    description: 'Comprehensive Managed IT Services by Matchbest Software. We provide 24/7 monitoring, cybersecurity, cloud services, and IT support to empower your business.',
    keywords: [
        'Managed IT Services',
        'IT Infrastructure Management',
        'Cybersecurity Solutions',
        'Cloud Services',
        'IT Support',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'Managed IT Services | Matchbest Software',
        description: 'Empower your business with expert IT management. 24/7 monitoring, cybersecurity, and scalable IT solutions tailored to your needs.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Managed IT Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/managed-it-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Managed IT Services | Matchbest Software',
        description: 'Empower your business with expert IT management. 24/7 monitoring, cybersecurity, and scalable IT solutions tailored to your needs.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/managed-it-services',
    }
}

export default function ManagedITLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Managed IT Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Comprehensive Managed IT Services including 24/7 monitoring, cybersecurity, and cloud solutions.",
        "areaServed": "Global"
    }
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            {children}
        </div>
    )
}