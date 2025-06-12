import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import { useTranslation } from 'react-i18next';
import './Timeline.css';

export default function Timeline() {
  const { t } = useTranslation();

  // Use translated experience and education data
  const experienceData = t('timeline.experienceData', { returnObjects: true }) || [];
  const educationData = t('timeline.educationData', { returnObjects: true }) || [];

  return (
    <section className="timeline" id="timeline">
      <h2 className="timeline-title">{t('timeline.title')}</h2>

      {/* Professional Experience */}
      <div className="timeline-section">
        <h3 className="timeline-category experience-color"><HiBriefcase /> {t('timeline.experience')}</h3>
        <div className="timeline-track experience-track">
          {Array.isArray(experienceData) && experienceData.map((item, idx) => (
            <article key={idx} className="timeline-item">
              <div className="timeline-dot experience-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p className="timeline-company">
                  {item.company}
                </p>
                <span className="timeline-date">{item.date}</span>
                <ul className="timeline-bullets">
                  {item.bullets && item.bullets.map((point: string, i: number) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Education */}
      <div className="timeline-section">
        <h3 className="timeline-category education-color"><HiAcademicCap /> {t('timeline.education')}</h3>
        <div className="timeline-track education-track">
          {Array.isArray(educationData) && educationData.map((item, idx) => (
            <article key={idx} className="timeline-item">
              <div className="timeline-dot education-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p className="timeline-degree-note">{item.degreeNote}</p>
                <ul className="timeline-institution-list">
                  {item.institutions && item.institutions.map((inst: any, i: number) => (
                    <li key={i}>{inst.name}</li>
                  ))}
                </ul>
                {/* Use item.date if present, else fallback to t('timeline.expectedGrad') */}
                <span className="timeline-date">{item.date || t('timeline.expectedGrad')}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
