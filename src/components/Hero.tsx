import './Hero.css';
import { MdLocationPin } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';
import profileImg from '../assets/Profile.pic.jpg';

function Hero(): JSX.Element {
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
            <span className="intro-greeting">Hello, I'm</span>{' '}
            <span className="hero-name">Tanzim Bin Zahir</span>
          </h1>

          <p className="hero-subtitle">
            <strong>AI Engineer · Full-Stack Developer · Mobile App Enthusiast</strong>
          </p>

          {/* Tags */}
          <div className="hero-tags">
            <a
              className="tag"
              href="https://www.google.com/maps/place/Kuala+Lumpur"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MdLocationPin /> Based in Malaysia
            </a>

            <span className="tag">
              <FaLaptopCode /> Open to Remote Work
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
              <HiDownload /> Resume
            </a>
          </div>

          <p className="hero-tagline">
            Building smart, scalable software that solves real problems.
          </p>

          <p className="hero-description">
            Turning bold ideas into <strong>reliable</strong>, high-impact web and mobile apps — powered by <strong>AI</strong>, built for the real world.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
