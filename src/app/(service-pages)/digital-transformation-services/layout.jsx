export const metadata = {
    title: 'Digital Transformation Services | Matchbest Software',
    description: 'Transform your business with cutting-edge digital solutions. Leverage AI, cloud computing, automation, and data-driven insights to drive efficiency and growth.',
    keywords: [
        'Digital Transformation',
        'AI & Automation',
        'Cloud Migration',
        'Enterprise Software',
        'Data Analytics',
        'Cybersecurity',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'Digital Transformation Services | Matchbest Software',
        description: 'Empower your business with innovative digital strategies and advanced technologies. Drive efficiency, improve customer experiences, and unlock growth opportunities.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Digital Transformation Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/digital-transformation-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Digital Transformation Services | Matchbest Software',
        description: 'Empower your business with innovative digital strategies and advanced technologies. Drive efficiency, improve customer experiences, and unlock growth opportunities.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/digital-transformation-services',
    }
}

export default function DigitalTransformationLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Digital Transformation Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Transform your business with AI, cloud computing, automation, and data-driven insights. Drive efficiency, improve customer experiences, and unlock growth opportunities.",
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