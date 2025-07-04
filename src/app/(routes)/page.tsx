import TravelFooter from "@/components/molecules/footer";
import Navbar from "@/components/molecules/navbar";
import CategorySection from "@/components/organisms/category-section";
import FeatureSection from "@/components/organisms/feture-section";
import HeroSection from "@/components/organisms/hero-section";
import PromoSection from "@/components/organisms/promo-section";
import RattingSection from "@/components/organisms/ratting-section";
import TestimonialSection from "@/components/organisms/testiominal-section";
import TravelPromoCard from "@/components/organisms/travel-promo-section";
import Image from "next/image";
import BottomNav from "../components/molecules/bottom-nav";

// import CategorySection from "../components/organisms/category-section";
// import PromoSection from "../components/molecules/promo";
// import FeatureSection from "../components/organisms/feature-section";
// import RattingSection from "../components/organisms/ratting-section";
// import TestimonialSection from "../components/organisms/testimonial-section";
// import TravelPromoCard from "../components/molecules/exclusive-card";
// import TravelFooter from "../components/organisms/footer";

export default function Home() {
  return (
    <>
    <Navbar/>
    
    <main className="z-10">
      <section className="border-0 outline-0 shadow-none">
        <HeroSection/>
      </section>
     <section>
      <PromoSection/>
     </section>
       <section className=" lg:min-h-auto max-w-screen overflow-hidden">
        <CategorySection/>
      </section>
      <section className="py-12">
        <FeatureSection />
      </section>
      <section>
        <RattingSection/>
      </section>
      <section>
        <TestimonialSection/>
      </section>
      <section>
        <TravelPromoCard/>
      </section>
      </main>
      <TravelFooter/>
      <BottomNav/>
    </>
  );
}
