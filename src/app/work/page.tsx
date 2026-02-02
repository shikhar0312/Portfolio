"use client";

import { motion } from "framer-motion";
import {
    Server,
    Database,
    Cloud,
    Container,
    Code2,
    Layers,
} from "lucide-react";
import { staggerContainer, fadeInUp } from "@/lib/animations";

const workExperience = [
    {
        title: "Backend Development",
        description: "Building robust RESTful APIs and microservices architecture with Node.js, Express, and Django. Implementing authentication, authorization, and data validation layers.",
        icon: Server,
        technologies: ["Node.js", "Express", "Django", "REST APIs", "GraphQL"],
        highlights: [
            "Designed and implemented scalable API architectures",
            "Built authentication systems with JWT and OAuth",
            "Optimized database queries for performance",
        ],
    },
    {
        title: "Database Design",
        description: "Designing efficient database schemas for both SQL and NoSQL databases. Expertise in data modeling, indexing strategies, and query optimization.",
        icon: Database,
        technologies: ["MongoDB", "PostgreSQL", "MySQL", "Redis", "Mongoose"],
        highlights: [
            "Designed normalized database schemas",
            "Implemented caching strategies with Redis",
            "Managed data migrations and versioning",
        ],
    },
    {
        title: "Cloud Architecture",
        description: "Deploying and managing applications on AWS cloud infrastructure. Implementing serverless architectures and container orchestration.",
        icon: Cloud,
        technologies: ["AWS EC2", "S3", "Lambda", "RDS", "CloudFront"],
        highlights: [
            "Configured auto-scaling and load balancing",
            "Implemented CI/CD pipelines",
            "Managed cloud security and IAM policies",
        ],
    },
    {
        title: "Containerization",
        description: "Containerizing applications with Docker and orchestrating deployments. Building reproducible development environments and production deployments.",
        icon: Container,
        technologies: ["Docker", "Docker Compose", "Kubernetes", "Nginx"],
        highlights: [
            "Created multi-stage Docker builds",
            "Orchestrated microservices deployments",
            "Implemented container security best practices",
        ],
    },
    {
        title: "Full-Stack Development",
        description: "Building complete web applications from frontend to backend. Specializing in React-based frontends with Node.js/Django backends.",
        icon: Code2,
        technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
        highlights: [
            "Developed responsive, accessible UIs",
            "Implemented state management solutions",
            "Built reusable component libraries",
        ],
    },
    {
        title: "System Design",
        description: "Designing scalable and maintainable software systems. Applying design patterns, SOLID principles, and clean architecture.",
        icon: Layers,
        technologies: ["Microservices", "Event-Driven", "CQRS", "DDD"],
        highlights: [
            "Architected distributed systems",
            "Implemented message queues and event buses",
            "Designed for high availability and fault tolerance",
        ],
    },
];

export default function WorkPage() {
    return (
        <div className="page-transition min-h-screen py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-16"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Work</span>
                    </h1>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                        Engineering depth across backend systems, APIs, cloud architecture,
                        and scalable applications. Here&apos;s what I bring to the table.
                    </p>
                </motion.div>

                {/* Work Grid */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {workExperience.map((work) => (
                        <motion.div
                            key={work.title}
                            variants={fadeInUp}
                            whileHover={{ y: -4 }}
                            className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                        >
                            {/* Icon */}
                            <div className="w-12 h-12 mb-4 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                <work.icon className="w-6 h-6 text-accent" />
                            </div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                                {work.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                                {work.description}
                            </p>

                            {/* Highlights */}
                            <ul className="mb-4 space-y-1">
                                {work.highlights.map((highlight, i) => (
                                    <li key={i} className="text-xs text-foreground-muted/80 flex items-start gap-2">
                                        <span className="text-accent mt-0.5">•</span>
                                        {highlight}
                                    </li>
                                ))}
                            </ul>

                            {/* Technologies */}
                            <div className="flex flex-wrap gap-2">
                                {work.technologies.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-2 py-1 text-xs rounded-md bg-background-secondary text-foreground-muted"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Tech Stack Overview */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                    className="mt-20"
                >
                    <h2 className="text-2xl font-bold text-center mb-8">
                        Tech Stack Overview
                    </h2>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        {[
                            { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind"] },
                            { category: "Backend", items: ["Node.js", "Express", "Django", "FastAPI"] },
                            { category: "Database", items: ["MongoDB", "PostgreSQL", "Redis", "MySQL"] },
                            { category: "DevOps", items: ["Docker", "AWS", "Git", "CI/CD"] },
                        ].map((stack) => (
                            <motion.div
                                key={stack.category}
                                whileHover={{ scale: 1.02 }}
                                className="p-4 rounded-xl bg-card border border-border text-center"
                            >
                                <h4 className="font-semibold text-accent mb-3">{stack.category}</h4>
                                <div className="space-y-1">
                                    {stack.items.map((item) => (
                                        <p key={item} className="text-sm text-foreground-muted">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
