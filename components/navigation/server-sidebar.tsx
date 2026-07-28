import Link from "next/link";
import { Plus } from "lucide-react";

import { createClient } from "@/utils/supabase/server";

export async function ServerSidebar() {
  const supabase = await createClient();

  // Fetch servers the user is a member of
  const { data: members } = await supabase
    .from("members")
    .select("server_id, servers(*)");

  // We are mapping the result because members join with servers
  const servers = (members?.map((m) => m.servers) || []) as any[];

  return (
    <div className="flex h-full w-[72px] flex-col items-center gap-y-4 bg-black border-r border-white/5 py-3 z-20">
      {/* Home Button (Direct Messages placeholder) */}
      <div className="group flex items-center justify-center relative">
        <Link href="/">
          <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-black border border-white/20 transition-all hover:rounded-[16px] hover:border-[#FF0000] hover:shadow-red-glow group-hover:rounded-[16px]">
            <span className="text-[#FF0000] font-bold font-mono">&gt;_</span>
          </div>
        </Link>
      </div>

      <div className="h-[2px] w-8 rounded-md bg-white/10" />

      {/* Server List */}
      <div className="flex w-full flex-1 flex-col items-center gap-y-4 overflow-y-auto overflow-x-hidden">
        {servers.map((server) => (
          <div key={server.id} className="group flex items-center justify-center relative">
            <Link href={`/community/channels/${server.id}`}>
              <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-zinc-900 border border-transparent transition-all hover:rounded-[16px] hover:border-[#FF0000] hover:shadow-red-glow group-hover:rounded-[16px] overflow-hidden">
                {server.image_url ? (
                  <img src={server.image_url} alt={server.name} className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                ) : (
                  <span className="text-lg text-white font-mono">{server.name.charAt(0).toUpperCase()}</span>
                )}
              </div>
            </Link>
          </div>
        ))}

        {/* Add Server Button */}
        <div className="group flex items-center justify-center relative mt-2">
          {/* We will trigger a modal to create a server using search params */}
          <Link href="?modal=createServer">
            <div className="flex h-[48px] w-[48px] items-center justify-center rounded-[24px] bg-transparent border border-dashed border-zinc-600 text-zinc-500 transition-all hover:rounded-[16px] hover:border-[#FF0000] hover:text-[#FF0000] hover:shadow-red-glow group-hover:rounded-[16px]">
              <Plus size={24} />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
