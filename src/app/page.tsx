import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustIndicators from "@/components/TrustIndicators";
import Services from "@/components/Services";
import Pricing from "@/components/Pricing";
import Portfolio from "@/components/Portfolio";
import Comparison from "@/components/Comparison";
import CaseStudy from "@/components/CaseStudy";
import WhyChooseUs from "@/components/WhyChooseUs";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import OrderForm from "@/components/OrderForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <TrustIndicators />
      <Services />
      <Pricing />
      <Portfolio />
      <Comparison />
      <CaseStudy />
      <WhyChooseUs />
      <Process />
      <Testimonials />
      <OrderForm />
      <CTA />
      <Footer />
      <FloatingWhatsApp />
    </main>
  );
}
