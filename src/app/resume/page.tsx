"use client";

import { motion } from "framer-motion";
import {
    Mail,
    MapPin,
    Linkedin,
    Github,
    GraduationCap,
    Briefcase,
    Code2,
    Award
} from "lucide-react";
import { fadeInUp } from "@/lib/animations";

const resumeData = {
    name: "Shikhar Singh",
    title: "Full-Stack Developer",
    subtitle: "Backend-Focused | Cloud & System Design",
    contact: {
        email: "shikharsingh.work@gmail.com",
        phone: "+91 8299867513",
        location: "India",
        linkedin: "linkedin.com/in/shikharsinghwork",
        github: "github.com/shikhar0312",
    },
    summary: `Passionate Full-Stack Developer with a strong focus on backend engineering, cloud architecture, and system design. Experienced in building scalable RESTful APIs, microservices, and cloud-native applications. Proficient in MERN stack, Django, AWS, and containerized deployments. Committed to writing clean, maintainable code and continuously learning new technologies.`,

    skills: {
        languages: ["JavaScript", "TypeScript", "Python", "SQL", "HTML/CSS"],
        frameworks: ["React", "Next.js", "Node.js", "Express", "Django", "FastAPI"],
        databases: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        cloud: ["AWS (EC2, S3, Lambda, RDS)", "Docker", "Kubernetes", "CI/CD"],
        tools: ["Git", "Postman", "VS Code", "Jira", "Figma"],
    },

    experience: [
        {
            title: "Full-Stack Developer",
            type: "Personal Projects & Freelance",
            period: "2023 - Present",
            highlights: [
                "Designed and developed scalable web applications using MERN stack and Django",
                "Implemented RESTful APIs with authentication, authorization, and data validation",
                "Deployed applications on AWS using EC2, S3, and containerized with Docker",
                "Optimized database queries and implemented caching strategies with Redis",
            ],
        },
    ],

    projects: [
        {
            name: "Blink Basket",
            description: "Full-stack e-commerce platform with real-time inventory management",
            tech: "MERN Stack, Redux, Stripe",
        },
        {
            name: "Student Management System",
            description: "Academic management platform with role-based access control",
            tech: "Django, PostgreSQL, Celery",
        },
        {
            name: "AI Document Search Engine",
            description: "RAG-based intelligent document search with semantic understanding",
            tech: "Python, LangChain, FastAPI, React",
        },
    ],

    education: [
        {
            degree: "Bachelor of Technology",
            field: "Computer Science / Information Technology",
            institution: "Dr. A. P. J. Abdul Kalam Technical University, Lucknow",
            year: "2020 - 2024",
        },
    ],

    certifications: [
        "AWS Cloud Practitioner (or relevant certification)",
        "Data Structures & Algorithms Certification",
    ],
};

export default function ResumePage() {
    return (
        <div className="page-transition min-h-screen py-12 md:py-20">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        <span className="gradient-text">Resume</span>
                    </h1>
                    <p className="text-lg text-foreground-muted mb-6">
                        My professional background and qualifications
                    </p>
                </motion.div>

                {/* Resume Content */}
                <div className="space-y-8">
                    {/* Profile Header */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        animate="visible"
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <div className="flex flex-col md:flex-row gap-6 md:items-center md:justify-between">
                            <div>
                                <h2 className="text-2xl md:text-3xl font-bold">{resumeData.name}</h2>
                                <p className="text-lg text-accent">{resumeData.title}</p>
                                <p className="text-foreground-muted">{resumeData.subtitle}</p>
                            </div>
                            <div className="space-y-2 text-sm text-foreground-muted">
                                <div className="flex items-center gap-2">
                                    <Mail className="w-4 h-4" />
                                    {resumeData.contact.email}
                                </div>
                                <div className="flex items-center gap-2">
                                    <MapPin className="w-4 h-4" />
                                    {resumeData.contact.location}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Linkedin className="w-4 h-4" />
                                    {resumeData.contact.linkedin}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Github className="w-4 h-4" />
                                    {resumeData.contact.github}
                                </div>
                            </div>
                        </div>
                    </motion.section>

                    {/* Summary */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-accent" />
                            Professional Summary
                        </h3>
                        <p className="text-foreground-muted leading-relaxed">
                            {resumeData.summary}
                        </p>
                    </motion.section>

                    {/* Skills */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-accent" />
                            Technical Skills
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {Object.entries(resumeData.skills).map(([category, skills]) => (
                                <div key={category}>
                                    <h4 className="text-sm font-medium uppercase tracking-wider text-foreground-muted mb-2">
                                        {category}
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {skills.map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-3 py-1 text-sm rounded-lg bg-background-secondary text-foreground-muted"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Experience */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Briefcase className="w-5 h-5 text-accent" />
                            Experience
                        </h3>
                        {resumeData.experience.map((exp, index) => (
                            <div key={index} className="mb-6 last:mb-0">
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                                    <h4 className="text-lg font-medium">{exp.title}</h4>
                                    <span className="text-sm text-foreground-muted">{exp.period}</span>
                                </div>
                                <p className="text-accent text-sm mb-3">{exp.type}</p>
                                <ul className="space-y-2">
                                    {exp.highlights.map((highlight, i) => (
                                        <li key={i} className="flex items-start gap-2 text-sm text-foreground-muted">
                                            <span className="text-accent mt-1">•</span>
                                            {highlight}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </motion.section>

                    {/* Projects */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Code2 className="w-5 h-5 text-accent" />
                            Key Projects
                        </h3>
                        <div className="space-y-4">
                            {resumeData.projects.map((project, index) => (
                                <div key={index} className="p-4 rounded-xl bg-background-secondary">
                                    <h4 className="font-medium mb-1">{project.name}</h4>
                                    <p className="text-sm text-foreground-muted mb-2">
                                        {project.description}
                                    </p>
                                    <p className="text-xs text-accent">{project.tech}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>

                    {/* Education */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <GraduationCap className="w-5 h-5 text-accent" />
                            Education
                        </h3>
                        {resumeData.education.map((edu, index) => (
                            <div key={index}>
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div>
                                        <h4 className="font-medium">{edu.degree}</h4>
                                        <p className="text-sm text-foreground-muted">{edu.field}</p>
                                        <p className="text-sm text-accent">{edu.institution}</p>
                                    </div>
                                    <span className="text-sm text-foreground-muted">{edu.year}</span>
                                </div>
                            </div>
                        ))}
                    </motion.section>

                    {/* Certifications */}
                    <motion.section
                        variants={fadeInUp}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="p-6 md:p-8 rounded-2xl bg-card border border-border"
                    >
                        <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
                            <Award className="w-5 h-5 text-accent" />
                            Certifications
                        </h3>
                        <ul className="space-y-2">
                            {resumeData.certifications.map((cert, index) => (
                                <li key={index} className="flex items-center gap-2 text-foreground-muted">
                                    <span className="w-2 h-2 rounded-full bg-accent"></span>
                                    {cert}
                                </li>
                            ))}
                        </ul>
                    </motion.section>
                </div>
            </div>
        </div>
    );
}
