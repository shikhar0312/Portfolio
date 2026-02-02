"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock } from "lucide-react";

interface BlogPostContentProps {
    post: {
        title: string;
        content: string;
        date: string;
        tags: string[];
        readTime: string;
    };
}

function formatDate(dateString: string) {
    return new Date(dateString).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
    });
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
    return (
        <div className="page-transition min-h-screen py-12 md:py-20">
            <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Back Link */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Link
                        href="/blogs"
                        className="inline-flex items-center gap-2 text-sm text-foreground-muted hover:text-accent transition-colors mb-8"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Blog
                    </Link>
                </motion.div>

                {/* Header */}
                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mb-8"
                >
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                        {post.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 text-xs rounded-full bg-accent/10 text-accent"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    {/* Title */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
                        {post.title}
                    </h1>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-foreground-muted">
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4" />
                            {formatDate(post.date)}
                        </span>
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4" />
                            {post.readTime}
                        </span>
                    </div>
                </motion.header>

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="prose prose-lg dark:prose-invert max-w-none"
                >
                    {/* Simple markdown-like rendering */}
                    {post.content.split("\n").map((line, index) => {
                        // Headers
                        if (line.startsWith("# ")) {
                            return (
                                <h1 key={index} className="text-3xl font-bold mt-8 mb-4">
                                    {line.substring(2)}
                                </h1>
                            );
                        }
                        if (line.startsWith("## ")) {
                            return (
                                <h2 key={index} className="text-2xl font-semibold mt-6 mb-3 text-accent">
                                    {line.substring(3)}
                                </h2>
                            );
                        }
                        if (line.startsWith("### ")) {
                            return (
                                <h3 key={index} className="text-xl font-medium mt-4 mb-2">
                                    {line.substring(4)}
                                </h3>
                            );
                        }
                        // Code blocks
                        if (line.startsWith("```")) {
                            return null;
                        }
                        // List items
                        if (line.startsWith("- ")) {
                            return (
                                <li key={index} className="text-foreground-muted ml-4">
                                    {line.substring(2)}
                                </li>
                            );
                        }
                        if (line.match(/^\d+\. /)) {
                            return (
                                <li key={index} className="text-foreground-muted ml-4 list-decimal">
                                    {line.replace(/^\d+\. /, "")}
                                </li>
                            );
                        }
                        // Paragraphs
                        if (line.trim()) {
                            return (
                                <p key={index} className="text-foreground-muted leading-relaxed mb-4">
                                    {line}
                                </p>
                            );
                        }
                        return null;
                    })}
                </motion.div>

                {/* Footer */}
                <motion.footer
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-16 pt-8 border-t border-border"
                >
                    <div className="flex items-center justify-between">
                        <Link
                            href="/blogs"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-card border border-border hover:border-accent/50 text-sm font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            More Articles
                        </Link>
                    </div>
                </motion.footer>
            </article>
        </div>
    );
}
