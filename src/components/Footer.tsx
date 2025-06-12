import './Footer.css';
import React, { useEffect, useRef, useState } from 'react';
import {
  FaPhoneAlt,
  FaEnvelope,
  FaGithub,
  FaArrowUp,
  FaWhatsapp,
  FaLinkedin,
} from 'react-icons/fa';
import i18n from '../i18n';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const footerRef = useRef<HTMLElement>(null);
  const [isFooterVisible, setIsFooterVisible] = useState(false);
  const [lang, setLang] = useState(i18n.language || 'en');

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

  // ✅ Google Analytics tracking for social links
  const trackSocialClick = (label: string) => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'social_link_click', {
        event_category: 'outbound',
        event_label: label,
      });
    }
  };

  const handleLangChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLang = e.target.value;
    setLang(newLang);
    i18n.changeLanguage(newLang);
  };

  return (
    <footer className="footer" ref={footerRef}>
      <div className="footer-icons">
        <a href="tel:+60109540995" title={t('footer.call')}>
          <FaPhoneAlt />
        </a>
        <a
          href="https://wa.me/60109540995"
          title={t('footer.whatsapp')}
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaWhatsapp />
        </a>
        <a href="mailto:tanzimbinzahir@gmail.com" title={t('footer.email')}>
          <FaEnvelope />
        </a>
        <a
          href="https://github.com/Tanz2024"
          title={t('footer.github')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialClick('GitHub')}
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/tanz2023/"
          title={t('footer.linkedin')}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => trackSocialClick('LinkedIn')}
        >
          <FaLinkedin />
        </a>
      </div>
      <div style={{ margin: '1.5rem 0 0.5rem' }}>
        <label
          htmlFor="lang-select"
          style={{ marginRight: 8, fontWeight: 500 }}
        >
          {t('footer.languageLabel', 'Language:')}
        </label>
        <select
          id="lang-select"
          value={lang}
          onChange={handleLangChange}
          style={{
            padding: '0.4em 1em',
            borderRadius: 6,
            border: '1px solid #ccc',
            fontWeight: 500,
          }}
        >
          <option value="en">EN</option>
          <option value="ms">BM</option>
          <option value="zh">中文</option>
        </select>
      </div>
      <p className="copyright">
        &copy; {new Date().getFullYear()} Tanzim Bin Zahir — {t('footer.copyright')}
      </p>
      {isFooterVisible && (
        <button
          className="scroll-up-float"
          onClick={scrollToTop}
          title={t('footer.backToTop')}
        >
          <FaArrowUp />
        </button>
      )}
    </footer>
  );
}

export default Footer;
