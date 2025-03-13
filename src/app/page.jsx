// import LayoutProvider from "@/components/layout/LayoutProvider";
import { ContactSection } from "./sections/ContactSection";
import { FAQ } from "./sections/FAQ";
import Hero from "./sections/Hero";
import Reviews from "./sections/Reviews";
import Services from "./sections/Services";
import WhyChooseUs from "./sections/WhyChooseUs";

export default function Home() {
  return (
    <main className="bg-black ">
      <Hero />
      <WhyChooseUs />
      <Services />
      {/* <TrustedBy /> */}
      <Reviews />
      <FAQ />
    </main>
  )
}