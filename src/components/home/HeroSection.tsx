"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Download, Code2, Server, Cloud, Database, FileText } from "lucide-react";

const skills = [
    { icon: Server, label: "Backend Engineering" },
    { icon: Cloud, label: "Cloud Architecture" },
    { icon: Database, label: "System Design" },
    { icon: Code2, label: "Full-Stack Development" },
];

const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: [0.25, 0.1, 0.25, 1],
        },
    },
};

export default function HeroSection() {
    return (
        <section className="relative min-h-[calc(100vh-5rem)] flex items-center justify-center overflow-hidden">
            {/* Subtle gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-purple-500/5" />

            {/* Grid pattern overlay */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `linear-gradient(var(--foreground) 1px, transparent 1px),
            linear-gradient(90deg, var(--foreground) 1px, transparent 1px)`,
                    backgroundSize: '60px 60px',
                }}
            />

            <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
                >
                    {/* Text Content */}
                    <div className="flex-1 text-center lg:text-left">
                        <motion.div variants={itemVariants}>
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium rounded-full bg-accent/10 text-accent border border-accent/20">
                                Available for opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={itemVariants}
                            className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
                        >
                            Hi, I&apos;m{" "}
                            <span className="gradient-text">Shikhar Singh</span>
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="text-lg sm:text-xl text-foreground-muted mb-4"
                        >
                            Full-Stack Developer | Backend-Focused | Cloud & System Design
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="text-base text-foreground-muted/80 mb-8 max-w-xl mx-auto lg:mx-0"
                        >
                            Passionate about building scalable backend systems, RESTful APIs, and
                            cloud-native applications. Specializing in MERN stack, Django, AWS,
                            and containerized deployments.
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
                        >
                            <Link href="/projects">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="group w-full sm:w-auto px-6 py-3 rounded-lg bg-accent text-white font-medium flex items-center justify-center gap-2 hover:bg-accent-hover transition-colors"
                                >
                                    View Projects
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                            </Link>

                            <Link href="/resume">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto px-6 py-3 rounded-lg border border-border bg-card hover:bg-card-hover font-medium flex items-center justify-center gap-2 transition-colors"
                                >
                                    <FileText className="w-4 h-4" />
                                    View Resume
                                </motion.button>
                            </Link>
                        </motion.div>

                        {/* Skills badges */}
                        <motion.div
                            variants={itemVariants}
                            className="mt-12 flex flex-wrap items-center justify-center lg:justify-start gap-3"
                        >
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.label}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.8 + index * 0.1 }}
                                    whileHover={{ scale: 1.05, y: -2 }}
                                    className="flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border text-sm text-foreground-muted"
                                >
                                    <skill.icon className="w-4 h-4 text-accent" />
                                    {skill.label}
                                </motion.div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Profile Image */}
                    <motion.div
                        variants={itemVariants}
                        className="relative flex-shrink-0 -mt-8 lg:-mt-16"
                    >
                        <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
                            {/* Gradient ring */}
                            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent to-purple-500 p-1">
                                <div className="w-full h-full rounded-full bg-background overflow-hidden">
                                    {/* Profile image */}
                                    <Image
                                        src="/profile.jpg"
                                        alt="Shikhar Singh"
                                        fill
                                        className="object-cover object-top rounded-full"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <motion.div
                                animate={{
                                    scale: [1, 1.1, 1],
                                    opacity: [0.3, 0.5, 0.3]
                                }}
                                transition={{
                                    duration: 4,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="absolute -inset-4 rounded-full bg-gradient-to-br from-accent/20 to-purple-500/20 blur-2xl -z-10"
                            />
                        </div>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
