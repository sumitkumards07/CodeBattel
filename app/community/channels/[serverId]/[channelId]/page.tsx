import { Hash } from "lucide-react";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { ChatMessages } from "@/components/chat/chat-messages";
import { ChatInput } from "@/components/chat/chat-input";

export default async function ChannelIdPage(props: {
  params: Promise<{ serverId: string; channelId: string }>;
}) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: userResponse } = await supabase.auth.getUser();
  if (!userResponse?.user) return redirect("/community/login");

  const { data: channel } = await supabase
    .from("channels")
    .select("*")
    .eq("id", params.channelId)
    .single();

  if (!channel) {
    return redirect(`/community/channels/${params.serverId}`);
  }

  const { data: initialMessages } = await supabase
    .from("messages")
    .select("*, users(*)")
    .eq("channel_id", params.channelId)
    .order("created_at", { ascending: true });

  return (
    <div className="flex flex-col h-full bg-[#050505] relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>

      {/* Header */}
      <div className="flex h-12 items-center border-b border-white/10 px-4 font-semibold text-white shadow-sm gap-x-2 relative z-10 bg-black/60 backdrop-blur-md">
        <Hash className="h-4 w-4 text-[#FF0000]" />
        <span className="font-mono text-sm tracking-widest uppercase text-white drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
          {channel.name}
        </span>
        <div className="ml-auto flex items-center gap-2 border border-[#FF0000]/30 bg-[#FF0000]/10 px-2 py-0.5 rounded-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0000] shadow-red-glow-sm animate-pulse"></span>
          <span className="text-[10px] text-[#FF0000] font-mono font-bold tracking-widest uppercase">Live</span>
        </div>
      </div>

      <div className="flex-1 overflow-hidden relative z-10">
        <ChatMessages channelId={params.channelId} initialMessages={initialMessages || []} />
      </div>
      
      <div className="relative z-10 border-t border-white/5 bg-black/40 backdrop-blur-sm">
        <ChatInput channelId={params.channelId} userId={userResponse.user.id} />
      </div>
    </div>
  );
}
