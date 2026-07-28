"use client";

import { useEffect, useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { format } from "date-fns";

type MessageWithUser = any;

export function ChatMessages({
  channelId,
  initialMessages,
}: {
  channelId: string;
  initialMessages: MessageWithUser[];
}) {
  const [messages, setMessages] = useState<MessageWithUser[]>(initialMessages);
  const supabase = createClient();

  useEffect(() => {
    const channel = supabase
      .channel(`realtime:messages:${channelId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "messages",
          filter: `channel_id=eq.${channelId}`,
        },
        async (payload) => {
          // Fetch the user data for the new message
          const { data: userData } = await supabase
            .from("users")
            .select("*")
            .eq("id", payload.new.user_id)
            .single();

          const newMessage = {
            ...payload.new,
            users: userData,
          };
          
          setMessages((current) => [...current, newMessage]);
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, [channelId, supabase]);

  return (
    <div className="h-full overflow-y-auto px-4 py-4 flex flex-col gap-y-6">
      <div className="flex-1" />
      {messages.map((message) => (
        <div key={message.id} className="flex items-start gap-x-4 p-3 rounded-sm transition group border border-transparent hover:border-white/5 hover:bg-black/40">
          {message.users?.avatar_url ? (
            <img src={message.users.avatar_url} alt="Avatar" className="h-10 w-10 rounded-none border border-zinc-700 object-cover grayscale group-hover:grayscale-0 transition-all" />
          ) : (
            <div className="h-10 w-10 rounded-none bg-zinc-900 border border-zinc-700 group-hover:border-[#FF0000] flex items-center justify-center text-white text-lg font-mono transition-colors">
              {message.users?.username?.[0]?.toUpperCase() || message.users?.email?.[0]?.toUpperCase()}
            </div>
          )}
          <div className="flex flex-col w-full">
            <div className="flex items-center gap-x-2">
              <span className="font-mono text-sm tracking-wider text-[#FF0000] drop-shadow-[0_0_5px_rgba(255,0,0,0.5)]">
                {message.users?.username || message.users?.email?.split("@")[0]}
              </span>
              <span className="text-[10px] text-zinc-500 font-mono tracking-widest uppercase">
                {format(new Date(message.created_at), "MM/dd/yyyy p")}
              </span>
            </div>
            <p className="text-zinc-300 leading-relaxed break-words whitespace-pre-wrap font-sans text-sm mt-1">
              {message.content}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
