export const metadata = {
    title: 'Privacy Policy | MatchBest Software',
    description: 'Learn how MatchBest Software collects, uses, and protects your personal information through our comprehensive Privacy Policy.',
    alternates: {
        canonical: 'https://matchbestsoftware.com/privacy-policy',
    },
}

export default function PrivacyPolicyPage() {
    return (
        <div className="bg-[#0F0722] text-white min-h-screen flex items-center justify-center pt-14 pb-8">
            <div className="container mx-auto px-6 py-16 max-w-5xl rounded-lg ">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl sm:text-5xl font-extrabold mb-3 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                        Privacy Policy
                    </h1>
                </div>

                {/* Content Sections */}
                <div className="space-y-10 text-gray-300 leading-relaxed">
                    {sections.map(({ title, content }, index) => (
                        <section key={index} className="bg-[#1E103D] p-6 rounded-lg shadow-md">
                            <h2 className="text-2xl font-semibold mb-4 text-[#B372CF]">{title}</h2>
                            {content}
                        </section>
                    ))}
                </div>

                {/* Contact Information */}
                <div className="mt-12 p-6 bg-[#1E103D] rounded-lg text-gray-300">
                    <h2 className="text-2xl font-semibold text-[#B372CF] mb-4">Contact Us</h2>
                    <p>For any questions or concerns about this Privacy Policy, contact us at:</p>
                    <div className="mt-4 p-4 bg-[#472283]/20 rounded-lg">
                        <p className="font-semibold">MatchBest Software</p>
                        <p>Email: <a href="mailto:[Your Contact Email]" className="text-[#B372CF] hover:underline">contact@matchbestsoftware.com</a></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

const sections = [
    {
        title: '1. Information We Collect',
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li><strong>Personal Information:</strong> Name, Email, Phone Number, etc.</li>
                <li><strong>Technical Information:</strong> IP Address, Browser Type, Device Info.</li>
                <li><strong>Usage Data:</strong> Pages Visited, Time Spent, Interactions.</li>
                <li><strong>Cookies & Tracking:</strong> Used for analytics and website enhancement.</li>
            </ul>
        )
    },
    {
        title: '2. How We Use Your Information',
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving services.</li>
                <li>Processing transactions and customer support.</li>
                <li>Personalizing user experience.</li>
                <li>Ensuring security and compliance.</li>
            </ul>
        )
    },
    {
        title: '3. Data Security & Retention',
        content: (
            <p>We implement security measures such as encryption and secure storage. Your data is retained only as long as necessary for legal and operational purposes.</p>
        )
    },
    {
        title: '4. Your Rights & Choices',
        content: (
            <ul className="list-disc pl-6 space-y-2">
                <li>Opt-out of marketing emails.</li>
                <li>Request access, correction, or deletion of your data.</li>
                <li>Manage cookie preferences through browser settings.</li>
            </ul>
        )
    },
    {
        title: '5. Changes to This Policy',
        content: (
            <p>We may update this Privacy Policy periodically. Any changes will be posted here with an updated effective date.</p>
        )
    }
];
