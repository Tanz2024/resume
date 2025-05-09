import './index.css';
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Timeline from './components/Timeline';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App(): JSX.Element {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-in-out',
      offset: 50,
    });
  }, []);

  return (
    <>
      <Navbar />
      <main>
        <section data-aos="fade-up" data-aos-delay="0" data-aos-anchor-placement="top-bottom">
          <Hero />
        </section>
        <section data-aos="fade-up" data-aos-delay="100" data-aos-anchor-placement="top-bottom">
          <About />
        </section>
        <section data-aos="fade-up" data-aos-delay="200" data-aos-anchor-placement="top-bottom">
          <Timeline />
        </section>
        <section data-aos="fade-up" data-aos-delay="300" data-aos-anchor-placement="top-bottom">
          <Projects />
        </section>
        <section data-aos="fade-up" data-aos-delay="400" data-aos-anchor-placement="top-bottom">
          <Skills />
        </section>
        <section data-aos="fade-up" data-aos-delay="500" data-aos-anchor-placement="top-bottom">
          <Contact />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default App;
