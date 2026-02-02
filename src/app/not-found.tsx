"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
    return (
        <div className="page-transition min-h-screen flex items-center justify-center py-12">
            <div className="max-w-md mx-auto px-4 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <h1 className="text-8xl md:text-9xl font-bold gradient-text mb-4">
                        404
                    </h1>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                        Page Not Found
                    </h2>
                    <p className="text-foreground-muted mb-8">
                        The page you&apos;re looking for doesn&apos;t exist or has been moved.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <Link href="/">
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-accent text-white font-medium hover:bg-accent-hover transition-colors"
                            >
                                <Home className="w-4 h-4" />
                                Go Home
                            </motion.button>
                        </Link>
                        <button
                            onClick={() => window.history.back()}
                            className="flex items-center gap-2 px-6 py-3 rounded-lg border border-border bg-card hover:bg-card-hover font-medium transition-colors"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Go Back
                        </button>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
