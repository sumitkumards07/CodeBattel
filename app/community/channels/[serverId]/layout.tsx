import { ChannelSidebar } from "@/components/navigation/channel-sidebar";
import { MemberSidebar } from "@/components/navigation/member-sidebar";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function ServerIdLayout(props: {
  children: React.ReactNode;
  params: Promise<{ serverId: string }>;
}) {
  const params = await props.params;
  const supabase = await createClient();

  const { data: userResponse } = await supabase.auth.getUser();
  if (!userResponse?.user) return redirect("/community/login");

  // Verify the user is a member of this server
  const { data: member } = await supabase
    .from("members")
    .select("*")
    .eq("server_id", params.serverId)
    .eq("user_id", userResponse.user.id)
    .single();

  if (!member) {
    return redirect("/community");
  }

  return (
    <div className="flex h-full w-full">
      <ChannelSidebar serverId={params.serverId} />
      <main className="flex-1 h-full">{props.children}</main>
      <MemberSidebar serverId={params.serverId} />
    </div>
  );
}
