import React from 'react';

interface MissionCardProps {
    title: string;
    description: string;
    xpReward: string;
    totalTasks?: number;
    completedTasks?: number;
}

const MissionCard = ({
    title,
    description,
    xpReward,
    totalTasks = 10,
    completedTasks = 1
}: MissionCardProps) => {
    // Calculate percentage for the top circle and bottom bar
    const progressPercent = Math.round((completedTasks / totalTasks) * 100);

    return (
        <div className="bg-[#0a0a0a] border border-[#222] hover:border-[#FF0033]/50 transition-colors rounded-none p-5 mb-4 font-mono w-full max-w-md relative group">

            {/* Decorative Corner */}
            <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#FF0033] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="absolute bottom-0 left-0 w-2 h-2 border-b border-l border-[#FF0033] opacity-0 group-hover:opacity-100 transition-opacity"></div>

            {/* HEADER: Progress Circle, Title, and XP Badge */}
            <div className="flex justify-between items-start mb-4">
                <div className="flex gap-4 items-center">
                    {/* Big Progress Circle */}
                    <div className="w-14 h-14 rounded-full border-2 border-[#FF0033] flex items-center justify-center shadow-[0_0_10px_rgba(255,0,51,0.2)] bg-[#050505]">
                        <span className="text-white font-bold text-sm tracking-tighter">{progressPercent}%</span>
                    </div>
                    <div>
                        <h3 className="text-white text-xs font-bold uppercase tracking-widest text-[#00F0FF] mb-1" style={{ fontFamily: "'Press Start 2P', monospace", fontSize: '10px', lineHeight: '1.5' }}>
                            {title}
                        </h3>
                        <p className="text-zinc-500 text-[10px] leading-tight max-w-[160px]">{description}</p>
                    </div>
                </div>

                {/* XP Badge */}
                <div className="border border-[#FF0033] text-[#FF0033] px-2 py-1 text-[10px] bg-[#FF0033]/10 font-bold tracking-wider">
                    {xpReward} XP
                </div>
            </div>

            {/* THE TASK CIRCLES */}
            <div className="flex justify-between items-center my-6 px-1 gap-1">
                {Array.from({ length: totalTasks }).map((_, index) => {
                    // Determine the state of each circle
                    const isCompleted = index < completedTasks;
                    const isCurrent = index === completedTasks;

                    return (
                        <div
                            key={index}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${isCompleted
                                    ? 'bg-[#FF0033] shadow-[0_0_8px_#FF0033]' // Neon Red for completed
                                    : isCurrent
                                        ? 'bg-transparent border-2 border-[#00F0FF] shadow-[0_0_8px_#00F0FF] scale-125 animate-pulse' // Cyber Blue pulsing for current task
                                        : 'bg-[#1a1a1a] border border-[#333]' // Dark grey for locked
                                }`}
                        />
                    );
                })}
            </div>

            {/* FOOTER: Text Progress and Line Bar */}
            <div className="mt-2">
                <div className="flex justify-between text-[10px] text-zinc-600 mb-2 font-bold uppercase tracking-wider">
                    <span>{completedTasks} / {totalTasks} MISSIONS</span>
                    <span className="text-[#FF0033]">{progressPercent}%</span>
                </div>
                {/* Progress Bar Track */}
                <div className="w-full h-1 bg-[#1a1a1a] overflow-hidden">
                    {/* Progress Bar Fill */}
                    <div
                        className="h-full bg-[#FF0033] shadow-[0_0_10px_#FF0033]"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>
            </div>

        </div>
    );
};

export default function CurriculumSidebar() {
    return (
        <div className="bg-[#050505] h-full p-4 overflow-y-auto border-r border-white/10">
            <div className="mb-6 flex items-center gap-2 px-1">
                <div className="w-1.5 h-1.5 bg-[#00F0FF] rounded-full shadow-[0_0_5px_#00F0FF]"></div>
                <h2 className="text-[#00F0FF] text-xs font-bold uppercase tracking-[0.2em]">Campaign Status</h2>
            </div>

            <MissionCard
                title="PHASE 1: THE RECRUIT"
                description="Master HTML basics and semantic structure."
                xpReward="500"
                totalTasks={10}
                completedTasks={3}
            />
            <MissionCard
                title="PHASE 2: THE SCOUT"
                description="Learn hyperlinks, images, and file paths."
                xpReward="750"
                totalTasks={10}
                completedTasks={0}
            />
            <MissionCard
                title="PHASE 3: THE VANGUARD"
                description="CSS Grid and Flexbox mastery."
                xpReward="1000"
                totalTasks={12}
                completedTasks={0}
            />
        </div>
    );
}
