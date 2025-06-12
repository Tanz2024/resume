import './About.css';
import { FaLanguage } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
import React from 'react';

function About() {
  const { t } = useTranslation();
  const bars = Array.isArray(t('about.bars', { returnObjects: true })) ? t('about.bars', { returnObjects: true }) : [];

  const getBarClass = (label: string) => {
    if (label.includes('Bengali') || label.includes('孟加拉')) return 'bengali';
    if (label.includes('English') || label.includes('Inggeris') || label.includes('英语')) return 'english';
    if (label.includes('Hindi') || label.includes('Hindi') || label.includes('印地语')) return 'hindi';
    if (label.includes('Arabic') || label.includes('Arab') || label.includes('阿拉伯语')) return 'arabic';
    if (label.includes('Malay') || label.includes('Melayu') || label.includes('马来语')) return 'malay';
    return '';
  };

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <h2 className="about-title">{t('about.title')}</h2>

        <p className="about-description">{t('about.desc1')}</p>

        <p className="about-description">{t('about.desc2')}</p>

        <h4 className="lang-label">
          <FaLanguage style={{ marginRight: '0.5rem' }} />
          {t('about.languages')}
        </h4>

        <div className="lang-bars">
          {Array.isArray(bars) && bars.map((bar: any, idx: number) => (
            <LanguageBar key={idx} label={bar.label} level={bar.level || 'basic'} title={bar.title} barClass={getBarClass(bar.label)} />
          ))}
        </div>

        <p className="about-description">{t('about.desc3')}</p>
      </div>
    </section>
  );
}

function LanguageBar({ label, level, title, barClass }: { label: string; level: string; title: string; barClass?: string }) {
  return (
    <div className="lang-bar" title={title}>
      <span className="lang-title">{label}</span>
      <div className="bar">
        <div className={`fill ${level} ${barClass || ''}`}></div>
      </div>
    </div>
  );
}

export default About;
