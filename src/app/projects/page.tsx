
"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import {
    Search,
    ExternalLink,
    Github,
    Construction,
    CheckCircle2,
} from "lucide-react";

type ProjectStatus = "building" | "working";

interface Project {
    id: string;
    name: string;
    description: string;
    longDescription: string;
    techStack: string[];
    status: ProjectStatus;
    githubUrl: string;
    liveUrl?: string;
    category: string;
}

const projects: Project[] = [
    {
        id: "blink-basket",
        name: "Blink Basket",
        description: "Full-stack e-commerce platform with real-time inventory management",
        longDescription: "A comprehensive MERN stack e-commerce solution featuring user authentication, product catalog, shopping cart, payment integration, and admin dashboard for inventory management.",
        techStack: ["MongoDB", "Express.js", "React", "Node.js", "Redux", "Stripe"],
        status: "working",
        githubUrl: "https://github.com/shikhar0312/blink-basket",
        liveUrl: "https://blink-basket.demo.com",
        category: "Full-Stack",
    },
    {
        id: "student-management",
        name: "Student Management System",
        description: "Django-based academic management platform with role-based access",
        longDescription: "A robust student management system built with Django, featuring student enrollment, course management, grade tracking, attendance monitoring, and comprehensive reporting with role-based access control.",
        techStack: ["Django", "PostgreSQL", "Bootstrap", "Celery", "Redis", "Docker"],
        status: "working",
        githubUrl: "https://github.com/shikhar0312/student-management",
        liveUrl: "https://student-mgmt.demo.com",
        category: "Backend",
    },
    {
        id: "ai-doc-search",
        name: "AI Document Search Engine",
        description: "RAG-based intelligent document search with semantic understanding",
        longDescription: "An advanced document search engine utilizing Retrieval Augmented Generation (RAG) for semantic search capabilities. Features document ingestion, vector embeddings, and natural language querying.",
        techStack: ["Python", "LangChain", "OpenAI", "Pinecone", "FastAPI", "React"],
        status: "building",
        githubUrl: "https://github.com/shikhar0312/ai-doc-search",
        category: "AI/ML",
    },
    {
        id: "cloud-deploy-kit",
        name: "Cloud Deploy Kit",
        description: "Infrastructure-as-code toolkit for AWS deployments",
        longDescription: "A comprehensive toolkit for automating AWS infrastructure provisioning and application deployments using Terraform and custom scripts, with CI/CD pipeline integration.",
        techStack: ["AWS", "Terraform", "Python", "GitHub Actions", "Docker"],
        status: "building",
        githubUrl: "https://github.com/shikhar0312/cloud-deploy-kit",
        category: "DevOps",
    },
    {
        id: "api-gateway",
        name: "Microservices API Gateway",
        description: "Custom API gateway with rate limiting and caching",
        longDescription: "A lightweight API gateway implementation featuring request routing, rate limiting, caching, authentication, and monitoring for microservices architectures.",
        techStack: ["Node.js", "Redis", "Express", "Docker", "Prometheus"],
        status: "working",
        githubUrl: "https://github.com/shikhar0312/api-gateway",
        category: "Backend",
    },
    {
        id: "realtime-chat",
        name: "Real-time Chat Platform",
        description: "Scalable chat application with WebSocket support",
        longDescription: "A real-time messaging platform built with Socket.io, featuring private messaging, group chats, file sharing, message encryption, and presence indicators.",
        techStack: ["Node.js", "Socket.io", "React", "MongoDB", "Redis"],
        status: "working",
        githubUrl: "https://github.com/shikhar0312/realtime-chat",
        liveUrl: "https://chat.demo.com",
        category: "Full-Stack",
    },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
    },
    exit: {
        opacity: 0,
        y: -20,
        transition: { duration: 0.3 },
    },
};

export default function ProjectsPage() {
    const [activeTab, setActiveTab] = useState<"all" | ProjectStatus>("all");
    const [searchQuery, setSearchQuery] = useState("");

    const filteredProjects = useMemo(() => {
        return projects.filter((project) => {
            const matchesTab = activeTab === "all" || project.status === activeTab;
            const matchesSearch =
                searchQuery === "" ||
                project.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.techStack.some((tech) =>
                    tech.toLowerCase().includes(searchQuery.toLowerCase())
                );
            return matchesTab && matchesSearch;
        });
    }, [activeTab, searchQuery]);

    return (
        <div className="page-transition min-h-screen py-12 md:py-20">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        My <span className="gradient-text">Projects</span>
                    </h1>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                        A showcase of my engineering work. From backend systems to full-stack
                        applications, each project represents a learning journey.
                    </p>
                </motion.div>

                {/* Search and Filter Bar */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="flex flex-col sm:flex-row gap-4 mb-8"
                >
                    {/* Search Input */}
                    <div className="relative flex-1">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                        <input
                            type="text"
                            placeholder="Search projects, technologies..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                        />
                    </div>

                    {/* Tabs */}
                    <div className="flex rounded-xl bg-background-secondary p-1 border border-border">
                        {[
                            { id: "all" as const, label: "All", icon: null },
                            { id: "building" as const, label: "Building 🚧", icon: Construction },
                            { id: "working" as const, label: "Working ✅", icon: CheckCircle2 },
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeTab === tab.id
                                    ? "text-white"
                                    : "text-foreground-muted hover:text-foreground"
                                    }`}
                            >
                                {activeTab === tab.id && (
                                    <motion.div
                                        layoutId="tab-indicator"
                                        className="absolute inset-0 bg-accent rounded-lg"
                                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{tab.label}</span>
                            </button>
                        ))}
                    </div>
                </motion.div>

                {/* Results count */}
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-sm text-foreground-muted mb-6"
                >
                    Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? "s" : ""}
                </motion.p>

                {/* Projects Grid */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${activeTab}-${searchQuery}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                variants={itemVariants}
                                layout
                                whileHover={{ y: -4 }}
                                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300"
                            >
                                {/* Header */}
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <div className="flex items-center gap-2 mb-1">
                                            <h3 className="text-xl font-semibold group-hover:text-accent transition-colors">
                                                {project.name}
                                            </h3>
                                            <span
                                                className={`px-2 py-0.5 text-xs rounded-full ${project.status === "building"
                                                    ? "bg-yellow-500/10 text-yellow-500"
                                                    : "bg-green-500/10 text-green-500"
                                                    }`}
                                            >
                                                {project.status === "building" ? "🚧 Building" : "✅ Live"}
                                            </span>
                                        </div>
                                        <span className="text-xs text-foreground-muted/60">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                {/* Description */}
                                <p className="text-sm text-foreground-muted mb-4 leading-relaxed">
                                    {project.longDescription}
                                </p>

                                {/* Tech Stack */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.techStack.map((tech) => (
                                        <span
                                            key={tech}
                                            className="px-2 py-1 text-xs rounded-md bg-background-secondary text-foreground-muted hover:bg-accent hover:text-white transition-colors cursor-default"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Actions */}
                                <div className="flex items-center gap-3">
                                    <motion.a
                                        href={project.githubUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="flex items-center gap-2 px-4 py-2 rounded-lg bg-background-secondary hover:bg-accent hover:text-white text-sm font-medium transition-colors"
                                    >
                                        <Github className="w-4 h-4" />
                                        GitHub
                                    </motion.a>
                                    {project.liveUrl && (
                                        <motion.a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex items-center gap-2 px-4 py-2 rounded-lg bg-accent text-white text-sm font-medium transition-colors hover:bg-accent-hover"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            Live Demo
                                        </motion.a>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <Search className="w-12 h-12 mx-auto text-foreground-muted/50 mb-4" />
                        <h3 className="text-lg font-medium mb-2">No projects found</h3>
                        <p className="text-foreground-muted">
                            Try adjusting your search or filter criteria
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
