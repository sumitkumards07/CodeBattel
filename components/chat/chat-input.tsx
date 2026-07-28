"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { useRouter } from "next/navigation";

export function ChatInput({ channelId, userId }: { channelId: string, userId: string }) {
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const supabase = createClient();

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!content.trim() || loading) return;

    try {
      setLoading(true);
      const { error } = await supabase.from("messages").insert({
        content,
        channel_id: channelId,
        user_id: userId,
      });
      if (!error) {
        setContent("");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-4 py-4 relative bg-black/60 backdrop-blur-md">
      <form onSubmit={onSubmit} className="relative flex items-center group">
        <div className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-12 border-r border-white/10 bg-zinc-900 group-hover:bg-[#FF0000]/10 transition-colors">
          <span className="text-[#FF0000] font-mono font-bold">&gt;_</span>
        </div>
        <input
          disabled={loading}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="ENTER COMMAND..."
          className="w-full bg-black/50 border border-white/10 pl-16 pr-14 py-4 text-white font-mono placeholder:text-zinc-600 focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-colors uppercase text-sm"
        />
        <button
          type="submit"
          disabled={!content.trim() || loading}
          className="absolute right-2 top-2 bottom-2 px-4 bg-[#FF0000]/20 border border-[#FF0000]/50 text-[#FF0000] hover:bg-[#FF0000] hover:text-white font-mono text-[10px] uppercase tracking-widest disabled:opacity-50 transition-colors"
        >
          SEND
        </button>
      </form>
    </div>
  );
}
