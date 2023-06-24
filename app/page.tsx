import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import Pricing from "@/components/Pricing";
import Stats from "@/components/Stats";

export default function Home() {
    return (
        <main>
            <Hero />
            <Features />
            <Stats />
            <HowItWorks />
            <Contact />
        </main>
    );
}
