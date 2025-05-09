import './Projects.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

function Projects(): JSX.Element {
  const projects = [
    {
      title: 'QuickFit – QR Restaurant System',
      desc: 'SaaS platform with QR-based ordering, menu editing, and admin dashboard.',
      tech: ['TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
      link: 'https://github.com/Tanz2024/restuarantqr',
    },
    {
      title: 'SpeakFree – Voice AI Chatbot',
      desc: 'Multilingual voice chatbot with GPT, Whisper, LangChain, LangGraph, and Pinecone.',
      tech: ['React Native', 'FastAPI', 'TypeScript', 'Pinecone', 'LangChain', 'PostgreSQL'],
      link: 'https://github.com/Tanz2024/Chatbot',
    },
    {
      title: 'IES – Intelligent Energy Saver',
      desc: 'Energy optimizer using ThingsBoard via WebSocket and ML graph models.',
      tech: ['ThingsBoard', 'TensorFlow', 'PyTorch', 'React', 'Chart.js', 'PostgreSQL', 'WebSocket', 'Azure'],
      link: 'https://github.com/Tanz2024/IES',
    },
    {
      title: 'Blog Management API – NestJS',
      desc: 'Full-featured blog system with GraphQL, Prisma, CQRS, and JWT authentication.',
      tech: ['NestJS', 'Prisma', 'PostgreSQL', 'GraphQL'],
      link: 'https://github.com/Tanz2024/NestJSBlogManagementAPI',
    },
    {
      title: 'Inventory Management System',
      desc: 'OCR-powered inventory tracker with GPT and real-time editable dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'OCR', 'GPT','Firebase'],
      link: 'https://github.com/Tanz2024/inventory-management',
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="projects-title">Featured Projects</h2>

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
        {projects.map((project, index) => (
          <SwiperSlide key={index}>
            <div className="project-card" tabIndex={0} aria-label={`Project: ${project.title}`}>
              <div className="project-header text-icon-header">
                <div className="project-title-box">{project.title}</div>
                <div className="tech-tags">
                  {project.tech.map((tech, idx) => (
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
                View Code →
              </a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="see-more">
        <a href="https://github.com/Tanz2024" className="see-more-link">
          See all projects →
        </a>
      </div>
    </section>
  );
}

export default Projects;
