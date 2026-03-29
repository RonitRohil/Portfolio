const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export const heroTech = ["Node.js", "JavaScript", "PostgreSQL", "Azure", "Python"];

export const siteContent = {
  name: "Ronit Jain",
  title: "Backend Engineer",
  location: "Jaipur, Rajasthan",
  availability: "Open to Remote",
  email: "ronitrohil@gmail.com",
  tagline: ["Backend Engineer.", "Indie Builder."],
  intro:
    "I build production-grade APIs, data pipelines, and scalable backend systems - and launch products on the side.",
  resumeUrl: withBase("resume/Ronit_Jain_Resume.pdf"),
  profileImage: withBase("profile.jpg"),
  about: [
    "I'm Ronit Jain - a Backend Engineer based in Jaipur with 2+ years of experience building real-world products.",
    "By day, I'm at AKSSAI ProjExel working on FINAC - a full-featured financial accounting SaaS. I've shipped everything from bank statement parsers and GST filing pipelines to authentication systems and compliance modules.",
    "By night, I build my own products: a pilot logbook SaaS, an aviation exam prep platform, and a fintech-focused static website for a mutual fund company. I'm obsessed with the end-to-end - from API design to deployment to the product itself.",
    "I graduated from DA-IICT with a B.Tech in ICT (2024). When I'm not building, I'm designing in Figma or editing video.",
  ],
  stats: [
    { value: "2+", label: "Years of professional experience" },
    { value: "100+", label: "Production APIs shipped" },
    { value: "3", label: "Indie products in development" },
    { value: "200+", label: "Educational videos created" },
  ],
  education: [
    {
      title: "DA-IICT",
      subtitle: "B.Tech, ICT",
      meta: "2020 - 2024",
      detail: "CPI: 7.10",
    },
    {
      title: "Cambridge Court High School",
      subtitle: "Class XII",
      meta: "Jaipur",
      detail: "94%",
    },
    {
      title: "Cambridge Court High School",
      subtitle: "Class X",
      meta: "Jaipur",
      detail: "93.16%",
    },
  ],
  experience: [
    {
      role: "Software Engineer",
      company: "AKSSAI ProjExel (STCO Consulting LLP)",
      period: "Jan 2024 - Present",
      location: "Jaipur, Rajasthan",
      summary:
        "FINAC is a cloud-based financial accounting SaaS serving chartered accountants and SMEs across India. I work as a backend engineer on the FINAC platform, building and maintaining production APIs used daily by real clients.",
      stack: [
        "Node.js",
        "Flask",
        "PostgreSQL",
        "MySQL",
        "MongoDB",
        "Microsoft Azure",
        "Postman",
        "JIRA",
      ],
      bullets: [
        "Built a multi-format bank statement analyzer supporting PDF, Excel, and CSV using Python, Flask, Pandas, and pdfplumber with dynamic header detection, metadata extraction, and per-transaction confidence scoring.",
        "Integrated Pennyless API for account and IFSC validation plus UPI ID verification for transaction enrichment.",
        "Developed GSTR-1 filing and GSTR-2A/2B reconciliation modules with automated mismatch detection.",
        "Implemented E-Way Bill generation and MineTrac report generation modules.",
        "Built JWT and CSRF authentication with session tracking, email plus Google plus Apple signup flows, and duplicate detection.",
        "Shipped Recruitment Tracker, TDS Master, Timesheet Reporting, and Client Meetup Checklist modules.",
        "Resolved security issues including CORS misconfiguration, prototype pollution, and client-assign authorization gaps.",
      ],
    },
    {
      role: "Software Developer Intern",
      company: "STCO Consulting LLP",
      period: "May 2023 - Dec 2023",
      location: "Jaipur, Rajasthan",
      summary:
        "Summer internship that converted into a full-time backend engineering role.",
      bullets: [
        "Built the Job Disbursement Module with 6 REST APIs for add, update, list, shared list, fetch by ID, and approval flows.",
        "Worked with Node.js and PostgreSQL while aligning API behavior with internal product requirements.",
      ],
    },
    // {
    //   role: "Educator",
    //   company: "Excitonium (YouTube)",
    //   period: "2019 - 2022",
    //   location: "Remote",
    //   summary:
    //     "Created educational content and handled the production side of the channel.",
    //   bullets: [
    //     "Created and edited 200+ mathematics education videos for CBSE Class IX-X.",
    //     "Designed thumbnails in Adobe Photoshop and managed channel-facing content operations.",
    //   ],
    // },
  ],
  skillGroups: [
    {
      title: "Languages",
      items: [
        ["Node.js", "proficient"],
        ["Python", "proficient"],
        ["JavaScript", "proficient"],
        ["SQL", "proficient"],
        ["Java", "working"],
        // ["GraphQL", "working"],
        ["TypeScript", "learning"],
      ],
    },
    {
      title: "Databases",
      items: [
        ["PostgreSQL", "proficient"],
        ["MySQL", "proficient"],
        ["MongoDB", "proficient"],
        ["Redis", "working"],
      ],
    },
    {
      title: "Frameworks & Libraries",
      items: [
        ["Express.js", "working"],
        ["Flask", "proficient"],
        ["Pandas", "working"],
        ["pdfplumber", "working"],
        ["Mongoose", "working"],
      ],
    },
    {
      title: "Cloud & DevOps",
      items: [
        ["Microsoft Azure", "working"],
        ["Azure Blob Storage", "working"],
        ["PM2", "working"],
        ["Apache", "working"],
        ["GitHub", "proficient"],
        ["Docker", "learning"],
        ["AWS", "learning"],
      ],
    },
    {
      title: "Tools",
      items: [
        ["Postman", "proficient"],
        ["JIRA", "proficient"],
        ["VS Code", "proficient"],
        ["Figma", "working"],
        ["Canva", "working"],
        ["PgAdmin", "working"],
        ["Claude Code", "working"],
        ["Google AI Studio", "working"],
        ["OpenAI Codex", "working"],
      ],
    },
    {
      title: "Concepts",
      items: [
        ["RESTful APIs", "proficient"],
        ["Microservices", "working"],
        ["JWT / CSRF Auth", "proficient"],
        ["CORS", "proficient"],
        ["File Parsing", "proficient"],
        ["Caching", "working"],
        ["Subscription Management", "working"],
      ],
    },
  ],
  projects: [
    {
      title: "FINAC Bank Statement Analyzer",
      emoji: "🏦",
      stack: [
        "Python",
        "Flask",
        "Pandas",
        "pdfplumber",
        "Azure Blob Storage",
        "Node.js",
      ],
      description:
        "A multi-format bank statement processing pipeline built for FINAC. It accepts PDF, Excel, and CSV uploads through a Node.js dashboard, stores files in Azure Blob Storage, and processes them in a Python Flask microservice.",
      features: [
        "Modular analyzers with dynamic column and header detection instead of rigid templates",
        "Metadata extraction for account holder, IFSC code, bank name, and branch",
        "Per-transaction confidence scoring",
        "Pennyless API integration for UPI ID resolution and IFSC validation",
        "Handles statements from 10+ major Indian banks without schema changes",
      ],
      status: "Production · Used by FINAC clients",
      tone: "lime",
    },
    {
      title: "FINAC Compliance Suite",
      emoji: "📋",
      stack: ["Node.js", "PostgreSQL", "MySQL", "RESTful APIs"],
      description:
        "A collection of compliance and accounting modules shipped on the FINAC platform for daily operational workflows.",
      features: [
        "GSTR-1 filing with invoice classification and return generation",
        "GSTR-2A/2B reconciliation with mismatch detection",
        "E-Way Bill generation tied into portal workflows",
        "E-Invoicing module with IRP integration for invoice generation and cancellation",
        "TDS Master for calculation and challan management",
        "Timesheet reporting module for employee work hour tracking",
        "Client meetup checklist module for audit preparation",
        "Multiple reports and analytics modules for financial insights and operational efficiency",
      ],
      status: "Production · AKSSAI ProjExel",
      tone: "indigo",
    },
    {
      title: "Pilot Logbook SaaS",
      emoji: "✈️",
      stack: ["Node.js", "PostgreSQL", "Stripe", "React"],
      description:
        "A LogTen and FlyLog-style pilot logbook application targeting student and commercial pilots in India.",
      features: [
        "Flight log entry with ICAO airport lookup, aircraft type, and automatic hour calculation",
        "15-day free trial with monthly, annual, and lifetime plan architecture ready",
        "Voucher-based school and organization plans for flight academies",
        "Subscription management backend with payment integration",
        "Role-based access for instructors and students",
      ],
      status: "In Development · Backend architecture complete",
      tone: "paper",
    },
    {
      title: "Aviation Exam Prep Platform",
      emoji: "📚",
      stack: ["Node.js", "PostgreSQL", "React", "Flask"],
      description:
        "An ed-tech platform for DGCA PPL, CPL, and ATPL exam preparation with testing, analytics, and mentorship flows.",
      features: [
        "Timed mock exams across the syllabus",
        "Topic-wise practice tests with per-topic analytics",
        "Searchable FAQ bank",
        "Mentor-student connection system",
        "Post-exam analytics with weak area identification and score trends",
        "Community forum and role-based subscriptions",
      ],
      status: "In Development",
      tone: "indigo",
    },
    {
      title: "SB Prime Wealth",
      emoji: "💼",
      stack: ["HTML", "CSS", "Google AI Studio"],
      description:
        "A content-driven static website for a mutual fund company focused on trust, compliance presentation, and lead generation.",
      features: [
        "Positioned around brand credibility and SEO",
        "Designed for regulatory clarity and trust-building",
        "Kept intentionally static because the product did not need backend complexity",
      ],
      status: "Live",
      tone: "lime",
    },
    {
      title: "Flask Authentication System",
      emoji: "🔐",
      stack: ["Flask", "JWT", "Python", "PostgreSQL", "Redis"],
      description:
        "A reusable authentication microservice used across FINAC modules and side projects.",
      features: [
        "Email and mobile login",
        "JWT plus CSRF token generation and validation",
        "Session tracking with Redis",
        "Email, Google OAuth, and Apple Sign-In signup flows",
        "Duplicate detection and bcrypt-based password hashing",
        "Modular design for reuse across projects",
      ],
      status: "Production",
      tone: "paper",
    },
  ],
  venturesIntro:
    "Outside of my day job, I build products. These are early-stage - some live, some in progress. The common thread is that they're all tied to real problems I've identified, not side-project experiments.",
  ventures: [
    {
      title: "Tachobuddy",
      description: "Subscription-based flight logging for pilots.",
      status: "In Development",
      icon: "Plane",
    },
    {
      title: "Pilots Prep Club",
      description: "DGCA exam prep with mock tests, analytics, and mentorship.",
      status: "In Development",
      icon: "BookOpen",
    },
    {
      title: "SB Prime Wealth",
      description: "Content-driven website for a mutual fund company.",
      status: "Live",
      icon: "BriefcaseBusiness",
    },
  ],
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/RonitRohil",
      icon: "Github",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/ronitjain0402/",
      icon: "Linkedin",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/ronitrohil/",
      icon: "Code2",
    },
    {
      label: "Instagram",
      href: "https://www.instagram.com/ronitrohilrj/",
      icon: "Instagram",
    },
  ],
};
