import SiteScripts from '../components/SiteScripts';
import Grain from '../components/Grain';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import Ticker from '../components/Ticker';
import WhySection from '../components/WhySection';
import ScienceSection from '../components/ScienceSection';
import LayersSection from '../components/LayersSection';
import RitualAndDeviceSection from '../components/RitualAndDeviceSection';
import StepsSection from '../components/StepsSection';
import TestimonialsSection from '../components/TestimonialsSection';
import AppShowcaseSection from '../components/AppShowcaseSection';
import PressSection from '../components/PressSection';
import ShopSection from '../components/ShopSection';
import FAQSection from '../components/FAQSection';
import FinalCTASection from '../components/FinalCTASection';
import Footer from '../components/Footer';
import CartOverlay from '../components/CartOverlay';
import CartDrawer from '../components/CartDrawer';

export default function Home() {
  return (
    <>
      <Grain />
      <AnnouncementBar />
      <Navbar />
      <HeroSection />
      <Ticker />
      <WhySection />
      <ScienceSection />
      <LayersSection />
      <RitualAndDeviceSection />
      <StepsSection />
      <TestimonialsSection />
      <AppShowcaseSection />
      <PressSection />
      <ShopSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
      <CartOverlay />
      <CartDrawer />
      <SiteScripts />
    </>
  );
}
