
import './Hero.css';
import { MdLocationPin } from 'react-icons/md';
import { FaLaptopCode } from 'react-icons/fa';
import { HiDownload } from 'react-icons/hi';

function Hero(): JSX.Element {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        {/* Profile Image */}
        <div className="image-content">
          <img
            src="/src/assets/Profile.pic.jpg"
            alt="Tanzim Bin Zahir"
            loading="lazy"
          />
        </div>

        {/* Intro Text */}
        <div className="text-content">
          <h1 className="intro">
            <span className="intro-greeting">Hello, I'm</span>{' '}
            <span className="hero-name">Tanzim Bin Zahir</span>
          </h1>

          <p className="hero-subtitle">
            <strong>AI Engineer · Full-Stack Developer · Mobile App Enthusiast</strong>
          </p>

          {/* Tags: Location, Remote, Resume */}
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

            <a
              className="tag"
              href="/Tanzim_Bin_Zahir_Resume.pdf"
              download="Tanzim_Bin_Zahir_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <HiDownload /> Resume
            </a>
          </div>

          {/* Tagline and description */}
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
