"use client";

import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";

export function CreateServerModal() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const isModalOpen = searchParams.get("modal") === "createServer";
  
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const supabase = createClient();

  const handleClose = () => {
    // Remove the modal param
    const params = new URLSearchParams(searchParams.toString());
    params.delete("modal");
    router.push(`${pathname}?${params.toString()}`);
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { data: userResponse } = await supabase.auth.getUser();
    const user = userResponse.user;

    if (!user) return;

    // Create a simple invite code
    const inviteCode = Math.random().toString(36).substring(2, 10);

    const { data: server, error } = await supabase
      .from("servers")
      .insert({
        name,
        owner_id: user.id,
        invite_code: inviteCode
      })
      .select()
      .single();

    if (server) {
      // Create admin member
      await supabase.from("members").insert({
        role: "ADMIN",
        user_id: user.id,
        server_id: server.id,
      });

      // Create general channel
      await supabase.from("channels").insert({
        name: "general",
        server_id: server.id,
      });

      router.refresh();
      router.push(`/community/channels/${server.id}`);
    } else {
      console.error("Server Creation Error Details:", JSON.stringify(error, null, 2));
      alert(`Error creating server: ${error?.message || JSON.stringify(error)}`);
    }

    setLoading(false);
  };

  return (
    <Dialog open={isModalOpen} onOpenChange={handleClose}>
      <DialogContent className="glass-panel text-white border-white/10 shadow-red-glow p-0 overflow-hidden sm:max-w-[425px]">
        <div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>
        <DialogHeader className="pt-8 px-6 relative z-10">
          <DialogTitle className="text-2xl text-center dot-matrix-text text-white drop-shadow-[0_0_10px_rgba(255,0,0,0.5)]">
            Initialize Base
          </DialogTitle>
          <DialogDescription className="text-center text-zinc-400 font-mono text-xs mt-2">
            Deploy a new operational server for your squad.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={onSubmit} className="space-y-8 relative z-10">
          <div className="space-y-8 px-6">
            <div className="flex flex-col gap-2">
              <Label className="uppercase text-[10px] font-mono tracking-widest text-[#FF0000]">
                Base Callsign
              </Label>
              <Input
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="bg-black/50 border border-white/10 rounded-none text-white focus-visible:ring-1 focus-visible:ring-[#FF0000] focus-visible:border-[#FF0000] font-mono"
                placeholder="Alpha Site"
                required
              />
            </div>
          </div>
          <DialogFooter className="bg-black/60 border-t border-white/10 px-6 py-4 flex items-center justify-between">
            <button
              type="button"
              onClick={handleClose}
              disabled={loading}
              className="text-zinc-400 hover:text-white font-mono text-xs uppercase tracking-widest transition"
            >
              Abort
            </button>
            <button
              type="submit"
              disabled={loading || !name}
              className="bg-[#FF0000]/20 border border-[#FF0000] text-[#FF0000] hover:bg-[#FF0000] hover:text-white hover:shadow-red-glow px-6 py-2 rounded-none text-xs font-mono uppercase tracking-widest transition-all disabled:opacity-50 crt-flicker"
            >
              Execute
            </button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
