"use client";

import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import { Github, Twitter, Linkedin, Youtube, Instagram } from "lucide-react";

const PRODUCTS = [
    { name: "HTML Playground", href: "/campaign/html" },
    { name: "CSS Playground", href: "/campaign/css" },
    { name: "JavaScript Playground", href: "/campaign/js" },
    { name: "Python Playground", href: "/playground/python" },
    { name: "Java Playground", href: "/playground/java" },
    { name: "SQL Lab", href: "/playground/sql" },
];

const RESOURCES = [
    { name: "Docs", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Pricing Policy", href: "#" },
    { name: "Refund Policy", href: "#" },
];

const SOCIALS = [
    { icon: Twitter, href: "#", label: "Twittter/X" },
    { icon: Github, href: "#", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Youtube, href: "#", label: "YouTube" },
];

export default function Footer() {
    return (
        <footer className="relative z-10 w-full border-t border-white/10 bg-black pt-20 pb-12 mt-32">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

                {/* Brand Column */}
                <div className="lg:col-span-1">
                    <div className="flex items-center gap-3 mb-6">
                        <Logo className="w-10 h-10" />
                        <span className="dot-matrix-text text-xl tracking-wider text-white">CODEBATTLE</span>
                    </div>
                    <p className="text-zinc-500 text-sm leading-relaxed mb-6">
                        Learn to Code, One Battle at a Time. Master real-world skills through gamified challenges and interactive labs.
                    </p>
                </div>

                {/* Socials Column */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Social</h4>
                    <ul className="space-y-4">
                        {SOCIALS.map((social) => (
                            <li key={social.label}>
                                <a
                                    href={social.href}
                                    className="text-zinc-500 hover:text-white transition-colors text-sm flex items-center gap-2 group"
                                >
                                    <social.icon className="w-4 h-4 group-hover:text-primary transition-colors" />
                                    {social.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Products Column */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Products</h4>
                    <ul className="space-y-4">
                        {PRODUCTS.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-zinc-500 hover:text-primary transition-colors text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Resources Column */}
                <div>
                    <h4 className="text-white font-bold uppercase tracking-wider text-sm mb-6">Resources</h4>
                    <ul className="space-y-4">
                        {RESOURCES.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-zinc-500 hover:text-white transition-colors text-sm">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                <p className="text-zinc-600 text-xs font-mono uppercase tracking-wide">
                    © {new Date().getFullYear()} CodeBattle. All rights reserved.
                </p>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-zinc-600 text-xs font-mono uppercase tracking-wide">Systems Operational</span>
                </div>
            </div>
        </footer>
    );
}
