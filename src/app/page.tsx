import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero/hero";
import WhyUsSection from "@/components/landing/why-us/why-us";

export default function Home() {
  return (
    <>
      <Header />
      <main className="p-6 max-sm:p-3">
        <Hero />
        <WhyUsSection />
      </main>
    </>
  );
}