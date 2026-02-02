import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Shikhar Singh | Full-Stack Developer",
  description:
    "Full-Stack Developer specializing in Backend Engineering, Cloud Architecture, and System Design. Building scalable applications with MERN, Django, AWS, and Docker.",
  keywords: [
    "Full-Stack Developer",
    "Backend Engineer",
    "Cloud Architecture",
    "System Design",
    "MERN Stack",
    "Django",
    "AWS",
    "Docker",
    "Software Engineer",
  ],
  authors: [{ name: "Shikhar Singh" }],
  openGraph: {
    title: "Shikhar Singh | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Backend Engineering, Cloud Architecture, and System Design.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Shikhar Singh | Full-Stack Developer",
    description:
      "Full-Stack Developer specializing in Backend Engineering, Cloud Architecture, and System Design.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1 pt-16 md:pt-20">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
