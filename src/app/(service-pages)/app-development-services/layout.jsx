export const metadata = {
    title: 'App Development Services | Matchbest Software',
    description: 'Transform your ideas into powerful mobile and web apps with custom app development services. Build scalable, secure, and innovative apps for your business.',
    keywords: [
        'App Development',
        'Mobile App Development',
        'Web App Development',
        'E-Commerce Apps',
        'AI-Powered Apps',
        'IoT App Development',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'App Development Services | Matchbest Software',
        description: 'Transform your ideas into powerful mobile and web apps with custom app development services. Build scalable, secure, and innovative apps for your business.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'App Development Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/app-development-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'App Development Services | Matchbest Software',
        description: 'Transform your ideas into powerful mobile and web apps with custom app development services. Build scalable, secure, and innovative apps for your business.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/app-development-services',
    }
}

export default function AppDevelopmentLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "App Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Transform your ideas into powerful mobile and web apps with custom app development services. Build scalable, secure, and innovative apps for your business.",
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