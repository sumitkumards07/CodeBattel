import { Hash, Settings } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/utils/supabase/server";
import { signout } from "@/app/community/login/actions";

export async function ChannelSidebar({ serverId }: { serverId: string }) {
  const supabase = await createClient();

  const { data: server } = await supabase
    .from("servers")
    .select("*")
    .eq("id", serverId)
    .single();

  const { data: channels } = await supabase
    .from("channels")
    .select("*")
    .eq("server_id", serverId)
    .order("created_at", { ascending: true });

  const { data: userResponse } = await supabase.auth.getUser();
  const user = userResponse?.user;

  if (!server) return null;

  return (
    <div className="flex h-full w-[240px] flex-col glass-panel rounded-none border-t-0 border-b-0 border-l-0 border-r border-white/5 relative z-10">
      {/* Server Header */}
      <div className="flex h-12 items-center px-4 font-bold text-white border-b border-white/10 hover:bg-black/50 cursor-pointer transition">
        <span className="dot-matrix-text text-lg text-[#FF0000] mr-2">/</span>
        <span className="uppercase tracking-widest text-sm">{server.name}</span>
      </div>

      <div className="flex-1 overflow-y-auto px-3 py-4">
        <div className="mb-4 text-[10px] font-mono font-semibold uppercase text-zinc-600 tracking-[0.2em] flex items-center">
          <span className="w-2 h-2 bg-[#FF0000] rounded-full mr-2 shadow-red-glow"></span>
          Communications
        </div>
        <div className="space-y-1">
          {channels?.map((channel) => (
            <Link
              key={channel.id}
              href={`/community/channels/${serverId}/${channel.id}`}
              className="group flex w-full items-center gap-x-2 rounded-sm px-2 py-1.5 hover:bg-zinc-900 border border-transparent hover:border-white/10 transition-colors"
            >
              <Hash className="h-4 w-4 text-zinc-600 group-hover:text-[#FF0000] transition-colors" />
              <span className="text-xs font-mono text-zinc-400 group-hover:text-white uppercase tracking-wider">
                {channel.name}
              </span>
            </Link>
          ))}
        </div>
      </div>

      {/* User Profile Area */}
      {user && (
        <div className="flex h-[60px] items-center border-t border-white/10 bg-black/60 px-3 py-2">
          <div className="flex w-full items-center justify-between rounded px-2 py-1.5 hover:bg-zinc-900 border border-transparent hover:border-white/10 transition-colors group">
            <div className="flex items-center gap-x-3">
              <div className="h-8 w-8 rounded-none bg-zinc-800 border border-zinc-600 group-hover:border-[#FF0000] flex items-center justify-center text-white font-mono shadow-inner-light transition-colors relative overflow-hidden">
                <div className="absolute inset-0 bg-[#FF0000]/10 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <span className="relative z-10">{user.email?.[0].toUpperCase()}</span>
              </div>
              <div className="flex flex-col">
                <span className="font-mono text-xs text-white line-clamp-1 uppercase tracking-wider">{user.email?.split("@")[0]}</span>
                <div className="flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] animate-pulse"></span>
                  <span className="text-[9px] font-mono text-[#FF0000] uppercase tracking-widest">Active</span>
                </div>
              </div>
            </div>
            <form action={signout}>
              <button title="Log out" className="flex items-center justify-center p-1.5 rounded hover:bg-[#FF0000]/20 text-zinc-500 hover:text-[#FF0000] transition-colors border border-transparent hover:border-[#FF0000]/50">
                <Settings className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
