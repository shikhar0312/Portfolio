"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Github, Linkedin, Mail, Twitter, Code2 } from "lucide-react";

const socialLinks = [
    {
        href: "https://github.com/shikhar0312",
        icon: Github,
        label: "GitHub",
    },
    {
        href: "https://www.linkedin.com/in/shikharsinghwork/",
        icon: Linkedin,
        label: "LinkedIn",
    },
    {
        href: "https://leetcode.com/u/shikharsinghwork/",
        icon: Code2,
        label: "LeetCode",
    },
    {
        href: "https://x.com/DEA_SHIKHAR",
        icon: Twitter,
        label: "X (Twitter)",
    },
    {
        href: "mailto:shikharsingh.work@gmail.com",
        icon: Mail,
        label: "Email",
    },
];

export default function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="w-full border-t border-border bg-background-secondary/50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Logo and Copyright */}
                    <div className="flex flex-col items-center md:items-start gap-2">
                        <Link
                            href="/"
                            className="text-lg font-semibold gradient-text"
                        >
                            Shikhar Singh
                        </Link>
                        <p className="text-sm text-foreground-muted">
                            © {currentYear} Shikhar Singh. All rights reserved.
                        </p>
                    </div>

                    {/* Social Links */}
                    <div className="flex items-center gap-4">
                        {socialLinks.map((social, index) => (
                            <motion.a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                whileHover={{ scale: 1.1, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className="p-3 rounded-full bg-card hover:bg-accent hover:text-white transition-colors"
                                aria-label={social.label}
                            >
                                <social.icon className="w-5 h-5" />
                            </motion.a>
                        ))}
                    </div>
                </div>

                {/* Decorative line */}
                <div className="mt-8 pt-8 border-t border-border/50">
                    <p className="text-center text-xs text-foreground-muted">
                        Built with passion using Next.js, Tailwind CSS, and Framer Motion
                    </p>
                </div>
            </div>
        </footer>
    );
}
