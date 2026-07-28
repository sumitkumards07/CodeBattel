import { createClient } from "@/utils/supabase/server";
import { MemberList } from "./member-list";

export async function MemberSidebar({ serverId }: { serverId: string }) {
  const supabase = await createClient();

  const { data: members } = await supabase
    .from("members")
    .select("*, users(*)")
    .eq("server_id", serverId)
    .order("role", { ascending: true }); // ADMIN first

  return (
    <div className="h-full relative z-10">
      <MemberList members={members || []} />
    </div>
  );
}
