import Header from "@/components/landing/header/header";
import Hero from "@/components/landing/hero/hero";
import AboutUsSection from "@/components/landing/about-us/about-us";
import FeaturesSection from "@/components/landing/features-section/features-section";
import Footer from "@/components/landing/footer/footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="">
        <div className="p-6 max-sm:p-3">
          <Hero />
        </div>
        <AboutUsSection />
        <FeaturesSection />
      </main>
      <div className="p-6 max-sm:p-3">
        <Footer />
      </div>
    </>
  );
}