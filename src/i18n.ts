// i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      navbar: {
        home: 'Home',
        about: 'About',
        timeline: 'Timeline',
        projects: 'Projects',
        skills: 'Skills',
        contact: 'Contact',
      },
      hero: {
        greeting: "Hello, I'm",
        name: 'Tanzim Bin Zahir',
        subtitle: 'AI Engineer · Full-Stack Developer · Mobile App Enthusiast',
        based: 'Based in Malaysia',
        remote: 'Open to Remote Work',
        resume: 'Resume',
        tagline: 'Building smart, scalable software that solves real problems.',
        description: 'Turning bold ideas into reliable, high-impact web and mobile apps — powered by AI, built for the real world.'
      },
      about: {
        title: 'About Me',
        desc1: "I'm a full-stack developer and AI engineering student from Bangladesh, currently based in Malaysia. I focus on building scalable, intelligent, and user-centric software that solves real-world problems.",
        desc2: 'Whether it’s an AI-powered chatbot, a responsive dashboard, or a seamless mobile experience — I merge AI logic with thoughtful design and solid engineering to create meaningful, modern applications.',
        languages: 'Languages I Speak',
        bars: [
          { label: '🇧🇩 Bengali (Native)', title: 'Fully fluent, mother tongue' },
          { label: '🇬🇧 English (Fluent)', title: 'Professional and technical fluency' },
          { label: '🇮🇳 Hindi (Conversational)', title: 'Comfortable for daily interaction' },
          { label: '🇸🇦 Arabic (Basic)', title: 'Able to understand and express simple ideas' },
          { label: '🇲🇾 Malay (Basic)', title: 'Familiar with basic daily conversation' }
        ],
        desc3: 'Being multilingual helps me connect with people and build more inclusive products that reflect global diversity — especially here in Malaysia, where cultures and languages come together every day.'
      },
      skills: {
        title: 'My Skills',
        subtitle: 'Technologies I work with across frontend, backend, databases, AI, cloud, and APIs:',
      },
      timeline: {
        title: 'My Journey',
        experience: 'Professional Experience',
        education: 'Education',
        degreeNote: 'Double Degree Programme jointly awarded by:',
        expectedGrad: 'Expected Graduation: Aug 2025 | CGPA: 3.35',
        experienceData: [
          {
            title: 'AI & Software Development Industrial Training Program',
            company: 'SquareCloud (Malaysia) Sdn Bhd',
            date: 'September 2024 – Present',
            bullets: [
              'Developed a web-based AI chatbot using LangChain and OpenAI with multi-category responses, boosting engagement by 40%.',
              'Built a cross-platform chatbot app (React Native) with speech-to-text, text-to-speech, category selection, and Whisper AI.',
              'Created an energy monitoring system, improving efficiency tracking by 35%.',
              'Implemented an inventory system with OCR input, reducing stock discrepancies by 25%.',
            ],
          },
        ],
        educationData: [
          {
            title: 'BSc (Hons.) Computer Science (Artificial Intelligence)',
            degreeNote: 'Double Degree Programme jointly awarded by:',
            institutions: [
              { name: 'Taylor’s University (Malaysia)' },
              { name: 'University of the West of England (UWE Bristol, UK)' },
            ],
          },
        ],
      },
      projects: {
        title: 'Featured Projects',
        viewCode: 'View Code →',
        seeAll: 'See all projects →',
      },
      contact: {
        title: 'Contact Me',
        maintenance: '⚠️ Temporary Notice: This contact form is currently undergoing maintenance.',
        email: 'Please reach out directly via email at:',
        yourName: 'Your Name',
        yourGmail: 'Your Gmail',
        yourMessage: 'Your Message',
        charCount: 'characters',
        unavailable: 'Contact Temporarily Unavailable',
      },
      footer: {
        copyright: 'All rights reserved.',
        backToTop: 'Back to Top',
        call: 'Call',
        whatsapp: 'WhatsApp',
        email: 'Email',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        languageLabel: 'English',
      },
      projectsList: [
        {
          title: 'Transport Management System',
          tech: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL'],
          desc: 'A robust backend for managing transport operations, built with Node.js, Express.js, and TypeScript. Features RESTful APIs for vehicles, routes, schedules, and bookings, with PostgreSQL for reliable data storage. Designed for scalability and security.',
          view: 'View Code →',
          link: 'https://github.com/Tanz2024/transport'
        },
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
        {
          title: 'Transport Management System',
          desc: 'Backend for transport operations with TypeScript, Node.js, Express.js, Stripe, and PostgreSQL. Deployed on Render.',
          tech: ['TypeScript', 'Node.js', 'Express.js', 'Stripe', 'PostgreSQL', 'Render'],
          link: 'https://github.com/Tanz2024/transport',
        },
      ]
    }
  },
  ms: {
    translation: {
      navbar: {
        home: 'Laman Utama',
        about: 'Tentang',
        timeline: 'Garis Masa',
        projects: 'Projek',
        skills: 'Kemahiran',
        contact: 'Hubungi',
      },
      hero: {
        greeting: 'Hai, saya',
        name: 'Tanzim Bin Zahir',
        subtitle: 'Jurutera AI · Pembangun Full-Stack · Peminat Aplikasi Mudah Alih',
        based: 'Berasaskan di Malaysia',
        remote: 'Terbuka untuk Kerja Jarak Jauh',
        resume: 'Resume',
        tagline: 'Membina perisian pintar dan berskala yang menyelesaikan masalah sebenar.',
        description: 'Menukar idea berani menjadi aplikasi web dan mudah alih yang boleh dipercayai dan berimpak tinggi — dikuasakan oleh AI, dibina untuk dunia sebenar.'
      },
      about: {
        title: 'Tentang Saya',
        desc1: 'Saya seorang pembangun full-stack dan pelajar kejuruteraan AI dari Bangladesh, kini menetap di Malaysia. Saya fokus membina perisian yang berskala, pintar, dan berpusatkan pengguna untuk menyelesaikan masalah dunia sebenar.',
        desc2: 'Sama ada chatbot berkuasa AI, papan pemuka responsif, atau pengalaman mudah alih yang lancar — saya menggabungkan logik AI dengan reka bentuk yang teliti dan kejuruteraan kukuh untuk mencipta aplikasi moden yang bermakna.',
        languages: 'Bahasa yang Saya Tutur',
        bars: [
          { label: '🇧🇩 Bengali (Asli)', title: 'Fasih sepenuhnya, bahasa ibunda' },
          { label: '🇬🇧 Inggeris (Fasih)', title: 'Fasih profesional dan teknikal' },
          { label: '🇮🇳 Hindi (Perbualan)', title: 'Selesa untuk interaksi harian' },
          { label: '🇸🇦 Arab (Asas)', title: 'Boleh faham dan menyatakan idea ringkas' },
          { label: '🇲🇾 Melayu (Asas)', title: 'Biasa dengan perbualan harian asas' }
        ],
        desc3: 'Menjadi berbilang bahasa membantu saya berhubung dengan orang ramai dan membina produk yang lebih inklusif yang mencerminkan kepelbagaian global — terutamanya di Malaysia, di mana budaya dan bahasa bersatu setiap hari.'
      },
      skills: {
        title: 'Kemahiran Saya',
        subtitle: 'Teknologi yang saya gunakan merangkumi frontend, backend, pangkalan data, AI, awan, dan API:',
      },
      timeline: {
        title: 'Perjalanan Saya',
        experience: 'Pengalaman Profesional',
        education: 'Pendidikan',
        degreeNote: 'Program Ijazah Berkembar dianugerahkan bersama oleh:',
        expectedGrad: 'Jangkaan Graduasi: Ogos 2025 | PNGK: 3.35',
        experienceData: [
          {
            title: 'Latihan Industri AI & Pembangunan Perisian',
            company: 'SquareCloud (Malaysia) Sdn Bhd',
            date: 'September 2024 – Kini',
            bullets: [
              'Membangunkan chatbot AI berasaskan web menggunakan LangChain dan OpenAI dengan pelbagai kategori respons, meningkatkan penglibatan sebanyak 40%.',
              'Membina aplikasi chatbot rentas platform (React Native) dengan pertuturan ke teks, teks ke pertuturan, pemilihan kategori, dan Whisper AI.',
              'Mencipta sistem pemantauan tenaga, meningkatkan penjejakan kecekapan sebanyak 35%.',
              'Melaksanakan sistem inventori dengan input OCR, mengurangkan ketidakcocokan stok sebanyak 25%.',
            ],
          },
        ],
        educationData: [
          {
            title: 'Ijazah Sarjana Muda Sains Komputer (Kepintaran Buatan)',
            degreeNote: 'Program Ijazah Berkembar dianugerahkan bersama oleh:',
            institutions: [
              { name: 'Taylor’s University (Malaysia)' },
              { name: 'University of the West of England (UWE Bristol, UK)' },
            ],
          },
        ],
      },
      projects: {
        title: 'Projek Pilihan',
        viewCode: 'Lihat Kod →',
        seeAll: 'Lihat semua projek →',
      },
      contact: {
        title: 'Hubungi Saya',
        maintenance: '⚠️ Notis Sementara: Borang ini sedang diselenggara.',
        email: 'Sila hubungi terus melalui emel di:',
        yourName: 'Nama Anda',
        yourGmail: 'Gmail Anda',
        yourMessage: 'Mesej Anda',
        charCount: 'aksara',
        unavailable: 'Hubungi Tidak Tersedia Sementara',
      },
      footer: {
        copyright: 'Hak cipta terpelihara.',
        backToTop: 'Kembali ke Atas',
        call: 'Panggil',
        whatsapp: 'WhatsApp',
        email: 'Emel',
        github: 'GitHub',
        linkedin: 'LinkedIn',
        languageLabel: 'Bahasa Melayu',
      },
      projectsList: [
        {
          title: 'Sistem Pengurusan Pengangkutan',
          tech: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL'],
          desc: 'Backend pengurusan pengangkutan yang mantap menggunakan Node.js, Express.js, dan TypeScript. Menyediakan RESTful API untuk kenderaan, laluan, jadual, dan tempahan, dengan PostgreSQL untuk penyimpanan data yang boleh dipercayai. Direka untuk skala dan keselamatan.',
          view: 'Lihat Kod →',
          link: 'https://github.com/Tanz2024/transport'
        },
        {
          title: 'QuickFit – Sistem Restoran QR',
          desc: 'Platform SaaS dengan pesanan berasaskan QR, penyuntingan menu, dan papan pemuka pentadbir.',
          tech: ['TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
          link: 'https://github.com/Tanz2024/restuarantqr',
        },
        {
          title: 'SpeakFree – Chatbot AI Suara',
          desc: 'Chatbot suara pelbagai bahasa dengan GPT, Whisper, LangChain, LangGraph, dan Pinecone.',
          tech: ['React Native', 'FastAPI', 'TypeScript', 'Pinecone', 'LangChain', 'PostgreSQL'],
          link: 'https://github.com/Tanz2024/Chatbot',
        },
        {
          title: 'IES – Penjimat Tenaga Pintar',
          desc: 'Pengoptimum tenaga menggunakan ThingsBoard melalui WebSocket dan model graf ML.',
          tech: ['ThingsBoard', 'TensorFlow', 'PyTorch', 'React', 'Chart.js', 'PostgreSQL', 'WebSocket', 'Azure'],
          link: 'https://github.com/Tanz2024/IES',
        },
        {
          title: 'API Pengurusan Blog – NestJS',
          desc: 'Sistem blog lengkap dengan GraphQL, Prisma, CQRS, dan pengesahan JWT.',
          tech: ['NestJS', 'Prisma', 'PostgreSQL', 'GraphQL'],
          link: 'https://github.com/Tanz2024/NestJSBlogManagementAPI',
        },
        {
          title: 'Sistem Pengurusan Inventori',
          desc: 'Penjejak inventori berkuasa OCR dengan GPT dan papan pemuka boleh sunting masa nyata.',
          tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'OCR', 'GPT','Firebase'],
          link: 'https://github.com/Tanz2024/inventory-management',
        },
        {
          title: 'Sistem Pengurusan Pengangkutan',
          desc: 'Backend pengurusan pengangkutan dengan TypeScript, Node.js, Express.js, Stripe, dan PostgreSQL. Dideploy di Render.',
          tech: ['TypeScript', 'Node.js', 'Express.js', 'Stripe', 'PostgreSQL', 'Render'],
          link: 'https://github.com/Tanz2024/transport',
        },
      ]
    }
  },
  zh: {
    translation: {
      navbar: {
        home: '首页',
        about: '关于',
        timeline: '时间线',
        projects: '项目',
        skills: '技能',
        contact: '联系',
      },
      hero: {
        greeting: '你好，我是',
        name: 'Tanzim Bin Zahir',
        subtitle: 'AI工程师 · 全栈开发者 · 移动应用爱好者',
        based: '常驻马来西亚',
        remote: '接受远程工作',
        resume: '简历',
        tagline: '构建智能、可扩展、解决实际问题的软件。',
        description: '将大胆想法变为可靠且高影响力的Web和移动应用——由AI驱动，为现实世界而建。'
      },
      about: {
        title: '关于我',
        desc1: '我是一名来自孟加拉国的全栈开发者和AI工程专业学生，目前居住在马来西亚。专注于构建可扩展、智能、以用户为中心的软件，解决现实世界问题。',
        desc2: '无论是AI驱动的聊天机器人、响应式仪表盘，还是无缝的移动体验——我将AI逻辑与用心设计和扎实工程相结合，打造有意义的现代应用。',
        languages: '我会的语言',
        bars: [
          { label: '🇧🇩 孟加拉语（母语）', title: '完全流利，母语' },
          { label: '🇬🇧 英语（流利）', title: '专业和技术流利' },
          { label: '🇮🇳 印地语（日常交流）', title: '日常交流无障碍' },
          { label: '🇸🇦 阿拉伯语（基础）', title: '能理解和表达简单想法' },
          { label: '🇲🇾 马来语（基础）', title: '熟悉日常基本对话' }
        ],
        desc3: '多语言能力帮助我与更多人沟通，打造更具包容性的产品，体现全球多样性——尤其在马来西亚，文化与语言每天交融。'
      },
      skills: {
        title: '我的技能',
        subtitle: '我在前端、后端、数据库、AI、云和API等领域使用的技术：',
      },
      timeline: {
        title: '我的旅程',
        experience: '工作经历',
        education: '教育',
        degreeNote: '双学位项目联合颁发：',
        expectedGrad: '预计毕业：2025年8月 | CGPA: 3.35',
        experienceData: [
          {
            title: 'AI与软件开发实习项目',
            company: 'SquareCloud（马来西亚）有限公司',
            date: '2024年9月 – 至今',
            bullets: [
              '开发了基于LangChain和OpenAI的网页AI聊天机器人，支持多类别回复，用户参与度提升40%。',
              '构建了跨平台聊天机器人应用（React Native），集成语音转文字、文字转语音、类别选择和Whisper AI。',
              '创建了能效监控系统，效率追踪提升35%。',
              '实现了带OCR输入的库存系统，库存差异减少25%。',
            ],
          },
        ],
        educationData: [
          {
            title: '计算机科学（人工智能）荣誉学士',
            degreeNote: '双学位项目联合颁发：',
            institutions: [
              { name: '泰莱大学（马来西亚）' },
              { name: '西英格兰大学（英国布里斯托尔）' },
            ],
          },
        ],
      },
      projects: {
        title: '精选项目',
        viewCode: '查看代码 →',
        seeAll: '查看所有项目 →',
      },
      contact: {
        title: '联系我',
        maintenance: '⚠️ 临时通知：此联系表单正在维护中。',
        email: '请直接通过邮箱联系：',
        yourName: '您的姓名',
        yourGmail: '您的Gmail',
        yourMessage: '您的信息',
        charCount: '字符',
        unavailable: '暂时无法联系',
      },
      footer: {
        copyright: '版权所有。',
        backToTop: '回到顶部',
        call: '电话',
        whatsapp: 'WhatsApp',
        email: '邮箱',
        github: 'GitHub',
        linkedin: '领英',
        languageLabel: '中文',
      },
      projectsList: [
        {
          title: '运输管理系统',
          tech: ['Node.js', 'Express.js', 'TypeScript', 'PostgreSQL'],
          desc: '基于Node.js、Express.js和TypeScript开发的高性能运输管理后端，提供车辆、路线、时刻表和预订的RESTful API。集成PostgreSQL实现可靠数据存储，具备高扩展性和安全性设计。',
          view: '查看代码 →',
          link: 'https://github.com/Tanz2024/transport'
        },
        {
          title: 'QuickFit – QR餐厅系统',
          desc: '基于QR码点餐、菜单编辑和管理后台的SaaS平台。',
          tech: ['TypeScript', 'Node.js', 'Express.js', 'Tailwind CSS'],
          link: 'https://github.com/Tanz2024/restuarantqr',
        },
        {
          title: 'SpeakFree – 语音AI聊天机器人',
          desc: '多语言语音聊天机器人，集成GPT、Whisper、LangChain、LangGraph和Pinecone。',
          tech: ['React Native', 'FastAPI', 'TypeScript', 'Pinecone', 'LangChain', 'PostgreSQL'],
          link: 'https://github.com/Tanz2024/Chatbot',
        },
        {
          title: 'IES – 智能节能系统',
          desc: '通过ThingsBoard和WebSocket及ML图模型实现的能耗优化器。',
          tech: ['ThingsBoard', 'TensorFlow', 'PyTorch', 'React', 'Chart.js', 'PostgreSQL', 'WebSocket', 'Azure'],
          link: 'https://github.com/Tanz2024/IES',
        },
        {
          title: '博客管理API – NestJS',
          desc: '功能齐全的博客系统，支持GraphQL、Prisma、CQRS和JWT认证。',
          tech: ['NestJS', 'Prisma', 'PostgreSQL', 'GraphQL'],
          link: 'https://github.com/Tanz2024/NestJSBlogManagementAPI',
        },
        {
          title: '库存管理系统',
          desc: '基于OCR的库存追踪器，集成GPT和实时可编辑仪表盘。',
          tech: ['React', 'Node.js', 'PostgreSQL', 'REST API', 'OCR', 'GPT','Firebase'],
          link: 'https://github.com/Tanz2024/inventory-management',
        },
        {
          title: '运输管理系统',
          desc: '基于TypeScript、Node.js、Express.js、Stripe和PostgreSQL的运输管理后端，部署在Render。',
          tech: ['TypeScript', 'Node.js', 'Express.js', 'Stripe', 'PostgreSQL', 'Render'],
          link: 'https://github.com/Tanz2024/transport',
        },
      ]
    }
  }
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;