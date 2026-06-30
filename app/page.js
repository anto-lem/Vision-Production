import Hero from "../components/Hero";
import MissionStats from "../components/MissionStats";
import ServicesGrid from "../components/ServicesGrid";
import PortfolioGrid from "../components/PortfolioGrid";
import Process from "../components/Process";
import ClientLogos from "../components/ClientLogos";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import CTABanner from "../components/CTABanner";

export default function Home() {
  return (
    <>
      <Hero />
      <MissionStats />
      <PortfolioGrid limit={3} />
      <ServicesGrid limit={3} />
      <Process />
      <ClientLogos />
      <Testimonials />
      <Pricing />
      <CTABanner />
    </>
  );
}
