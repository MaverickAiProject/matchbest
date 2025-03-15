import { FiCheckCircle, FiSmartphone, FiGlobe, FiShoppingCart, FiZap, FiShield, FiCode } from 'react-icons/fi'
import LayoutProvider from '@/components/layout/LayoutProvider'
import Button from '@/components/Button'

export default function AppDevelopmentPage() {
    return (
        <div className="space-y-20 pb-7 pt-12">
            {/* Hero Section */}
            <section className='relative pt-28 pb-5'>
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-[#7144a3]">
                            App Development Services
                        </h1>
                        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                            Transform Your Ideas into Powerful Mobile & Web Apps
                        </p>
                        <p className="text-lg text-gray-400 mb-8 max-w-3xl mx-auto">
                            In today’s digital world, having a high-performing mobile or web application is essential for business growth. At Matchbest Software, we specialize in custom app development that delivers seamless user experiences, top-notch security, and cutting-edge technology.
                        </p>
                        <Button />
                    </div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Why Choose Matchbest Software for App Development?
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    icon: <FiCheckCircle className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Custom App Solutions",
                                    description: "Designed to meet your unique business needs."
                                },
                                {
                                    icon: <FiSmartphone className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "User-Centric Design",
                                    description: "Intuitive interfaces for better engagement."
                                },
                                {
                                    icon: <FiZap className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Scalability & Performance",
                                    description: "Apps built to handle high traffic."
                                },
                                {
                                    icon: <FiGlobe className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Cross-Platform Compatibility",
                                    description: "Develop once, deploy on iOS, Android & Web."
                                },
                                {
                                    icon: <FiShield className="w-12 h-12 mb-4 text-[#B372CF]" />,
                                    title: "Robust Security & Compliance",
                                    description: "Ensuring data protection and regulatory compliance."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors">
                                    {item.icon}
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Our App Development Services Section */}
            <section className="py-10">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Our App Development Services
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    title: "Mobile App Development",
                                    description: "Native apps for iOS and Android, cross-platform apps with React Native and Flutter, and custom mobile solutions."
                                },
                                {
                                    title: "Web App Development",
                                    description: "Progressive Web Apps (PWAs), SaaS platforms, and enterprise web apps with scalable solutions."
                                },
                                {
                                    title: "E-Commerce App Development",
                                    description: "Mobile shopping apps with secure payment integrations and inventory management."
                                },
                                {
                                    title: "AI-Powered & IoT App Development",
                                    description: "AI-driven apps, IoT-enabled solutions, and machine learning integration for personalized experiences."
                                },
                                {
                                    title: "App Maintenance & Optimization",
                                    description: "Performance optimization, feature updates, and security enhancements for your apps."
                                }
                            ].map((item, index) => (
                                <div key={index} className="p-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors">
                                    <h3 className="text-xl font-semibold mb-4 text-[#B372CF]">{item.title}</h3>
                                    <p className="text-gray-300">{item.description}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* Industries We Serve Section */}
            <section className="py-20 bg-[#0F0722]/50">
                <LayoutProvider>
                    <div className="container mx-auto px-4">
                        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Industries We Serve
                        </h2>

                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
                            {[
                                { icon: "🏦", title: "FinTech" },
                                { icon: "🛒", title: "E-Commerce" },
                                { icon: "🚀", title: "Startups" },
                                { icon: "🏥", title: "Healthcare" },
                                { icon: "🎓", title: "Education" }
                            ].map((item, index) => (
                                <div key={index} className="sm:p-8 p-2 py-6 sm:py-8 rounded-xl bg-[#472283]/10 border border-[#472283]/30 hover:border-[#B372CF]/50 transition-colors text-center">
                                    <div className="text-4xl mb-4">{item.icon}</div>
                                    <h3 className="sm:text-xl text-base font-semibold text-[#B372CF]">{item.title}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </LayoutProvider>
            </section>

            {/* CTA Section */}
            <section className="pb-20 pt-5">
                <div className="container mx-auto px-4">
                    <div className="max-w-2xl mx-auto text-center">
                        <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-[#B372CF] to-[#472283] bg-clip-text text-transparent">
                            Ready to Build Your Dream App?
                        </h2>
                        <p className="text-xl text-gray-300 mb-8">
                            Whether you need a business app, e-commerce store, or AI-powered mobile solution, Matchbest Software is here to bring your vision to life.
                        </p>
                        <Button className="bg-gradient-to-r from-[#472283] to-[#B372CF] hover:from-[#5A2DA3] hover:to-[#8A4EBF] px-8 py-4 text-lg">
                            Contact Us
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}