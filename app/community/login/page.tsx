import { login, signup, signInWithGoogle } from "./actions";

export default async function LoginPage(props: { searchParams: Promise<{ message: string }> }) {
  const searchParams = await props.searchParams;
  
  return (
    <div className="flex h-screen w-full items-center justify-center relative bg-background-dark overflow-hidden perspective-1000">
      {/* Background Grid and Glows */}
      <div className="absolute inset-0 grid-bg opacity-30 z-0"></div>
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-[#FF0000]/10 blur-[150px] rounded-full z-0"></div>
      <div className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-[#FF0000]/10 blur-[150px] rounded-full z-0"></div>
      
      {/* Glass Panel Container */}
      <div className="relative z-10 w-full max-w-md glass-panel p-8 rounded-2xl group transition-all duration-300 hover:border-[#FF0000]/50 hover:shadow-red-glow">
        
        <div className="text-center mb-8">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="size-8 rounded-full bg-black border border-white/20 flex items-center justify-center shadow-[inset_0_1px_1px_rgba(255,255,255,0.2)]">
              <span className="text-[#FF0000] font-bold">&gt;_</span>
            </div>
            <h1 className="dot-matrix-text text-xl tracking-wider text-white">CODEBATTLE</h1>
          </div>
          <p className="text-sm text-zinc-400 font-mono tracking-widest uppercase">System Authentication</p>
        </div>

        <form className="flex flex-col gap-5">
          <div>
            <label className="text-[10px] font-mono uppercase text-zinc-500 mb-2 block tracking-wider" htmlFor="email">
              Identity Protocol (Email) <span className="text-[#FF0000]">*</span>
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="w-full rounded-none bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-colors font-mono text-sm"
              placeholder="recruit@codebattle.dev"
            />
          </div>
          <div>
            <label className="text-[10px] font-mono uppercase text-zinc-500 mb-2 block tracking-wider" htmlFor="password">
              Access Key (Password) <span className="text-[#FF0000]">*</span>
            </label>
            <input
              id="password"
              name="password"
              type="password"
              required
              className="w-full rounded-none bg-black/50 border border-white/10 p-3 text-white focus:outline-none focus:border-[#FF0000] focus:ring-1 focus:ring-[#FF0000] transition-colors font-mono text-sm"
              placeholder="••••••••"
            />
          </div>

          {searchParams.message && (
            <div className="bg-[#FF0000]/10 border border-[#FF0000]/50 p-3 rounded crt-flicker">
              <p className="text-[#FF0000] text-xs font-mono text-center uppercase tracking-wider">
                [ERROR]: {searchParams.message}
              </p>
            </div>
          )}

          <div className="flex flex-col gap-3 mt-4">
            <button
              formAction={login}
              className="w-full py-3 bg-[#FF0000]/10 border border-[#FF0000]/50 text-white font-mono uppercase text-xs tracking-widest transition-all hover:bg-[#FF0000] hover:shadow-red-glow crt-flicker"
            >
              Initialize Login
            </button>
            <button
              formAction={signup}
              className="w-full py-3 bg-transparent border border-white/20 text-zinc-300 font-mono uppercase text-xs tracking-widest transition-all hover:border-white hover:text-white"
            >
              Register New Recruit
            </button>
          </div>
        </form>

        <div className="relative my-8">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t border-white/10" />
          </div>
          <div className="relative flex justify-center text-xs uppercase font-mono tracking-widest">
            <span className="bg-[#0a0a0a] px-2 text-zinc-500">External Protocol</span>
          </div>
        </div>

        <form>
          <button
            formAction={signInWithGoogle}
            className="w-full py-3 bg-white text-black font-mono uppercase text-xs font-bold tracking-widest transition-all hover:bg-zinc-200 flex items-center justify-center gap-3 shadow-[0_0_15px_rgba(255,255,255,0.2)]"
          >
            <svg viewBox="0 0 24 24" className="w-4 h-4">
              <path
                fill="currentColor"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="currentColor"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="currentColor"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="currentColor"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Connect with Google
          </button>
        </form>
      </div>
    </div>
  );
}
