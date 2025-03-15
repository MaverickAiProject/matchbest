export const metadata = {
    title: 'IT Consulting Services | Matchbest Software',
    description: 'Strategic IT solutions for business growth. Optimize technology, improve security, and drive digital transformation with expert IT consulting services from Matchbest Software.',
    keywords: [
        'IT Consulting',
        'Digital Transformation',
        'Cloud Consulting',
        'Cybersecurity',
        'IT Infrastructure',
        'Managed Services',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'IT Consulting Services | Matchbest Software',
        description: 'Strategic IT solutions for business growth. Optimize technology, improve security, and drive digital transformation with expert IT consulting services from Matchbest Software.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'IT Consulting Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/it-consulting-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IT Consulting Services | Matchbest Software',
        description: 'Strategic IT solutions for business growth. Optimize technology, improve security, and drive digital transformation with expert IT consulting services from Matchbest Software.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/it-consulting-services',
    }
}

export default function ITConsultingLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Consulting Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Strategic IT solutions for business growth. Optimize technology, improve security, and drive digital transformation with expert IT consulting services from Matchbest Software.",
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