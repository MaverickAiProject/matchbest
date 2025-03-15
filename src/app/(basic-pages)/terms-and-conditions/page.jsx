export const metadata = {
    title: 'Terms & Conditions | MatchBest Software',
    description: 'Read the Terms & Conditions of MatchBest Software to understand the rules and guidelines for using our services.',
    alternates: {
        canonical: 'https://matchbestsoftware.com/terms-conditions',
    },
}

export default function TermsConditionsPage() {
    return (
        <div className="bg-gradient-to-b from-[#0F0722] to-black text-white min-h-screen pt-14 pb-2">
            <div className="container mx-auto px-4 py-20 max-w-4xl">
                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                        Terms & Conditions
                    </h1>
                </div>

                {/* Content Sections */}
                <div className="space-y-12 text-gray-300">
                    {/* Section 1: Introduction */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">1. Introduction</h2>
                        <p>Welcome to MatchBest Software. By accessing or using our website, you agree to comply with and be bound by these Terms & Conditions. Please read them carefully.</p>
                    </section>

                    {/* Section 2: Use of Website */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">2. Use of Website</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>You must be at least the age of majority in your jurisdiction to use this website.</li>
                            <li>You agree to use our services lawfully and ethically.</li>
                            <li>Unauthorized use, including hacking or data extraction, is strictly prohibited.</li>
                        </ul>
                    </section>

                    {/* Section 3: Intellectual Property */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">3. Intellectual Property</h2>
                        <p>All content, trademarks, and materials on this website belong to MatchBest Software. You may not copy, distribute, or use any materials without our permission.</p>
                    </section>

                    {/* Section 4: User Accounts */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">4. User Accounts</h2>
                        <ul className="list-disc pl-6 space-y-4">
                            <li>You are responsible for maintaining the confidentiality of your account credentials.</li>
                            <li>We reserve the right to suspend or terminate accounts if suspicious activity is detected.</li>
                        </ul>
                    </section>

                    {/* Section 5: Limitation of Liability */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">5. Limitation of Liability</h2>
                        <p>MatchBest Software is not liable for any indirect or consequential damages resulting from the use of our services.</p>
                    </section>

                    {/* Section 6: Termination */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">6. Termination</h2>
                        <p>We reserve the right to terminate access to our services for users who violate these Terms & Conditions.</p>
                    </section>

                    {/* Section 7: Governing Law */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">7. Governing Law</h2>
                        <p>These Terms & Conditions are governed by the laws of [Your Jurisdiction].</p>
                    </section>

                    {/* Section 8: Contact Information */}
                    <section>
                        <h2 className="text-2xl font-bold mb-6 text-[#B372CF]">8. Contact Information</h2>
                        <div className="bg-[#472283]/20 p-6 rounded-lg">
                            <p className="font-semibold">MatchBest Software</p>
                            <p>Email: <a href="mailto:contact@matchbestsoftware.com" className="text-[#B372CF] hover:underline">contact@matchbestsoftware.com</a></p>

                        </div>
                    </section>

                    {/* Final Note */}
                    <section>
                        <p className="text-gray-400">By using our website, you agree to these Terms & Conditions.</p>
                    </section>
                </div>
            </div>
        </div>
    )
}
