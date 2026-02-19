import Link from "next/link";
import { Users, MessageSquare, Globe } from "lucide-react";

export default function CommunityPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-mono flex flex-col items-center justify-center p-4 relative overflow-hidden">
            {/* Background Grid */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-2xl">
                <div className="inline-block mb-6 p-4 rounded-full bg-purple-500/10 border border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)] animate-pulse">
                    <Globe className="w-12 h-12 text-purple-400" />
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tighter" style={{ fontFamily: "'Press Start 2P', monospace" }}>
                    GLOBAL <span className="text-purple-500">NET</span>
                </h1>

                <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
                    Connect with fellow runners. Share code, compete, and rise.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-lg mx-auto">
                    <button className="flex items-center gap-4 border border-[#333] bg-[#0a0a0a] p-4 hover:bg-[#111] hover:border-purple-500/50 transition-all group">
                        <Users className="w-6 h-6 text-zinc-500 group-hover:text-purple-400" />
                        <div className="text-left">
                            <div className="text-sm font-bold group-hover:text-purple-400">Find a Squad</div>
                            <div className="text-[10px] text-zinc-600">Team up for events</div>
                        </div>
                    </button>

                    <button className="flex items-center gap-4 border border-[#333] bg-[#0a0a0a] p-4 hover:bg-[#111] hover:border-purple-500/50 transition-all group">
                        <MessageSquare className="w-6 h-6 text-zinc-500 group-hover:text-purple-400" />
                        <div className="text-left">
                            <div className="text-sm font-bold group-hover:text-purple-400">Global Chat</div>
                            <div className="text-[10px] text-zinc-600">342 Runners Online</div>
                        </div>
                    </button>
                </div>

                <div className="mt-12">
                    <Link href="/" className="px-8 py-3 bg-white text-black font-bold uppercase tracking-widest hover:bg-purple-400 hover:text-white transition-colors">
                        Return Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
