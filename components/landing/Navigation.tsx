"use client";

import { usePathname } from "next/navigation";
import { Search, ChevronDown, BookOpen, Home, Zap, Trophy, Shield, ArrowLeft, LogOut, User as UserIcon } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { auth, googleProvider } from "@/lib/firebase";
import { signInWithPopup, signOut, onAuthStateChanged, User } from "firebase/auth";

export default function Navigation() {
    const pathname = usePathname();
    const isCampaign = pathname?.startsWith("/campaign") || pathname?.startsWith("/battle") || pathname?.startsWith("/playground");

    const [user, setUser] = useState<User | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setIsLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const handleGoogleLogin = async () => {
        try {
            await signInWithPopup(auth, googleProvider);
        } catch (error) {
            console.error("Google login failed", error);
        }
    };

    const handleLogout = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error("Logout failed", error);
        }
    };

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 flex items-center justify-center w-auto max-w-6xl">
            <div className="
                relative flex items-center gap-1 p-2
                bg-[#0a0a0a]/80 backdrop-blur-2xl 
                border border-white/10 rounded-full 
                shadow-[0_0_40px_-10px_rgba(0,0,0,0.5)]
                ring-1 ring-white/5
            ">
                {!isCampaign ? (
                    <>
                        {/* Global Navigation Layout */}
                        <Link href="/" className="flex items-center gap-2 pl-4 pr-4 py-2 hover:opacity-80 transition-opacity">
                            <Logo className="w-8 h-8" />
                            <span className="dot-matrix-text text-sm tracking-widest text-white/90">CODEBATTLE</span>
                        </Link>

                        <div className="w-px h-6 bg-white/10 mx-1"></div>

                        {/* Navigation Links */}
                        <div className="hidden md:flex items-center gap-0.5 mx-1">
                            <Link href="/" className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <Home className="w-3.5 h-3.5" />
                                HOME
                            </Link>

                            <Link href="/tutorials" className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                <BookOpen className="w-3.5 h-3.5" />
                                TUTORIALS
                            </Link>

                            {/* Labs Dropdown */}
                            <div className="relative group">
                                <button className="flex items-center gap-1.5 px-4 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 group-hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                    LABS
                                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180 opacity-50 group-hover:opacity-100" />
                                </button>

                                {/* Premium Dropdown Menu */}
                                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0">
                                    <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl min-w-[220px] ring-1 ring-white/5 flex flex-col gap-1 overflow-hidden">
                                        {[
                                            { name: "HTML", href: "/campaign/html/basics", color: "bg-orange-500", label: "Markup & Structure" },
                                            { name: "CSS", href: "/campaign/css/basics", color: "bg-blue-500", label: "Styling & Design" },
                                            { name: "JavaScript", href: "/campaign/javascript/basics", color: "bg-yellow-500", label: "Logic & Interactivity" },
                                            { name: "Python", href: "/campaign/python/type-discovery", color: "bg-green-500", label: "Data & Systems" },
                                            { name: "Java", href: "/campaign/java/basics", color: "bg-red-500", label: "Object Oriented" }
                                        ].map((lab) => (
                                            <Link key={lab.name} href={lab.href} className="flex items-center gap-3 px-3 py-2.5 rounded-xl hover:bg-white/5 transition-colors group/item">
                                                <div className={`w-8 h-8 rounded-lg ${lab.color}/10 flex items-center justify-center border border-white/5 group-hover/item:border-${lab.color}/50 transition-colors`}>
                                                    <div className={`w-2 h-2 rounded-full ${lab.color} shadow-[0_0_8px_currentColor]`}></div>
                                                </div>
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-zinc-300 group-hover/item:text-white transition-colors">{lab.name}</span>
                                                    <span className="text-[10px] text-zinc-600 group-hover/item:text-zinc-500">{lab.label}</span>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <Link href="/courses" className="px-4 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                COURSES
                            </Link>

                            <Link href="/community" className="px-4 py-2.5 rounded-full text-xs font-medium text-zinc-400 hover:text-white hover:bg-white/5 transition-all duration-300 hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                                COMMUNITY
                            </Link>
                        </div>

                        <div className="w-px h-6 bg-white/10 mx-1"></div>

                        <div className="flex items-center gap-2 pl-2">
                            <button className="size-9 flex items-center justify-center rounded-full bg-transparent hover:bg-white/10 text-zinc-400 hover:text-white transition-all hover:shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                                <Search className="w-4 h-4" />
                            </button>

                            {isLoading ? (
                                <div className="w-20 h-9 bg-white/5 rounded-full animate-pulse"></div>
                            ) : user ? (
                                <div className="relative group">
                                    <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 px-3 py-1.5 rounded-full transition-all border border-white/10">
                                        {user.photoURL ? (
                                            <img src={user.photoURL} alt="Avatar" className="w-6 h-6 rounded-full" />
                                        ) : (
                                            <div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center">
                                                <UserIcon className="w-3 h-3 text-white" />
                                            </div>
                                        )}
                                    </button>
                                    <div className="absolute top-full right-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top -translate-y-2 group-hover:translate-y-0 min-w-[200px]">
                                        <div className="bg-[#111]/90 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl flex flex-col gap-1">
                                            <div className="px-3 py-2 text-xs text-zinc-400 break-all border-b border-white/10 mb-1">
                                                {user.email}
                                            </div>
                                            <button 
                                                onClick={handleLogout}
                                                className="flex items-center gap-2 px-3 py-2 rounded-xl hover:bg-red-500/10 text-red-400 hover:text-red-300 transition-colors text-xs font-medium w-full text-left"
                                            >
                                                <LogOut className="w-3 h-3" />
                                                Sign Out
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ) : (
                                <button onClick={handleGoogleLogin} className="bg-white text-black text-[10px] font-bold uppercase tracking-wider px-5 py-2 rounded-full hover:bg-zinc-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                    Sign In
                                </button>
                            )}
                        </div>
                    </>
                ) : (
                    <>
                        {/* Campaign Navigation Layout */}
                        <div className="flex items-center pl-2 pr-6 py-1 gap-6">
                            <div className="flex items-center gap-4">
                                <Link href="/tutorials" className="flex items-center justify-center w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-zinc-400 hover:text-white transition-all">
                                    <ArrowLeft className="w-4 h-4" />
                                </Link>

                                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10">
                                    <div className="w-5 h-5 bg-red-500/10 border border-red-500/50 rounded-full flex items-center justify-center">
                                        <Zap className="w-3 h-3 text-red-500" />
                                    </div>
                                    <span className="font-['VT323'] text-lg uppercase tracking-widest text-white mt-0.5">
                                        Mission Control
                                    </span>
                                </div>
                            </div>

                            <div className="w-px h-6 bg-white/10 mx-1"></div>

                            <div className="flex items-center gap-6">
                                <div className="flex items-center gap-2">
                                    <Trophy className="w-4 h-4 text-yellow-500" />
                                    <span className="font-['VT323'] text-lg text-yellow-500 mt-0.5">Rank: 001</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Shield className="w-4 h-4 text-blue-500" />
                                    <span className="font-['VT323'] text-lg text-blue-500 mt-0.5">Streak: 7</span>
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </nav>
    );
}
