export const metadata = {
    title: 'IT Staffing Solutions | Matchbest Software',
    description: 'Hire top IT talent with Matchbest Software. We provide contract, permanent, and remote staffing solutions for businesses across industries.',
    keywords: [
        'IT Staffing Solutions',
        'IT Recruitment',
        'Tech Talent Hiring',
        'IT Team Augmentation',
        'Remote IT Staffing',
        'Matchbest Software'
    ],
    openGraph: {
        title: 'IT Staffing Solutions | Matchbest Software',
        description: 'Access pre-vetted IT professionals for contract, full-time, or project-based needs. Scale your tech team with expert talent.',
        images: [
            {
                url: '/Logo.png',
                width: 1200,
                height: 630,
                alt: 'IT Staffing Solutions by Matchbest Software',
            },
        ],
        url: 'https://matchbestsoftware.com/it-staffing',
        type: 'website',
    },
    twitter: {
        card: 'summary_large_image',
        title: 'IT Staffing Solutions | Matchbest Software',
        description: 'Access pre-vetted IT professionals for contract, full-time, or project-based needs. Scale your tech team with expert talent.',
        images: ['/Logo.png'],
    },
    alternates: {
        canonical: 'https://matchbestsoftware.com/it-staffing',
    }
}

export default function ITStaffingLayout({ children }) {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "IT Staffing Solutions",
        "provider": {
            "@type": "Organization",
            "name": "Matchbest Software",
            "url": "https://matchbestsoftware.com"
        },
        "description": "Expert IT staffing services providing contract, permanent, and remote tech professionals for businesses.",
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