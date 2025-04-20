import Image from "next/image";
import Header from '@/components/Header'
import Services from '@/components/Services'
import HeroCarousel from '@/components/HeroCarousel'
import Gallery from '@/components/Gallery'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import About from "@/components/About";


export default function Home() {
  return (
    <>

      <Header />
 
         <section id="hero">
        <HeroCarousel />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="gallery">
        <Gallery />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <Footer />

    </>
  );
}
