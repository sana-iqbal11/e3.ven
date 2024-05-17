import ContactSection from "@/components/home/contactSection";
import IntroSection from "@/components/home/introSection";
import PartnersSection from "@/components/home/partnersSection";
import SupportSection from "@/components/home/supportSection";
import WhatWeDoSection from "@/components/home/whatWeDoSection";
import WhySection from "@/components/home/whySection";
import Footer from "@/components/base/footer";

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-start">
            <IntroSection />
            <SupportSection />
            <WhatWeDoSection />
            <WhySection />
            <PartnersSection />
            <ContactSection />
            <Footer/>
        </main>
    );
}
