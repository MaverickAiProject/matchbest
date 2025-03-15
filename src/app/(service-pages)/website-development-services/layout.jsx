export const metadata = {
    title: 'Website Development Services | Matchbest Software',
    description: 'Build a powerful online presence with custom, scalable, and SEO-friendly web solutions. From business websites to e-commerce platforms, we deliver high-performing websites that drive growth.',
    keywords: [
        'Website Development',
        'Custom Website',
        'E-Commerce Development',
        'Web Application',
        'UI/UX Design',
        'SEO Optimization',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'Website Development Services | Matchbest Software',
        description: 'Build a powerful online presence with custom, scalable, and SEO-friendly web solutions. From business websites to e-commerce platforms, we deliver high-performing websites that drive growth.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'Website Development Services by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/website-development-services',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Website Development Services | Matchbest Software',
        description: 'Build a powerful online presence with custom, scalable, and SEO-friendly web solutions. From business websites to e-commerce platforms, we deliver high-performing websites that drive growth.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/website-development-services',
    },
}

export default function WebsiteDevelopmentLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Website Development Services",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Build a powerful online presence with custom, scalable, and SEO-friendly web solutions. From business websites to e-commerce platforms, we deliver high-performing websites that drive growth.",
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