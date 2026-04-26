const withBase = (path) => `${import.meta.env.BASE_URL}${path}`;

export const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "open-source", label: "Open Source" },
  { id: "contact", label: "Contact" },
];

export const heroTech = ["Node.js", "PostgreSQL", "Python", "Redis", "Azure", "JavaScript"];

export const siteContent = {
  name: "Ronit Jain",
  title: "Backend Engineer",
  location: "Jaipur, Rajasthan",
  availability: "Open to Work · Remote",
  email: "ronitrohil@gmail.com",
  tagline: ["Backend Engineer.", "FinTech Systems."],
  intro:
    "I build production-grade APIs, financial data pipelines, and backend infrastructure — mostly for fintech and accounting SaaS.",
  resumeUrl: withBase("resume/Ronit_Jain_Resume.pdf"),
  profileImage: withBase("profile.jpg"),
  about: [
    "I'm Ronit Jain - a Backend Engineer based in Jaipur with 2+ years of experience building production systems used by real clients every day.",
    "Most recently at AKSSAI ProjExel, I worked on FINAC — a cloud-based financial accounting SaaS for chartered accountants and SMEs across India. I shipped bank statement parsers, GST filing pipelines, compliance modules, and authentication systems. I also resolved production-level crises: a Redis TCP exhaustion that had 28,000+ stuck connections, and a RAM exhaustion issue that took 10 days to trace and fix with ExcelJS streaming.",
    "Outside work I build my own products: a pilot logbook SaaS, an aviation exam prep platform, and a fintech-focused static website for a mutual fund company. I care about the full picture — API design, system architecture, deployment, and the product itself.",
    "I graduated from DA-IICT (Gandhinagar) with a B.Tech in ICT (2024). I'm currently looking for my next backend engineering role — fintech, infrastructure, and AI pipelines are where I want to go.",
  ],
  stats: [
    { value: "2+", label: "Years of professional experience" },
    { value: "10+", label: "Production APIs shipped" },
    { value: "3", label: "Indie products in development" },
    { value: "28K→35", label: "Redis connections: crisis diagnosed & fixed" },
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
      company: "AKSSAI ProjExel",
      period: "May 2023 - Apr 2026",
      location: "Jaipur, Rajasthan",
      summary:
        "Started as Software Developer Intern (May 2023), promoted to full-time Software Engineer (Jan 2024). FINAC is a cloud-based financial accounting SaaS serving chartered accountants and SMEs across India. Named \"key person\" and \"role model\" by manager Lokesh Jain.",
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
        "⭐ Star Performer — Q1 2025. Recognised by management for consistent delivery and technical ownership across the FINAC platform.",
        "Built a multi-format bank statement analyzer supporting PDF, Excel, and CSV using Python, Flask, Pandas, and pdfplumber with dynamic header detection, metadata extraction, and per-transaction confidence scoring.",
        "Integrated Pennyless API for account and IFSC validation plus UPI ID verification for transaction enrichment.",
        "Developed GSTR-1 filing and GSTR-2A/2B reconciliation modules with automated mismatch detection.",
        "Implemented E-Way Bill generation, E-Invoicing, and MineTrac report generation modules.",
        "Built JWT and CSRF authentication with session tracking, email plus Google plus Apple signup flows, and duplicate detection.",
        "Shipped Recruitment Tracker, TDS Master, Timesheet Reporting, and Client Meetup Checklist modules.",
        "Resolved security issues including CORS misconfiguration, prototype pollution, and client-assign authorization gaps.",
        "Built the Job Disbursement Module with 6 REST APIs during internship — converted to full-time role within 8 months.",
      ],
    },
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
        ["Spring Boot", "learning"],
        ["Pandas", "working"],
        ["pdfplumber", "working"],
        ["ExcelJS", "working"],
        ["Bull", "working"],
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
        ["Queue Systems", "working"],
        ["CORS", "proficient"],
        ["File Parsing", "proficient"],
        ["Caching", "working"],
        ["WebSockets", "working"],
        ["Subscription Management", "working"],
      ],
    },
    {
      title: "Certifications",
      items: [
        ["AZ-900 · Azure Fundamentals", "proficient"],
        ["AWS CLF-C02 · Cloud Practitioner", "proficient"],
      ],
    },
  ],
  engineeringHighlights: [
    "Diagnosed and fixed a Redis TCP exhaustion — 28,233 stuck connections down to 35 via sysctl tuning, restoring 8 Bull queue workers.",
    "Traced and resolved a RAM exhaustion bug over 10 days — rebuilt Excel download pipeline with ExcelJS streaming and chunked writes.",
    "Built a multi-format bank statement parser supporting PDF, CSV, and Excel with dynamic column detection and per-transaction confidence scoring.",
    "Optimized PostgreSQL queries from 2-5s to under 0.5s using recursive stored procedures and targeted indexing.",
    "Automated GST workflows across GSTR-1 filing, GSTR-2A/2B reconciliation, E-Way Bill, and E-Invoicing modules.",
    "Designed reusable JWT plus CSRF authentication flows with Redis session tracking, used across multiple production systems.",
    "Resolved production-facing security issues including CORS misconfiguration, prototype pollution, and authorization gaps.",
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
        "E-Invoicing module with IRP integration for generation and cancellation",
        "TDS Master, timesheet reporting, and checklist workflows for operations teams",
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
      liveUrl: "https://sbprimewealth.com",
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
  githubProjects: [
    {
      title: "Bank Statement Analyzer (Open Source)",
      emoji: "📄",
      stack: ["Python", "Pandas", "pdfplumber", "Flask API", "PDF / Excel / CSV Parser", "React + TypeScript"],
      description:
        "An open-source bank statement parser supporting Excel, CSV, and PDF formats with dynamic column detection.",
      features: [
        "Automatic header row detection",
        "Flexible column mapping",
        "Transaction classification logic",
        "Support for multiple bank formats",
      ],
      github: 'https://github.com/RonitRohil/Bank-Statement-Analyzer',
      githubLabel: "Add repo link",
    },
    {
      title: "Multi-Site Web Scraper",
      emoji: "🕸️",
      stack: ["Node.js", "Playwright", "Axios"],
      description:
        "A configurable scraping engine to extract structured data from multiple websites with cleanup and export support.",
      features: [
        "Multi-page crawling",
        "Data cleaning pipeline",
        "Batch Scraping with concurrency control",
        "Retry and failure handling",
      ],
      github: 'https://github.com/RonitRohil/Web-Scrapping-Project',
      githubLabel: "Add repo link",
    },
    {
      title: "Node.js Backend Boilerplate",
      emoji: "⚙️",
      stack: ["Node.js", "Express", "JWT", "PostgreSQL", "Prisma"],
      description:
        "A production-ready Node.js backend template with authentication, logging, and modular architecture.",
      features: [
        "JWT authentication setup",
        "Modular route architecture",
        "Centralized error handling",
        "Environment configuration",
      ],
      github: 'https://github.com/RonitRohil/Node.Js-API-Bioler-Plate',
      githubLabel: "Add repo link",
    },
    {
      title: "ArthSigh - AI Equity Insights",
      emoji: "📈",
      stack: ["Google AI Studio", "Python", "Data Analysis"],
      description:
        "An AI-powered equity insights tool that analyzes financial data and generates intelligent investment summaries.",
      features: [
        "Equity data ingestion",
        "AI-generated financial insights",
        "Trend analysis workflows",
        "Automated reporting",
      ],
      github: 'https://github.com/RonitRohil/ArthSight-AI',
      githubLabel: "Add repo link",
    },
  ],
  architectureFlows: [
    {
      title: "Bank Statement Analyzer",
      summary: "A multi-service pipeline — uploads go through Node.js to Azure Blob Storage, then a Python Flask microservice parses and scores each transaction per bank format.",
      steps: [
        "User Upload",
        "Node.js API",
        "Azure Blob Storage",
        "Flask Processing Service",
        "Parser Engine",
        "Database Storage",
      ],
    },
    {
      title: "GST & Compliance Workflow",
      summary: "Invoice and ledger data flows through a validation layer, gets classified by GST rules, reconciled against GSTR-2A/2B, and outputs filing-ready returns.",
      steps: [
        "Invoice / Ledger Input",
        "Validation Layer",
        "Classification Rules",
        "Reconciliation Engine",
        "Return / Report Output",
      ],
    },
    {
      title: "Authentication System",
      summary: "Signup and login requests hit an identity validation layer that issues JWT + CSRF tokens and tracks active sessions in Redis for stateless API access.",
      steps: [
        "Signup / Login Request",
        "Identity Validation",
        "JWT + CSRF Issue",
        "Redis Session Tracking",
        "Protected API Access",
      ],
    },
    {
      title: "Pilot Logbook SaaS",
      summary: "Flight entries go through a backend API for validation and hour calculations, pass through subscription and role checks, then persist to the logbook and analytics store.",
      steps: [
        "Flight Entry UI",
        "Backend API",
        "Validation + Calculations",
        "Subscription / Role Checks",
        "Logbook + Analytics",
      ],
    },
  ],
  contactIntro:
    "I'm actively looking for my next backend engineering role — fintech, infrastructure, and AI pipelines are where I want to go. I'm also open to freelance API work and interesting technical conversations.",
  contactSubjects: [
    "Job Opportunity",
    "Freelance Project",
    "General Enquiry",
    "Just saying hi",
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
    {
      label: "Topmate",
      href: "https://topmate.io/ronit_jain04",
      icon: "CalendarDays",
    },
  ],
};
