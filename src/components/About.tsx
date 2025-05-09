import './About.css';
import { FaLanguage } from 'react-icons/fa';

function About(): JSX.Element {
  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>

        <p className="about-description">
          I'm a full-stack developer and AI engineering student from <span className="highlight">Bangladesh</span>, currently based in <span className="highlight">Malaysia</span>. I focus on building <span className="highlight">scalable</span>, <span className="highlight">intelligent</span>, and <span className="highlight">user-centric</span> software that solves real-world problems.
        </p>

        <p className="about-description">
          Whether it’s an AI-powered chatbot, a responsive dashboard, or a seamless mobile experience — I merge <span className="highlight">AI logic</span> with thoughtful design and solid engineering to create meaningful, modern applications.
        </p>

        <h4 className="lang-label">
          <FaLanguage style={{ marginRight: '0.5rem' }} />
          Languages I Speak
        </h4>

        <div className="lang-bars">
          <LanguageBar label="🇧🇩 Bengali (Native)" level="native" title="Fully fluent, mother tongue" />
          <LanguageBar label="🇬🇧 English (Fluent)" level="fluent" title="Professional and technical fluency" />
          <LanguageBar label="🇮🇳 Hindi (Conversational)" level="conversational" title="Comfortable for daily interaction" />
          <LanguageBar label="🇸🇦 Arabic (Basic)" level="basic" title="Able to understand and express simple ideas" />
          <LanguageBar label="🇲🇾 Malay (Basic)" level="basic" title="Familiar with basic daily conversation" />
        </div>

        <p className="about-description">
          Being multilingual helps me connect with people and build more inclusive products that reflect global diversity — especially here in <span className="highlight">Malaysia</span>, where cultures and languages come together every day.
        </p>
      </div>
    </section>
  );
}

function LanguageBar({ label, level, title }: { label: string; level: string; title: string }): JSX.Element {
  return (
    <div className="lang-bar" title={title}>
      <span className="lang-title">{label}</span>
      <div className="bar">
        <div className={`fill ${level}`}></div>
      </div>
    </div>
  );
}

export default About;
