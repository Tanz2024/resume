import './Hero.css';
import { MdLocationPin } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import profileImg from '../assets/Profile.pic.jpg';
import { useTranslation } from 'react-i18next';

function Hero(): JSX.Element {
  const { t } = useTranslation();
  const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

  // ✅ Track both view + download from single click
  const handleResumeClick = () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'view_resume', {
        event_category: 'engagement',
        event_label: 'Resume Viewed via Single Button',
      });

      window.gtag('event', 'download_resume', {
        event_category: 'engagement',
        event_label: 'Hero Resume Button',
      });
    }
  };

  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="image-content">
          <img
            src={profileImg}
            alt="Tanzim Bin Zahir Profile"
            loading="lazy"
            className="profile-img"
          />
        </div>

        {/* Intro */}
        <div className="text-content">
          <h1 className="intro">
            <span className="intro-greeting">{t('hero.greeting')}</span>{' '}
            <span className="hero-name">{t('hero.name')}</span>
          </h1>

          <p className="hero-subtitle">
            <strong>{t('hero.subtitle')}</strong>
          </p>

          {/* Tags */}
          <div className="hero-tags">
            <a
              className="tag"
              href="https://www.google.com/maps/place/Kuala+Lumpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationPin /> {t('hero.based')}
            </a>

            <span className="tag">
              <FaLaptopCode /> {t('hero.remote')}
            </span>

            {/* Combined View + Download */}
            <a
              className="tag"
              href={resumeUrl}
              download="TanzimBinZahir_resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleResumeClick}
            >
              <HiDownload /> {t('hero.resume')}
            </a>
          </div>

          <p className="hero-tagline">{t('hero.tagline')}</p>

          <p className="hero-description">{t('hero.description')}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
