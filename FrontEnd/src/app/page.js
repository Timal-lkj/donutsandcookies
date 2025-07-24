import Image from "next/image";
import Hero from '@/components/Hero';
import Menu from '@/components/Menu';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <div >
      <section id="testimonials">
        <Hero />
        <Menu />
        <Testimonials />
        <Contact />
      </section>
    </div>
  );
}
