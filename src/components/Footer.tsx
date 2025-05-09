import './Footer.css';
import { useEffect, useRef, useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaArrowUp,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';

function Footer(): JSX.Element {
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setIsFooterVisible(entry.isIntersecting),
      { threshold: 0.25 }
    );
    if (footerRef.current) observer.observe(footerRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-icons">
        <a href="tel:+60109540995" title="Call">
          <FaPhoneAlt />
        </a>
        <a href="https://wa.me/60109540995" title="WhatsApp" target="_blank" rel="noopener noreferrer">
          <FaWhatsapp />
        </a>
        <a href="mailto:tanzimbinzahir@gmail.com" title="Email">
          <FaEnvelope />
        </a>
        <a href="https://github.com/Tanz2024" title="GitHub" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/tanz2023/" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
        </a>
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} Tanzim Bin Zahir — All rights reserved.
      </p>

      {isFooterVisible && (
        <button
          className="scroll-up-float"
          onClick={scrollToTop}
          title="Back to Top"
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;
