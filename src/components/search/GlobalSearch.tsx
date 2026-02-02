"use client";

import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X, FileText, Folder, ArrowRight } from "lucide-react";

// Sample searchable content - In production, this would be fetched from an API
const searchableContent = {
    projects: [
        { id: "blink-basket", title: "Blink Basket", type: "project", href: "/projects", description: "MERN e-commerce platform" },
        { id: "student-management", title: "Student Management System", type: "project", href: "/projects", description: "Django academic platform" },
        { id: "ai-doc-search", title: "AI Document Search Engine", type: "project", href: "/projects", description: "RAG-based search system" },
    ],
    blogs: [
        { id: "scalable-apis", title: "Building Scalable REST APIs with Node.js", type: "blog", href: "/blogs/building-scalable-apis-nodejs", description: "API design best practices" },
        { id: "system-design", title: "System Design Fundamentals", type: "blog", href: "/blogs/system-design-fundamentals", description: "Core system design concepts" },
        { id: "docker-guide", title: "Docker Containerization Guide", type: "blog", href: "/blogs", description: "Docker best practices" },
    ],
    pages: [
        { id: "home", title: "Home", type: "page", href: "/", description: "Portfolio home page" },
        { id: "work", title: "Work Experience", type: "page", href: "/work", description: "Engineering expertise" },
        { id: "projects", title: "Projects", type: "page", href: "/projects", description: "Featured projects" },
        { id: "blogs", title: "Blog", type: "page", href: "/blogs", description: "Technical articles" },
        { id: "resume", title: "Resume", type: "page", href: "/resume", description: "Professional background" },
    ],
};

const allContent = [
    ...searchableContent.projects,
    ...searchableContent.blogs,
    ...searchableContent.pages,
];

interface GlobalSearchProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function GlobalSearch({ isOpen, onClose }: GlobalSearchProps) {
    const [query, setQuery] = useState("");
    const inputRef = useRef<HTMLInputElement>(null);

    const results = useMemo(() => {
        if (!query.trim()) return [];
        const lowerQuery = query.toLowerCase();
        return allContent.filter(
            (item) =>
                item.title.toLowerCase().includes(lowerQuery) ||
                item.description.toLowerCase().includes(lowerQuery)
        );
    }, [query]);

    useEffect(() => {
        if (isOpen) {
            inputRef.current?.focus();
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
            setQuery("");
        }
        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                onClose();
            }
        };
        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [onClose]);

    const getIcon = (type: string) => {
        switch (type) {
            case "project":
                return Folder;
            case "blog":
                return FileText;
            default:
                return ArrowRight;
        }
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh]"
                >
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
                        onClick={onClose}
                    />

                    {/* Search Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.2 }}
                        className="relative w-full max-w-xl mx-4 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden"
                    >
                        {/* Search Input */}
                        <div className="flex items-center gap-3 px-4 py-4 border-b border-border">
                            <Search className="w-5 h-5 text-foreground-muted" />
                            <input
                                ref={inputRef}
                                type="text"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                placeholder="Search projects, blogs, pages..."
                                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground-muted"
                            />
                            <button
                                onClick={onClose}
                                className="p-1 rounded-md hover:bg-background-secondary transition-colors"
                            >
                                <X className="w-5 h-5 text-foreground-muted" />
                            </button>
                        </div>

                        {/* Results */}
                        <div className="max-h-[50vh] overflow-y-auto">
                            {query && results.length === 0 && (
                                <div className="p-8 text-center text-foreground-muted">
                                    <p>No results found for &quot;{query}&quot;</p>
                                </div>
                            )}

                            {results.length > 0 && (
                                <div className="p-2">
                                    {results.map((result, index) => {
                                        const Icon = getIcon(result.type);
                                        return (
                                            <Link
                                                key={result.id}
                                                href={result.href}
                                                onClick={onClose}
                                            >
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    transition={{ delay: index * 0.05 }}
                                                    className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-background-secondary transition-colors group"
                                                >
                                                    <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                                        <Icon className="w-5 h-5 text-accent" />
                                                    </div>
                                                    <div className="flex-1 min-w-0">
                                                        <p className="font-medium truncate group-hover:text-accent transition-colors">
                                                            {result.title}
                                                        </p>
                                                        <p className="text-sm text-foreground-muted truncate">
                                                            {result.description}
                                                        </p>
                                                    </div>
                                                    <span className="text-xs text-foreground-muted/50 uppercase">
                                                        {result.type}
                                                    </span>
                                                </motion.div>
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}

                            {!query && (
                                <div className="p-6 text-center text-foreground-muted">
                                    <p className="text-sm">Start typing to search...</p>
                                    <p className="text-xs mt-2 opacity-50">Press ESC to close</p>
                                </div>
                            )}
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
