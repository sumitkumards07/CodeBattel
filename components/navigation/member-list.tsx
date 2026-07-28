"use client";

import { usePresence } from "@/components/providers/presence-provider";

export function MemberList({ members }: { members: any[] }) {
  const { onlineUsers } = usePresence();

  return (
    <div className="flex h-full w-[240px] flex-col glass-panel rounded-none border-t-0 border-b-0 border-r-0 border-l border-white/5 relative z-10">
      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-4 text-[10px] font-mono font-semibold uppercase text-zinc-600 tracking-[0.2em] flex items-center">
          <span className="w-2 h-2 bg-zinc-600 rounded-full mr-2"></span>
          Operatives — {members?.length || 0}
        </div>
        <div className="space-y-2">
          {members?.map((member: any) => {
            const isOnline = onlineUsers.includes(member.users.id);
            
            return (
              <div
                key={member.id}
                className="group flex w-full items-center gap-x-3 rounded-sm px-2 py-2 hover:bg-zinc-900 border border-transparent hover:border-white/10 cursor-pointer transition-colors"
              >
                <div className="relative">
                  {member.users.avatar_url ? (
                    <img
                      src={member.users.avatar_url}
                      alt={member.users.username}
                      className="h-8 w-8 rounded-none border border-zinc-700 object-cover grayscale group-hover:grayscale-0 transition-all"
                    />
                  ) : (
                    <div className="h-8 w-8 rounded-none bg-zinc-800 border border-zinc-700 group-hover:border-[#FF0000] flex items-center justify-center text-white font-mono text-sm shadow-inner-light transition-colors relative overflow-hidden">
                      <div className="absolute inset-0 bg-[#FF0000]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      <span className="relative z-10">{member.users.username?.[0]?.toUpperCase() || member.users.email?.[0]?.toUpperCase()}</span>
                    </div>
                  )}
                  {/* Online status indicator */}
                  <div 
                    className={`absolute -bottom-1 -right-1 h-3 w-3 border-[2px] border-black ${
                      isOnline ? "bg-[#FF0000] shadow-red-glow" : "bg-zinc-600"
                    }`} 
                  />
                </div>
                <div className="flex flex-col">
                  <span className={`text-xs font-mono tracking-wider ${isOnline ? "text-white" : "text-zinc-500"}`}>
                    {member.users.username || member.users.email.split("@")[0]}
                  </span>
                  {member.role === "ADMIN" && (
                    <span className="text-[9px] uppercase font-bold font-mono text-[#FF0000] border border-[#FF0000]/30 bg-[#FF0000]/10 px-1 mt-1 inline-block w-fit tracking-widest">
                      Commander
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
