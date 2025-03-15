export const metadata = {
    title: 'Custom Software Development Services | Matchbest Software',
    description: 'Build innovative, scalable, and future-ready custom software solutions tailored to your business needs. From enterprise applications to AI-driven automation, we deliver high-performance software.',
    keywords: [
        'Custom Software Development',
        'Enterprise Software',
        'SaaS Development',
        'AI & Automation',
        'Cloud Solutions',
        'Software Maintenance',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'Custom Software Development Services | Matchbest Software',
        description: 'Build innovative, scalable, and future-ready custom software solutions tailored to your business needs. From enterprise applications to AI-driven automation, we deliver high-performance software.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Custom Software Development Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/custom-software-development-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Custom Software Development Services | Matchbest Software',
        description: 'Build innovative, scalable, and future-ready custom software solutions tailored to your business needs. From enterprise applications to AI-driven automation, we deliver high-performance software.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/custom-software-development-services',
    }
}

export default function CustomSoftwareDevelopmentLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Custom Software Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Build innovative, scalable, and future-ready custom software solutions tailored to your business needs. From enterprise applications to AI-driven automation, we deliver high-performance software.",
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