import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero/hero";
import AboutUsSection from "@/components/landing/about-us/about-us";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 max-sm:p-3">
        <Hero />
        <AboutUsSection />
      </main>
    </>
  );
}