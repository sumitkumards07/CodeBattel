import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";

export default async function Home() {
  const supabase = await createClient();

  const { data: userResponse } = await supabase.auth.getUser();
  if (!userResponse?.user) {
    return redirect("/community/login");
  }

  // Find the first server the user is a member of
  const { data: member } = await supabase
    .from("members")
    .select("server_id")
    .eq("user_id", userResponse.user.id)
    .limit(1)
    .single();

  if (member) {
    return redirect(`/community/channels/${member.server_id}`);
  }

  return redirect("/community/channels");
}
