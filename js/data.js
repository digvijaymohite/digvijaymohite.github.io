/**
 * Data file for the personal website
 * Contains all content data for different sections
 */

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Multi-Tenant Enterprise SaaS Platform",
    description: "Led the development of a robust multi-tenant SaaS platform serving global enterprise clients in the career transition space. Designed tenant-aware microservices, secure data isolation, and scalable deployment pipelines.",
    technologies: ["Java", "Spring Boot", "AWS", "GCP BigQuery", "MySQL Aurora", "Kubernetes", "Terraform", "React", "Node.js"],
    category: "architecture"
  },
  {
    id: 2,
    title: "AI Resume Builder",
    description: "Designed and developed an AI-powered resume builder that analyzes a user's experience and generates tailored, job-ready resumes using LLMs. Integrated real-time editing, ATS keyword suggestions, and version tracking.",
    technologies: ["OpenAI API", "Node.js", "React", "AWS Lambda", "MongoDB", "LangChain", "Tailwind CSS"],
    category: "ai"
  },
  {
    id: 3,
    title: "Nudging Platform",
    description: "Built a platform to send personalized nudges to users, increasing engagement and driving revenue for the Career Coaching business. Implemented dynamic workflows and notification logic.",
    technologies: ["Java", "Spring Boot", "AWS Lambda", "MySQL Aurora", "SQS/SNS", "React", "GCP BigQuery"],
    category: "backend"
  },
  {
    id: 4,
    title: "Reporting Service",
    description: "Developed a serverless reporting tool that queries BigQuery datasets and exports formatted reports to Google Sheets and Excel. Optimized for cost-efficiency and scalability.",
    technologies: ["Python", "AWS Batch", "BigQuery", "Google Sheets API", "GCP IAM"],
    category: "data"
  },
  {
    id: 5,
    title: "Career Coaching Scheduler",
    description: "Engineered a robust scheduling microservice integrated with Google Calendar, managing time zones, availability, and automated reminders for coaches and participants.",
    technologies: ["Java", "Spring Boot", "Google Calendar API", "AWS Lambda", "DynamoDB"],
    category: "backend"
  },
  {
    id: 6,
    title: "Marketing Inbox Assistant",
    description: "Designed and built a Gmail-integrated SaaS that ingests emails, stores them in S3, and classifies them using LLMs to drive automation and analytics.",
    technologies: ["Python", "AWS Chalice", "Gmail API", "React", "DynamoDB", "LLM"],
    category: "ai"
  },
  {
    id: 7,
    title: "Flowsense – Marketing Automation",
    description: "Worked as a freelance full-stack developer to implement workflows, segmentation logic, and marketing triggers. Focused on backend scalability and UI enhancements.",
    technologies: ["Node.js", "PostgreSQL", "React", "AWS Lambda", "Tailwind CSS"],
    category: "fullstack"
  },
  {
    id: 8,
    title: "QuickDialog – Chat Automation",
    description: "Built a backend system integrating OpenAI APIs for intelligent classification, response generation, and chat analytics. Focused on API security and scalability.",
    technologies: ["Python", "OpenAI API", "AWS Lambda", "PostgreSQL", "React"],
    category: "ai"
  },
  {
    id: 9,
    title: "Availability Service",
    description: "Designed a centralized service to fetch and manage real-time availability data across multiple time zones and platforms, powering key scheduling workflows.",
    technologies: ["Java", "Spring Boot", "MySQL", "Redis", "AWS ECS"],
    category: "backend"
  }
];

// Experience data
const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Randstad Enterprise",
    period: "Apr 2022 - Present",
    description: "Leading development of enterprise solutions using Google Cloud Platform (GCP) and React.js. Architecting scalable cloud solutions and implementing best practices."
  },
  {
    id: 2,
    role: "Technical Lead",
    company: "Randstad Enterprise",
    period: "Jan 2021 - Apr 2022",
    description: "Led technical initiatives and team development. Focused on Google Cloud Platform (GCP) and React.js implementations."
  },
  {
    id: 3,
    role: "Principal Product Engineer",
    company: "Randstad Enterprise",
    period: "Jan 2019 - Jan 2021",
    description: "Drove product development and technical architecture decisions. Specialized in GCP and React.js solutions."
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "JAWK Softwares",
    period: "Jun 2013 - Dec 2014",
    description: "Developed software solutions and contributed to various projects as a full-stack developer."
  }
];

// Certifications data
const certificationsData = [
  {
    id: 1,
    name: "AWS Certified Solutions Architect – Professional",
    issuer: "Amazon Web Services",
    date: "May 2024 - May 2027",
    logo: "https://images.credly.com/size/340x340/images/2d84e428-9078-49b6-a804-13c15383d0de/image.png"
  },
  {
    id: 2,
    name: "AWS Certified Security – Specialty",
    issuer: "Amazon Web Services",
    date: "May 2024 - May 2027",
    logo: "https://images.credly.com/size/340x340/images/53acdae5-d69f-4dda-b650-d02ed7a50dd7/image.png"
  },
  {
    id: 3,
    name: "AWS Certified DevOps Engineer – Professional",
    issuer: "Amazon Web Services",
    date: "May 2021 - Apr 2027",
    logo: "https://images.credly.com/size/340x340/images/bd31ef42-d460-493e-8503-39592aaf0458/image.png"
  },
  {
    id: 4,
    name: "AWS Certified Data Engineer – Associate",
    issuer: "Amazon Web Services",
    date: "Apr 2024 - May 2027",
    logo: "https://images.credly.com/size/340x340/images/e5c85d7f-4e50-431e-b5af-fa9d9b0596e7/image.png"
  },
  {
    id: 5,
    name: "AWS Certified Solutions Architect – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    logo: "https://images.credly.com/size/340x340/images/0e284c3f-5164-4b21-8660-0d84737941bc/image.png"
  },
  {
    id: 6,
    name: "AWS Certified Developer – Associate",
    issuer: "Amazon Web Services",
    date: "2024",
    logo: "https://images.credly.com/size/340x340/images/b9feab85-1a43-4f6c-99a5-631b88d5461b/image.png"
  },
  {
    id: 7,
    name: "GCP Professional Cloud Architect",
    issuer: "Google Cloud",
    date: "2024",
    logo: "https://images.credly.com/size/340x340/images/71c579e0-51fd-4247-b493-d2fa8167157a/image.png"
  },
  {
    id: 8,
    name: "GCP Professional Cloud Developer",
    issuer: "Google Cloud",
    date: "2024",
    logo: "https://images.credly.com/size/340x340/images/614465c6-1d80-4ae6-a323-753de224422a/image.png"
  },
  {
    id: 9,
    name: "GCP Associate Cloud Engineer",
    issuer: "Google Cloud",
    date: "2024",
    logo: "https://images.credly.com/size/340x340/images/08096465-cbfc-4c3e-93e5-93c5aa61f23e/image.png"
  }
];