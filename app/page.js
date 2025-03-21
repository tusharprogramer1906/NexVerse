import About from "./_components/About";
import { Carousel } from "./_components/Carousel";
import Contact from "./_components/Contact";
import Faq from "./_components/Faq";
import Footer from "./_components/Footer";
import Hero3 from "./_components/Hero3";
import Herofinal from "./_components/Herofinal";
import Timeliner from "./_components/Timeliner";


export default function Home() {
  return (
    <div>
      <Herofinal/>
      <About/>
      <Carousel/>
      <Timeliner/>
      <Faq/>
      <section id="contact-section">
        <Contact/>
      </section>
    </div>
  );
}
