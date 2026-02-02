"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { Search, Calendar, Clock, ArrowRight } from "lucide-react";

interface BlogPost {
    id: string;
    slug: string;
    title: string;
    description: string;
    date: string;
    readTime: string;
    tags: string[];
    featured?: boolean;
}

const blogPosts: BlogPost[] = [
    {
        id: "1",
        slug: "building-scalable-apis-nodejs",
        title: "Building Scalable REST APIs with Node.js",
        description: "A comprehensive guide to designing and implementing production-ready REST APIs using Node.js, Express, and best practices for scalability.",
        date: "2024-01-15",
        readTime: "8 min read",
        tags: ["Backend", "Node.js", "API Design"],
        featured: true,
    },
    {
        id: "2",
        slug: "system-design-fundamentals",
        title: "System Design Fundamentals for Backend Engineers",
        description: "Understanding the core concepts of system design including load balancing, caching, database sharding, and microservices architecture.",
        date: "2024-01-10",
        readTime: "12 min read",
        tags: ["Systems", "Architecture", "Backend"],
        featured: true,
    },
    {
        id: "3",
        slug: "docker-containerization-guide",
        title: "Docker Containerization: From Development to Production",
        description: "Learn how to containerize your applications with Docker, create optimized multi-stage builds, and deploy to production environments.",
        date: "2024-01-05",
        readTime: "10 min read",
        tags: ["DevOps", "Docker", "Deployment"],
    },
    {
        id: "4",
        slug: "mongodb-optimization-tips",
        title: "MongoDB Performance Optimization Techniques",
        description: "Practical tips for optimizing MongoDB performance including indexing strategies, query optimization, and schema design patterns.",
        date: "2023-12-28",
        readTime: "7 min read",
        tags: ["Database", "MongoDB", "Backend"],
    },
    {
        id: "5",
        slug: "aws-deployment-strategies",
        title: "AWS Deployment Strategies for Node.js Applications",
        description: "Exploring different AWS deployment options for Node.js apps including EC2, ECS, Lambda, and when to use each approach.",
        date: "2023-12-20",
        readTime: "9 min read",
        tags: ["AWS", "Cloud", "DevOps"],
    },
    {
        id: "6",
        slug: "dsa-interview-preparation",
        title: "Data Structures & Algorithms: Interview Preparation Guide",
        description: "A structured approach to preparing for technical interviews with focus on common patterns, problem-solving strategies, and practice tips.",
        date: "2023-12-15",
        readTime: "15 min read",
        tags: ["DSA", "Interviews", "Career"],
    },
    {
        id: "7",
        slug: "rag-systems-explained",
        title: "Building RAG Systems: A Practical Introduction",
        description: "Understanding Retrieval Augmented Generation (RAG) systems, their architecture, and how to build intelligent document search engines.",
        date: "2023-12-10",
        readTime: "11 min read",
        tags: ["AI", "LLM", "Backend"],
    },
];

const allTags = [...new Set(blogPosts.flatMap((post) => post.tags))];

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
};

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogsPage() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedTag, setSelectedTag] = useState<string | null>(null);

    const filteredPosts = useMemo(() => {
        return blogPosts.filter((post) => {
            const matchesSearch =
                searchQuery === "" ||
                post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                post.tags.some((tag) =>
                    tag.toLowerCase().includes(searchQuery.toLowerCase())
                );
            const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
            return matchesSearch && matchesTag;
        });
    }, [searchQuery, selectedTag]);

    const featuredPosts = filteredPosts.filter((post) => post.featured);
    const regularPosts = filteredPosts.filter((post) => !post.featured);

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
                        <span className="gradient-text">Blog</span>
                    </h1>
                    <p className="text-lg text-foreground-muted max-w-2xl mx-auto">
                        Thoughts on backend engineering, system design, and software development.
                        Sharing lessons learned and insights from building real-world applications.
                    </p>
                </motion.div>

                {/* Search and Filter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-8"
                >
                    {/* Search Input */}
                    <div className="relative max-w-xl mx-auto mb-6">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground-muted" />
                        <input
                            type="text"
                            placeholder="Search articles..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-3 rounded-xl bg-card border border-border focus:border-accent focus:ring-1 focus:ring-accent outline-none transition-all text-sm"
                        />
                    </div>

                    {/* Tags Filter */}
                    <div className="flex flex-wrap items-center justify-center gap-2">
                        <button
                            onClick={() => setSelectedTag(null)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTag === null
                                ? "bg-accent text-white"
                                : "bg-background-secondary text-foreground-muted hover:text-foreground"
                                }`}
                        >
                            All
                        </button>
                        {allTags.map((tag) => (
                            <button
                                key={tag}
                                onClick={() => setSelectedTag(tag === selectedTag ? null : tag)}
                                className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${selectedTag === tag
                                    ? "bg-accent text-white"
                                    : "bg-background-secondary text-foreground-muted hover:text-foreground"
                                    }`}
                            >
                                {tag}
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
                    {filteredPosts.length} article{filteredPosts.length !== 1 ? "s" : ""} found
                </motion.p>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        className="mb-12"
                    >
                        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
                            <span className="text-accent">★</span> Featured
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {featuredPosts.map((post) => (
                                <motion.div
                                    key={post.id}
                                    variants={itemVariants}
                                    whileHover={{ y: -4 }}
                                >
                                    <Link href={`/blogs/${post.slug}`}>
                                        <article className="group h-full p-6 rounded-2xl bg-gradient-to-br from-accent/5 to-purple-500/5 border border-accent/20 hover:border-accent/50 transition-all duration-300">
                                            {/* Tags */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 text-xs rounded-md bg-accent/10 text-accent"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* Title */}
                                            <h3 className="text-xl font-semibold mb-2 group-hover:text-accent transition-colors">
                                                {post.title}
                                            </h3>

                                            {/* Description */}
                                            <p className="text-sm text-foreground-muted mb-4 line-clamp-2">
                                                {post.description}
                                            </p>

                                            {/* Meta */}
                                            <div className="flex items-center gap-4 text-xs text-foreground-muted/70">
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="w-3 h-3" />
                                                    {formatDate(post.date)}
                                                </span>
                                                <span className="flex items-center gap-1">
                                                    <Clock className="w-3 h-3" />
                                                    {post.readTime}
                                                </span>
                                            </div>
                                        </article>
                                    </Link>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}

                {/* Regular Posts */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={`${searchQuery}-${selectedTag}`}
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="space-y-4"
                    >
                        {regularPosts.map((post) => (
                            <motion.div
                                key={post.id}
                                variants={itemVariants}
                                whileHover={{ x: 4 }}
                            >
                                <Link href={`/blogs/${post.slug}`}>
                                    <article className="group flex flex-col sm:flex-row sm:items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300">
                                        {/* Content */}
                                        <div className="flex-1">
                                            <div className="flex flex-wrap gap-2 mb-2">
                                                {post.tags.map((tag) => (
                                                    <span
                                                        key={tag}
                                                        className="px-2 py-0.5 text-xs rounded-md bg-background-secondary text-foreground-muted"
                                                    >
                                                        {tag}
                                                    </span>
                                                ))}
                                            </div>
                                            <h3 className="text-lg font-medium mb-1 group-hover:text-accent transition-colors">
                                                {post.title}
                                            </h3>
                                            <p className="text-sm text-foreground-muted line-clamp-1">
                                                {post.description}
                                            </p>
                                        </div>

                                        {/* Meta */}
                                        <div className="flex sm:flex-col items-center sm:items-end gap-2 text-xs text-foreground-muted/70">
                                            <span>{formatDate(post.date)}</span>
                                            <span>{post.readTime}</span>
                                        </div>

                                        {/* Arrow */}
                                        <ArrowRight className="hidden sm:block w-5 h-5 text-foreground-muted/30 group-hover:text-accent group-hover:translate-x-1 transition-all" />
                                    </article>
                                </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty state */}
                {filteredPosts.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-16"
                    >
                        <Search className="w-12 h-12 mx-auto text-foreground-muted/50 mb-4" />
                        <h3 className="text-lg font-medium mb-2">No articles found</h3>
                        <p className="text-foreground-muted">
                            Try adjusting your search or filter criteria
                        </p>
                    </motion.div>
                )}
            </div>
        </div>
    );
}
