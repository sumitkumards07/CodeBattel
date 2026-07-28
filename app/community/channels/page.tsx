import { CreateServerModal } from "@/components/modals/create-server-modal";

export default function ChannelsPage() {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center">
      <img src="/next.svg" alt="Discord Clone" className="h-32 w-32 invert opacity-20 mb-4" />
      <h2 className="text-2xl font-bold text-white mb-2">Welcome to Discord Clone!</h2>
      <p className="text-[#b5bac1] mb-6">Create your first server to get started.</p>
    </div>
  );
}
