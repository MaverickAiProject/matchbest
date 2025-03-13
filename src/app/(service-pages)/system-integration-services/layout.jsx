export const metadata = {
    title: 'System Integration Services | Matchbest Software',
    description: 'Expert system integration services by Matchbest Software. We connect applications, platforms, and IT infrastructures for seamless operations and maximum efficiency.',
    keywords: [
        'System Integration Services',
        'API Integration',
        'Cloud Integration',
        'Enterprise Application Integration',
        'Data Integration',
        'IoT Integration',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'System Integration Services | Matchbest Software',
        description: 'Seamless integration for maximum efficiency. Connect your systems with our expert integration services.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'System Integration Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/system-integration-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'System Integration Services | Matchbest Software',
        description: 'Seamless integration for maximum efficiency. Connect your systems with our expert integration services.',
        images: ['/Logo.png'],
    },
}

export default function SystemIntegrationLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "System Integration Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Expert system integration services to connect applications, platforms, and IT infrastructures for seamless operations.",
        "areaServed": "Global"
    }

    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white">
            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Page Content */}
            {children}
        </div>
    )
}