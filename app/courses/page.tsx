import Link from "next/link";
import { Terminal, Cpu, Database, Layout, Cloud, Shield, Activity, ChevronRight, BookOpen } from "lucide-react";

const COURSES = [
    { name: "React Labs", slug: "react-labs", desc: "Interactive React challenges and projects. Master state, hooks, and components.", icon: Layout, level: "INTERMEDIATE", color: "from-sky-400 to-blue-600", accent: "text-sky-400" },
    { name: "C Language", slug: "c", desc: "Mother of all languages. Master memory and system programming.", icon: Terminal, level: "BEGINNER", color: "from-zinc-500 to-zinc-700", accent: "text-zinc-400" },
    { name: "C++", slug: "cpp", desc: "Object-oriented systems & competitive programming mastery.", icon: Cpu, level: "INTERMEDIATE", color: "from-blue-500 to-blue-700", accent: "text-blue-400" },
    { name: "Java", slug: "java", desc: "Enterprise applications & robust backend development.", icon: Layout, level: "BEGINNER", color: "from-orange-500 to-red-600", accent: "text-orange-400" },
    { name: "Python", slug: "python", desc: "Scripts, APIs, automation, and Data analysis.", icon: Activity, level: "BEGINNER", color: "from-green-500 to-emerald-700", accent: "text-green-400" },
    { name: "JavaScript", slug: "javascript", desc: "The language of the Web. Master both Frontend & Backend.", icon: Layout, level: "BEGINNER", color: "from-yellow-400 to-yellow-600", accent: "text-yellow-400" },
    { name: "Data Science", slug: "data-science", desc: "Extract insights from raw data. Pandas, NumPy, and visualization.", icon: Database, level: "ADVANCED", color: "from-purple-500 to-purple-700", accent: "text-purple-400" },
    { name: "Machine Learning", slug: "machine-learning", desc: "AI, Models, and Neural Networks architectures.", icon: Cpu, level: "ADVANCED", color: "from-[#ff2a2a] to-red-800", accent: "text-[#ff2a2a]" },
    { name: "Linux", slug: "linux", desc: "OS fundamentals, terminal mastery, and shell scripting.", icon: Terminal, level: "INTERMEDIATE", color: "from-cyan-500 to-cyan-700", accent: "text-cyan-400" },
    { name: "DevOps", slug: "devops", desc: "CI/CD, Docker, Kubernetes, and Cloud infrastructure.", icon: Cloud, level: "ADVANCED", color: "from-indigo-500 to-blue-700", accent: "text-indigo-400" },
];

export default function CoursesPage() {
    return (
        <div className="min-h-screen bg-[#050505] text-white font-sans flex flex-col items-center justify-start pt-32 pb-24 px-4 relative overflow-hidden">
            {/* Background Grid & Blur */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>

            <div className="relative z-10 w-full max-w-6xl mx-auto flex flex-col items-center">
                {/* Header */}
                <div className="text-center mb-16 max-w-2xl">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
                        <Shield className="w-3.5 h-3.5 text-zinc-400" />
                        <span className="text-[10px] font-bold tracking-[0.2em] text-zinc-400 uppercase">Training Grounds</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight text-white">
                        Academy <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">Courses</span>
                    </h1>

                    <p className="text-zinc-400 text-lg leading-relaxed font-medium">
                        Structured learning paths designed to elevate your skills. <br className="hidden md:block" />
                        From fundamental syntax to advanced system architecture.
                    </p>
                </div>

                {/* Courses Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                    {COURSES.map((course) => {
                        const Icon = course.icon;
                        const isBeginner = course.level === "BEGINNER";
                        const isIntermediate = course.level === "INTERMEDIATE";

                        return (
                            <Link href={`/courses/${course.slug}`} key={course.slug} className="group flex flex-col outline-none">
                                <div className="relative border border-[#1a1a1a] bg-[#0a0a0a] rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-white/20 group-hover:-translate-y-1 h-full flex flex-col">
                                    {/* Top Color Bar */}
                                    <div className={`h-1.5 w-full bg-gradient-to-r ${course.color} opacity-80 group-hover:opacity-100 transition-opacity`}></div>

                                    <div className="p-6 flex flex-col flex-1">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className={`w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform group-hover:scale-110 group-hover:bg-white/10`}>
                                                <Icon className={`w-5 h-5 ${course.accent}`} />
                                            </div>
                                            <span className={`text-[9px] px-2.5 py-1 rounded bg-white/5 border font-bold tracking-widest uppercase ${isBeginner ? "text-green-400 border-green-500/20 bg-green-500/5" :
                                                    isIntermediate ? "text-yellow-400 border-yellow-500/20 bg-yellow-500/5" :
                                                        "text-red-400 border-red-500/20 bg-red-500/5"
                                                }`}>
                                                {course.level}
                                            </span>
                                        </div>

                                        <h3 className="font-bold text-xl mb-3 text-white group-hover:text-blue-400 transition-colors tracking-tight">
                                            {course.name}
                                        </h3>

                                        <p className="text-[14px] text-zinc-400 leading-relaxed mb-6 flex-1">
                                            {course.desc}
                                        </p>

                                        <div className="pt-4 border-t border-[#1a1a1a] mt-auto flex items-center justify-between">
                                            <span className="text-[11px] text-zinc-500 font-bold tracking-widest uppercase">View Syllabus</span>
                                            <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-500 group-hover:text-white transition-colors">
                                                <ChevronRight className="w-4 h-4 text-zinc-500 group-hover:text-white" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>

            </div>
        </div>
    );
}
