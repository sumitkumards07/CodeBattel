import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ServerIdPage(props: { params: Promise<{ serverId: string }> }) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: channel } = await supabase
    .from("channels")
    .select("id")
    .eq("server_id", params.serverId)
    .order("created_at", { ascending: true })
    .limit(1)
    .single();

  if (channel) {
    return redirect(`/community/channels/${params.serverId}/${channel.id}`);
  }

  return <div className="p-4 text-white">No channels found in this server.</div>;
}
