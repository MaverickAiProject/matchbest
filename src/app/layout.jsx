import { Outfit } from "next/font/google";
import "./globals.css";
import BigNav from "@/components/layout/navbar/BigNav";
import Footer from "@/components/layout/footer/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: 'Matchbest Software - IT Services, Web Development, App Development & More',
  description: 'Matchbest Software offers comprehensive IT services, including managed IT, web development, app development, software solutions, cloud migration, and digital transformation. Partner with us for innovative technology solutions.',
  keywords: [
    'Managed IT Services',
    'Website Development',
    'App Development',
    'Software Development',
    'System Integration',
    'Cloud Migration',
    'Digital Transformation',
    'IT Consulting',
    'IT Staffing Solutions',
    'Matchbest Software'
  ],
  openGraph: {
    title: 'Matchbest Software - IT Services, Web Development, App Development & More',
    description: 'Matchbest Software offers comprehensive IT services, including managed IT, web development, app development, software solutions, cloud migration, and digital transformation. Partner with us for innovative technology solutions.',
    images: [
      {
        url: '/Logo.png',
        width: 1200,
        height: 630,
        alt: 'Matchbest Software - IT Services',
      },
    ],
    url: 'https://matchbestsoftware.com',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Matchbest Software - IT Services, Web Development, App Development & More',
    description: 'Matchbest Software offers comprehensive IT services, including managed IT, web development, app development, software solutions, cloud migration, and digital transformation. Partner with us for innovative technology solutions.',
    images: ['/Logo.png'],
  },
  alternates: {
    canonical: 'https://matchbestsoftware.com',
  },
  icons: {
    icon: '/favicon.ico',
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${outfit.className} antialiased suppressHydrationWarning`}
      >
        <BigNav />
        <div className="">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
