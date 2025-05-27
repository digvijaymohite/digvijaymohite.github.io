/**
 * Data file for the personal website
 * Contains all content data for different sections
 */

// Projects data
const projectsData = [
  {
    id: 1,
    title: "Multi-Tenant Enterprise SaaS Platform",
    description: "Architected and led the development of a multi-tenant SaaS platform serving Fortune 500 clients in the career transition space. Designed tenant-aware services, region-based deployments, IAM-secured APIs, and cost-optimized multi-cloud infrastructure. Enabled onboarding of multiple business lines through a configurable microservice model.",
    technologies: ["Java", "Spring Boot", "AWS", "GCP BigQuery", "MySQL Aurora", "Kubernetes", "Terraform", "React", "Node.js"],
    category: "architecture"
  },
  {
    id: 2,
    title: "AI Resume Builder Platform",
    description: "Designed and developed an AI-powered resume builder that analyzes user experience, recommends ATS-optimized content using OpenAI, and integrates with job boards. Features included semantic skill mapping, real-time collaboration, and intelligent versioning.",
    technologies: ["OpenAI API", "LangChain", "Node.js", "React", "AWS Lambda", "MongoDB", "Tailwind CSS"],
    category: "ai"
  },
  {
    id: 3,
    title: "Nudging & Engagement Platform",
    description: "Led architecture and implementation of a platform to deliver personalized behavioral nudges to users, increasing engagement and monetization in the career coaching line of business. Implemented campaign orchestration, analytics, and configurable triggers.",
    technologies: ["Java", "Spring Boot", "AWS Lambda", "SQS/SNS", "MySQL Aurora", "React", "GCP BigQuery"],
    category: "backend"
  },
  {
    id: 4,
    title: "DataHub Reporting Service",
    description: "Built a cost-efficient, serverless reporting engine that queries BigQuery and exports insights to Google Sheets and Excel. Used by business teams across regions for live dashboards and weekly insights with granular role-based access control.",
    technologies: ["Python", "AWS Batch", "BigQuery", "Google Sheets API", "S3", "GCP IAM", "SNS"],
    category: "data"
  },
  {
    id: 5,
    title: "Intelligent Scheduling & Availability Service",
    description: "Architected a region-aware scheduling and availability platform for career coaching workflows used by global enterprise clients. Designed as a centralized microservice, it integrates with Google Calendar and internal systems to fetch and manage real-time availability across coaches, participants, and services. Key features included dynamic time zone handling, conflict resolution, availability caching, automated reminders, and seamless integration with booking UIs. The service powers 10+ scheduling touchpoints across multiple business lines and reduced no-shows by 35%.",
    technologies: ["Java", "Spring Boot", "Google Calendar API", "AWS Lambda", "Redis", "DynamoDB", "MySQL Aurora", "SQS", "CloudWatch"],
    category: "architecture"
  },
  {
    id: 6,
    title: "CrossEngage Real-Time Integration",
    description: "Architected real-time event ingestion pipeline to CrossEngage.io for user and event data. Designed a region-aware system using SQS, Lambda, and config-driven rules to manage participant sync and ensure GDPR compliance across distributed tenants. Implemented configurable ingestion logic with API resiliency and logging.",
    technologies: ["AWS Lambda", "S3", "SQS", "MySQL Aurora", "BigQuery", "Python", "GCP Functions"],
    category: "architecture"
  },
  {
    id: 7,
    title: "Marketing Inbox Assistant",
    description: "Developed a Gmail-integrated SaaS to process and classify incoming emails using LLMs. Emails are stored in S3, metadata indexed for analytics, and actions automated via category-specific workflows. Designed for extensibility to support future email-based automation.",
    technologies: ["Python", "AWS Chalice", "Gmail API", "React", "S3", "DynamoDB", "LLM"],
    category: "ai"
  },
  {
    id: 8,
    title: "Flowsense – Marketing Automation",
    description: "Freelanced on a marketing platform focused on campaign automation. Developed customer segmentation logic, triggers, and enhanced UI performance. Assisted with event ingestion and backend observability for large datasets.",
    technologies: ["Node.js", "PostgreSQL", "React", "AWS Lambda", "Tailwind CSS"],
    category: "fullstack"
  },
  {
    id: 9,
    title: "QuickDialog – Conversational Automation",
    description: "Built AI-powered backend for automated customer communication workflows. Used OpenAI for response generation, intent detection, and classification. Ensured security with signed API requests and multi-region resilience.",
    technologies: ["Python", "OpenAI API", "AWS Lambda", "PostgreSQL", "React"],
    category: "ai",
    url: "https://www.quickdialog.com"
  },
  {
    id: 10,
    title: "CI/CD Automation & Deployment Modernization",
    description: "Migrated legacy CI/CD to GitHub Actions and AWS CodePipeline for a multi-service architecture. Integrated static code analysis, automated testing, and Slack-based release notifications for 20+ microservices, reducing deployment time by 60%.",
    technologies: ["GitHub Actions", "AWS CodePipeline", "SonarQube", "Docker", "EKS", "Helm"],
    category: "devops"
  }
];

// Experience data
const experienceData = [
  {
    id: 1,
    role: "Senior Software Engineer",
    company: "Randstad Enterprise",
    period: "Apr 2022 - Dec 2025",
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
