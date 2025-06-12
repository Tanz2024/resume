// Skills.tsx
import React from 'react';
import './Skills.css';
import { useTranslation } from 'react-i18next';

import {
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, SiNodedotjs, SiExpress, SiNestjs,
  SiPostgresql, SiMongodb, SiMysql, SiPrisma, SiFirebase, SiExpo, SiPython, SiFastapi,
  SiFlask, SiOpenai, SiLangchain, SiDocker, SiTailwindcss, SiNumpy, SiPandas,
  SiTensorflow, SiPytorch, SiGraphql, SiWebstorm, SiC, SiCplusplus,
} from 'react-icons/si';

import { FaMobileAlt, FaAws, FaMicrosoft, FaJava } from 'react-icons/fa';
import { FiBox } from 'react-icons/fi';

const skills = [
  // Frontend & Mobile
  { name: 'React', icon: <SiReact style={{ color: '#61DBFB' }} />, url: 'https://reactjs.org/' },
  { name: 'React Native', icon: <FaMobileAlt style={{ color: '#61DBFB' }} />, url: 'https://reactnative.dev/' },
  { name: 'Next.js', icon: <SiNextdotjs style={{ color: '#000000' }} />, url: 'https://nextjs.org/' },
  { name: 'JavaScript', icon: <SiJavascript style={{ color: '#F7DF1E' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'TypeScript', icon: <SiTypescript style={{ color: '#3178C6' }} />, url: 'https://www.typescriptlang.org/' },
  { name: 'Tailwind CSS', icon: <SiTailwindcss style={{ color: '#06B6D4' }} />, url: 'https://tailwindcss.com/' },
  { name: 'Expo', icon: <SiExpo style={{ color: '#000000' }} />, url: 'https://expo.dev/' },

  // Backend & APIs
  { name: 'Node.js', icon: <SiNodedotjs style={{ color: '#43853D' }} />, url: 'https://nodejs.org/' },
  { name: 'Express.js', icon: <SiExpress style={{ color: '#000000' }} />, url: 'https://expressjs.com/' },
  { name: 'NestJS', icon: <SiNestjs style={{ color: '#E0234E' }} />, url: 'https://nestjs.com/' },
  { name: 'FastAPI', icon: <SiFastapi style={{ color: '#009688' }} />, url: 'https://fastapi.tiangolo.com/' },
  { name: 'Flask', icon: <SiFlask style={{ color: '#000000' }} />, url: 'https://flask.palletsprojects.com/' },
  { name: 'REST APIs', icon: <FiBox style={{ color: '#6366F1' }} />, url: 'https://restfulapi.net/' },
  { name: 'GraphQL', icon: <SiGraphql style={{ color: '#E10098' }} />, url: 'https://graphql.org/' },
  { name: 'WebSockets', icon: <SiWebstorm style={{ color: '#00C7B7' }} />, url: 'https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API' },

  // Databases & ORMs
  { name: 'PostgreSQL', icon: <SiPostgresql style={{ color: '#336791' }} />, url: 'https://www.postgresql.org/' },
  { name: 'MongoDB', icon: <SiMongodb style={{ color: '#47A248' }} />, url: 'https://www.mongodb.com/' },
  { name: 'MySQL', icon: <SiMysql style={{ color: '#00758F' }} />, url: 'https://www.mysql.com/' },
  { name: 'Prisma', icon: <SiPrisma style={{ color: '#0C344B' }} />, url: 'https://www.prisma.io/' },

  // Programming Languages
  { name: 'Python', icon: <SiPython style={{ color: '#3776AB' }} />, url: 'https://www.python.org/' },
  { name: 'C', icon: <SiC style={{ color: '#555555' }} />, url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
  { name: 'C++', icon: <SiCplusplus style={{ color: '#00599C' }} />, url: 'https://isocpp.org/' },
  { name: 'Java', icon: <FaJava style={{ color: '#007396' }} />, url: 'https://www.java.com/' },

  // AI & ML
  { name: 'TensorFlow', icon: <SiTensorflow style={{ color: '#FF6F00' }} />, url: 'https://www.tensorflow.org/' },
  { name: 'PyTorch', icon: <SiPytorch style={{ color: '#EE4C2C' }} />, url: 'https://pytorch.org/' },
  { name: 'NumPy', icon: <SiNumpy style={{ color: '#013243' }} />, url: 'https://numpy.org/' },
  { name: 'Pandas', icon: <SiPandas style={{ color: '#150458' }} />, url: 'https://pandas.pydata.org/' },
  { name: 'OpenAI (Whisper)', icon: <SiOpenai style={{ color: '#412991' }} />, url: 'https://platform.openai.com/' },
  { name: 'LangChain', icon: <SiLangchain style={{ color: '#1E4D91' }} />, url: 'https://www.langchain.com/' },

  // DevOps & Cloud
  { name: 'Firebase', icon: <SiFirebase style={{ color: '#FFCA28' }} />, url: 'https://firebase.google.com/' },
  { name: 'Docker', icon: <SiDocker style={{ color: '#2496ED' }} />, url: 'https://www.docker.com/' },
  { name: 'AWS', icon: <FaAws style={{ color: '#FF9900' }} />, url: 'https://aws.amazon.com/' },
  { name: 'Azure', icon: <FaMicrosoft style={{ color: '#0078D4' }} />, url: 'https://azure.microsoft.com/' },
  { name: 'Ngrok / Render', icon: <FiBox style={{ color: '#6B7280' }} />, url: 'https://ngrok.com/' },
];

export default function Skills() {
  const { t } = useTranslation();

  return (
    <section className="skills" id="skills">
      <h2 className="skills-title">{t('skills.title')}</h2>
      <p className="skills-subtitle">{t('skills.subtitle')}</p>
      <div className="skills-grid">
        {skills.map(({ name, icon, url }) => (
          <a
            key={name}
            className="skill-badge"
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Visit ${name}`}
            title={name}
          >
            {icon}
            <span className="skill-label">{name}</span>
          </a>
        ))}
      </div>
    </section>
  );
}
