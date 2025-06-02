import { Cloud, Code, Database, Zap, Lightbulb, BarChart, Cpu, Network, Layers, Settings, Brain, ShoppingBag, GraduationCap, HeartPulse } from 'lucide-react';

    export const navLinks = [
        { name: "Home", href: "#hero" },
        { name: "Services", href: "#services" },
        { name: "Industries", href: "#industries" },
        { name: "Our Approach", href: "#approach" },
        { name: "Tech Stack", href: "#tech-stack" },
        { name: "Contact", href: "#contact" },
    ];

    export const coreServices = [
      {
        title: "Cloud Consulting & DevOps",
        Icon: Cloud,
        description: "Architecting resilient cloud solutions and automating workflows for peak efficiency.",
        points: [
          "Cloud architecture design (AWS, Azure, GCP)",
          "CI/CD pipeline setup and automation",
          "Infrastructure as Code (Terraform, Pulumi)",
          "Kubernetes & container orchestration",
          "Cloud cost optimization and monitoring",
        ],
      },
      {
        title: "Custom Software Development",
        Icon: Code,
        description: "Building tailored software applications that solve unique business challenges.",
        points: [
          "Full-stack app development (React, Node.js, Python)",
          "API & Microservices architecture",
          "IoT & embedded systems",
          "ERP or internal tool development",
          "AI-powered web and mobile apps",
        ],
      },
      {
        title: "Data & AI Solutions",
        Icon: Database,
        description: "Transforming data into actionable insights and intelligent applications.",
        points: [
          "Data pipeline development (ETL/ELT)",
          "Business intelligence dashboards (Power BI, Looker, Tableau)",
          "Predictive analytics and ML model deployment",
          "Data cleaning, transformation, and visualization",
          "AI agent integration (OpenAI, LangChain, Pinecone)",
        ],
      },
      {
        title: "System Integration & Automation",
        Icon: Zap,
        description: "Connecting disparate systems and automating processes to streamline operations.",
        points: [
          "CRM, ERP, and third-party API integration",
          "Workflow automation (Zapier, Power Automate)",
          "Email & ecommerce automation",
          "IoT data stream integration with cloud dashboards",
        ],
      },
      {
        title: "Tech Strategy & Innovation Advisory",
        Icon: Lightbulb,
        description: "Guiding businesses through technological evolution and innovation.",
        points: [
          "Cloud migration planning",
          "Startup MVP consulting",
          "Technical project management",
          "CTO-as-a-Service for startups",
        ],
      },
    ];

    export const industriesServed = [
      { name: "Retail & E-commerce", Icon: ShoppingBag, description: "Enhancing customer experiences and optimizing operations with tailored tech solutions." },
      { name: "Manufacturing & Industrial", Icon: Settings, description: "Integrating IoT, automating processes, and leveraging data for smarter production." },
      { name: "Education & EdTech", Icon: GraduationCap, description: "Building innovative learning platforms and streamlining educational workflows." },
      { name: "Tech Startups", Icon: Cpu, description: "Providing expert guidance and development to bring groundbreaking ideas to market, fast." },
      { name: "Healthcare & Life Sciences", Icon: HeartPulse, description: "Developing secure and compliant solutions for patient care, research, and operations." },
    ];

    export const techStackLogos = [
      { name: "Terraform", Icon: Layers }, { name: "Azure", Icon: Cloud }, { name: "AWS", Icon: Cloud },
      { name: "Python", Icon: Code }, { name: "C#", Icon: Code }, { name: "Django", Icon: Code },
      { name: "Docker", Icon: Cpu }, { name: "Kubernetes", Icon: Cpu }, { name: "React", Icon: Code },
      { name: "Node.js", Icon: Code }, { name: "PostgreSQL", Icon: Database }, { name: "MongoDB", Icon: Database },
      { name: "Power BI", Icon: BarChart }, { name: "Tableau", Icon: BarChart }, { name: "Looker", Icon: BarChart },
      { name: "OpenAI", Icon: Brain }, { name: "LangChain", Icon: Network }, { name: "Pulumi", Icon: Layers },
      { name: "GitHub", Icon: Settings } , { name: "Firebase", Icon: Zap }, { name: "GCP", Icon: Cloud }
    ];