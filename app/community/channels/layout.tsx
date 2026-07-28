import { ServerSidebar } from "@/components/navigation/server-sidebar";
import { CreateServerModal } from "@/components/modals/create-server-modal";
import { Suspense } from "react";

export default function ChannelsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative flex h-screen w-full bg-background-dark overflow-hidden pt-28 pb-8 px-8 z-0">
      {/* CodeBattle Aesthetic Background Effects */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0 pointer-events-none"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-primary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-primary/5 blur-[150px] rounded-full z-0 pointer-events-none"></div>

      {/* Community Container */}
      <div className="relative z-10 flex w-full h-full rounded-2xl border border-white/10 overflow-hidden glass-panel shadow-2xl">
        <ServerSidebar />
        <main className="flex-1 h-full bg-[#0a0a0a]/80 backdrop-blur-md">{children}</main>
        <Suspense fallback={null}>
          <CreateServerModal />
        </Suspense>
      </div>
    </div>
  );
}
