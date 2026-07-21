import Header from '../components/Header';
import Hero from '../components/Hero';
import TrustBar from '../components/TrustBar';
import Intro from '../components/Intro';
import Capabilities from '../components/Capabilities';
import Projects from '../components/Projects';
import WhyUs from '../components/WhyUs';
import Testimonials from '../components/Testimonials';
import Process from '../components/Process';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <TrustBar />
        <Intro />
        <Capabilities />
        <Projects />
        <WhyUs />
        <Testimonials />
        <Process />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
