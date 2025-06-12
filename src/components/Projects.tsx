import React from 'react';
import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { useTranslation } from 'react-i18next';

function Projects() {
  const { t } = useTranslation();
  const projects = t('projectsList', { returnObjects: true }) || [];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">{t('projects.title')}</h2>

      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={20}
        loop={false}
        grabCursor={true}
        autoplay={{ delay: 5000 }}
        pagination={{ clickable: true }}
        breakpoints={{
          0: { slidesPerView: 1, slidesPerGroup: 1 },
          600: { slidesPerView: 1.2, slidesPerGroup: 1 },
          768: { slidesPerView: 2, slidesPerGroup: 2 },
          1024: { slidesPerView: 3, slidesPerGroup: 3 },
        }}
        className="project-swiper"
      >
        {Array.isArray(projects) && projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card" tabIndex={0} aria-label={`Project: ${project.title}`}>
              <div className="project-header text-icon-header">
                <div className="project-title-box">{project.title}</div>
                <div className="tech-tags">
                  {project.tech.map((tech: string, idx: number) => (
                    <span className="tag" key={idx}>{tech}</span>
                  ))}
                </div>
              </div>
              <p className="project-desc">{project.desc}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-button"
              >
                {t('projects.viewCode')}
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="see-more">
        <a href="https://github.com/Tanz2024" className="see-more-link">
          {t('projects.seeAll')}
        </a>
      </div>
    </section>
  );
}

export default Projects;
