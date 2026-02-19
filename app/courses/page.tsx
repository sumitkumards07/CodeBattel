import Link from "next/link";
import { BookOpen, Code, Trophy } from "lucide-react";

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl">
                <div className="inline-block mb-6 p-4 rounded-full bg-blue-500/10 border border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.3)] animate-pulse">
                    <BookOpen className="w-12 h-12 text-blue-400" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    <span className="text-blue-500">ACADEMY</span> COURSES
                </h1>

                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Structured learning paths to master the matrix. <br />
                    From <span className="text-blue-400">Neophyte</span> to <span className="text-blue-400">Architect</span>.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded hover:border-blue-500/50 transition-colors group cursor-pointer text-left w-64">
                        <div className="flex justify-between items-start mb-4">
                            <Code className="text-blue-500 group-hover:scale-110 transition-transform" />
                            <span className="text-[10px] bg-blue-900/30 text-blue-400 px-2 py-1 rounded">BEGINNER</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1 group-hover:text-blue-400 transition-colors">Web Foundation</h3>
                        <p className="text-xs text-zinc-500">Master HTML, CSS & JS basics.</p>
                    </div>

                    <div className="border border-[#333] bg-[#0a0a0a] p-6 rounded hover:border-[#FF0033]/50 transition-colors group cursor-pointer text-left w-64 opacity-50 grayscale">
                        <div className="flex justify-between items-start mb-4">
                            <Trophy className="text-[#FF0033]" />
                            <span className="text-[10px] bg-red-900/30 text-red-400 px-2 py-1 rounded">LOCKED</span>
                        </div>
                        <h3 className="font-bold text-lg mb-1">Algorithm Mastery</h3>
                        <p className="text-xs text-zinc-500">Data Structures & Algo.</p>
                    </div>
                </div>

                <div className="mt-12">
                    <Link href="/" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-blue-400 hover:text-white transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
