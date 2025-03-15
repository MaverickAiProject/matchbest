export const metadata = {
    title: 'Cloud Migration Services | Matchbest Software',
    description: 'Seamlessly transition to the cloud with Matchbest Software. We provide secure, efficient, and cost-effective cloud migration services for businesses of all sizes.',
    keywords: [
        'Cloud Migration Services',
        'Cloud Strategy',
        'Cloud Platform Migration',
        'Hybrid Cloud Solutions',
        'Cloud Security',
        'Cloud Optimization',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'Cloud Migration Services | Matchbest Software',
        description: 'Seamlessly transition to the cloud with expert migration services. Secure, efficient, and cost-effective solutions for your business.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Cloud Migration Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/cloud-migration-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Cloud Migration Services | Matchbest Software',
        description: 'Seamlessly transition to the cloud with expert migration services. Secure, efficient, and cost-effective solutions for your business.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/cloud-migration-services',
    }
}

export default function CloudMigrationLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Cloud Migration Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Expert cloud migration services to help businesses transition to the cloud securely and efficiently.",
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