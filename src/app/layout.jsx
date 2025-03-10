import { Outfit } from "next/font/google";
import "./globals.css";
import BigNav from "@/components/layout/navbar/BigNav";
import Footer from "@/components/layout/footer/Footer";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
  title: "IT Solutions",
  description: "Matchbest Software IT Solutions",
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
