
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';
import './Timeline.css';

const experienceData = [
  {
    title: 'AI & Software Development Industrial Training Program',
    company: 'SquareCloud (Malaysia) Sdn Bhd',
    companyUrl: 'https://squarecloudasia.com/presentation',
    date: 'September 2024 – Present',
    bullets: [
      'Developed a web-based AI chatbot using LangChain and OpenAI with multi-category responses, boosting engagement by 40%.',
      'Built a cross-platform chatbot app (React Native) with speech-to-text, text-to-speech, category selection, and Whisper AI.',
      'Created an energy monitoring system, improving efficiency tracking by 35%.',
      'Implemented an inventory system with OCR input, reducing stock discrepancies by 25%.',
    ],
  },
];

const educationData = [
  {
    title: 'BSc (Hons.) Computer Science (Artificial Intelligence)',
    degreeNote: 'Double Degree Programme jointly awarded by:',
    institutions: [
      {
        name: 'Taylor’s University (Malaysia)',
        url: 'https://university.taylors.edu.my',
      },
      {
        name: 'University of the West of England (UWE Bristol, UK)',
        url: 'https://www.uwe.ac.uk/',
      },
    ],
    date: 'Expected Graduation: Aug 2025 | CGPA: 3.35',
  },
];

export default function Timeline() {
  return (
    <section className="timeline" id="timeline">
      <h2 className="timeline-title">My Journey</h2>

      {/* Professional Experience */}
      <div className="timeline-section">
        <h3 className="timeline-category experience-color"><HiBriefcase /> Professional Experience</h3>
        <div className="timeline-track experience-track">
          {experienceData.map((item, idx) => (
            <article key={idx} className="timeline-item">
              <div className="timeline-dot experience-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p className="timeline-company">
                  <a
                    href={item.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="timeline-link"
                  >
                    {item.company}
                  </a>
                </p>
                <span className="timeline-date">{item.date}</span>
                <ul className="timeline-bullets">
                  {item.bullets.map((point, i) => (
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
        <h3 className="timeline-category education-color"><HiAcademicCap /> Education</h3>
        <div className="timeline-track education-track">
          {educationData.map((item, idx) => (
            <article key={idx} className="timeline-item">
              <div className="timeline-dot education-dot" />
              <div className="timeline-content">
                <h4>{item.title}</h4>
                <p className="timeline-degree-note">{item.degreeNote}</p>
                <ul className="timeline-institution-list">
                  {item.institutions.map((inst, i) => (
                    <li key={i}>
                      <a
                        href={inst.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="timeline-link"
                      >
                        {inst.name}
                      </a>
                    </li>
                  ))}
                </ul>
                <span className="timeline-date">{item.date}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
