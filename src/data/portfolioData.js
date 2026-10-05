export const personalInfo = {
  name: "Aditya Patwa",
  title: "Software Engineer & Full Stack Web Developer",
  tagline: "Crafting scalable web architectures, modern responsive interfaces, and high-performance software with clean code.",
  email: "adityapatwa4652@gmail.com",
  phone: "+91 8318564652",
  phoneRaw: "918318564652",
  address: "Ram Gulam Tola, Deoria, Uttar Pradesh, India - 274001",
  location: "Deoria, Uttar Pradesh",
  photo: "/aditya-photo.jpg",
  resume: "/aditya-resume.pdf",
  status: "Available for Full-time Roles & Freelance Projects",
  languages: [
    { name: "Hindi", level: "Native / Proficient", badge: "Fluent" },
    { name: "English", level: "Professional Working Proficiency", badge: "Proficient" }
  ],
  hobbies: [
    { name: "Traveling & Exploring", icon: "Plane", desc: "Discovering new places and cultures" },
    { name: "Music & Audio", icon: "Music", desc: "Listening to soulful and lo-fi melodies" },
    { name: "Problem Solving", icon: "Brain", desc: "Practicing algorithms and system design" },
    { name: "Tech Innovations", icon: "Cpu", desc: "Exploring emerging web and AI tools" }
  ],
  stats: [
    { number: "15+", label: "Web Apps & Projects", desc: "Designed & Deployed" },
    { number: "100%", label: "Code Quality Focus", desc: "Clean & Maintainable" },
    { number: "8+", label: "Core Technologies", desc: "Full Stack Mastery" },
    { number: "24/7", label: "Fast Communication", desc: "WhatsApp & Mail Active" }
  ]
};

export const skillsData = {
  categories: [
    {
      id: "languages",
      title: "Programming Languages",
      icon: "Code2",
      description: "Core computer science and software development languages",
      skills: [
        { name: "Python", level: 90, icon: "FileCode", experience: "Advanced", desc: "Scripting, Automation, Backend Logic" },
        { name: "JavaScript (ES6+)", level: 92, icon: "Code", experience: "Advanced", desc: "Async/Await, DOM, Modern Web APIs" },
        { name: "C++", level: 85, icon: "Cpu", experience: "Intermediate-Advanced", desc: "OOP, Data Structures, Algorithms" },
        { name: "JAVA", level: 82, icon: "Coffee", experience: "Intermediate", desc: "OOPs Concepts, Core Java, Backend Logic" },
        { name: "PHP", level: 86, icon: "Server", experience: "Intermediate-Advanced", desc: "Server-side scripts, API handling, CMS" }
      ]
    },
    {
      id: "frontend",
      title: "Frontend Engineering",
      icon: "Layout",
      description: "Modern, responsive, dynamic and animated web interfaces",
      skills: [
        { name: "React.js", level: 90, icon: "Atom", experience: "Advanced", desc: "Hooks, State Management, Component Architecture" },
        { name: "HTML5", level: 96, icon: "FileText", experience: "Expert", desc: "Semantic Markup, SEO, Accessibility" },
        { name: "CSS3 / Modern CSS", level: 94, icon: "Palette", experience: "Expert", desc: "Flexbox, CSS Grid, Glassmorphism, Animations" },
        { name: "Tailwind CSS", level: 88, icon: "Layers", experience: "Proficient", desc: "Utility-first modern design systems" },
        { name: "Responsive UI/UX", level: 95, icon: "Smartphone", experience: "Expert", desc: "Mobile-first layouts, cross-browser compatibility" }
      ]
    },
    {
      id: "database",
      title: "Database & Backend",
      icon: "Database",
      description: "Data modeling, schema design, and server-side processing",
      skills: [
        { name: "SQL Database Management", level: 88, icon: "Database", experience: "Advanced", desc: "Schema design, Complex queries, Optimization" },
        { name: "MySQL / Relational DB", level: 87, icon: "HardDrive", experience: "Proficient", desc: "CRUD operations, joins, indexing, normalization" },
        { name: "RESTful APIs", level: 85, icon: "Send", experience: "Proficient", desc: "API design, endpoints, JSON integration" }
      ]
    },
    {
      id: "tools",
      title: "Tools & Methodologies",
      icon: "Wrench",
      description: "Development workflow, version control, and collaboration",
      skills: [
        { name: "Git & GitHub", level: 90, icon: "GitBranch", experience: "Advanced", desc: "Version control, branching, PRs, collaboration" },
        { name: "VS Code", level: 95, icon: "Terminal", experience: "Expert", desc: "Debugging, extensions, optimized workflow" },
        { name: "Cross-Functional Collaboration", level: 92, icon: "Users", experience: "Proficient", desc: "UI design translation, agile sprint sync" },
        { name: "Problem Solving & DSA", level: 88, icon: "Zap", experience: "Advanced", desc: "Algorithmic thinking, optimization" }
      ]
    }
  ]
};

export const experiences = [
  {
    role: "Web Developer",
    company: "Professional Web Development & Software Services",
    period: "Recent Experience",
    type: "Full Time / Projects",
    location: "Deoria, UP, India",
    highlights: [
      "Developed and maintained high-performance web applications using HTML, CSS, JavaScript, and PHP.",
      "Collaborated closely with cross-functional teams to gather requirements and translate design concepts into pixel-perfect user interfaces.",
      "Integrated relational SQL database systems for dynamic data rendering and structured content management.",
      "Implemented responsive designs ensuring seamless usability across mobile, tablet, and desktop devices."
    ],
    tech: ["HTML5", "CSS3", "JavaScript", "PHP", "SQL", "Git", "Responsive Design"]
  }
];

export const education = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "University / Institute of Computer Applications",
    period: "Graduate",
    location: "Uttar Pradesh, India",
    details: "Comprehensive coursework in Web Development, Database Management Systems, Software Engineering Principles, Object Oriented Programming with C++, Java & Python, Data Structures & Algorithms, and Computer Applications.",
    badge: "Computer Applications (BCA)"
  }
];

export const projects = [
  {
    id: 1,
    title: "MedPulse - Healthcare & Diagnostic Management System",
    category: "Full Stack",
    description: "A comprehensive healthcare portal featuring online doctor appointment scheduling, real-time diagnostic reports management, and patient record tracking with SQL database integration.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "PHP", "SQL Database", "JavaScript", "CSS3"],
    features: [
      "Patient appointment booking with automated confirmation",
      "Secure SQL database schema for diagnostic history",
      "Dynamic doctor schedule availability manager",
      "Responsive glassmorphism dashboard"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  },
  {
    id: 2,
    title: "CloudVault - Inventory & SQL Analytics Dashboard",
    category: "Database & Python",
    description: "An enterprise-grade inventory management and analytics platform built for high-throughput transactional records, automated stock alerts, and visual performance charts.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "SQL", "Data Analytics", "JavaScript", "HTML5"],
    features: [
      "Complex SQL queries for revenue and stock trend calculation",
      "Real-time low-stock notifications and supplier management",
      "Interactive data tables with multi-column filtering and export",
      "Role-based access control for administrative staff"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  },
  {
    id: 3,
    title: "ApexCommerce - Full-Featured Modern E-Commerce Store",
    category: "Full Stack",
    description: "A responsive online shopping platform with dynamic product catalogs, category filtering, persistent cart state, and order management backend.",
    image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "PHP", "CSS3", "SQL"],
    features: [
      "Instant search and category faceted filtering",
      "Persistent cart checkout with order summary calculation",
      "Backend order dispatch and invoice generation",
      "Mobile-optimized fluid UX with touch interactions"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  },
  {
    id: 4,
    title: "AlgoVisualizer - Interactive DSA & Algorithms Platform",
    category: "Computer Science",
    description: "An educational visualizer tool demonstrating sorting algorithms (QuickSort, MergeSort), Graph traversals (BFS, DFS), and Pathfinding with step-by-step playback.",
    image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    tags: ["C++", "JavaScript", "React", "Data Structures"],
    features: [
      "Interactive speed control and custom array generators",
      "Step-by-step animation of comparison and swap states",
      "Complexity analysis breakdown (Time & Space metrics)",
      "Dark-mode code execution preview"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  },
  {
    id: 5,
    title: "TaskFlow - Agile Project & Task Orchestrator",
    category: "Web Apps",
    description: "Collaborative Kanban workspace allowing teams to assign tasks, set priority milestones, and track sprint deadlines with real-time state persistence.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
    tags: ["React", "JavaScript", "CSS Grid", "REST API"],
    features: [
      "Drag-and-drop task workflow organization",
      "Priority badges, deadline countdowns, and progress bars",
      "Local & cloud synchronization support",
      "Clean frosted-glass card design"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  },
  {
    id: 6,
    title: "Smart Automator - Python System Automation Suite",
    category: "Database & Python",
    description: "A Python utility suite automating repetitive file operations, spreadsheet transformations, database backups, and scheduled webhook triggers.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=800&q=80",
    tags: ["Python", "Automation", "SQL", "Scripts"],
    features: [
      "Automated CSV/Excel to SQL database migration scripts",
      "Scheduled data backup and email summary dispatch",
      "Robust error logging and exception recovery",
      "Configurable CLI and lightweight GUI controls"
    ],
    github: "https://github.com/adityapatwa",
    demo: "#"
  }
];
