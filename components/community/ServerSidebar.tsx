"use client";

import React from 'react';
import { useCommunity } from './CommunityContext';
import { Plus, Compass } from 'lucide-react';
import Link from 'next/link';
import Logo from '../landing/Logo';

export default function ServerSidebar() {
  const { servers, activeServerId, setActiveServerId } = useCommunity();

  return (
    <div className="w-[72px] bg-[#1E1F22] flex flex-col items-center py-3 shrink-0 h-full overflow-y-auto custom-scrollbar border-r border-white/5 z-20">
      <Link href="/" className="relative group flex items-center justify-center w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-black/40 hover:bg-orange/20 transition-all duration-300 mb-2 cursor-pointer">
        <Logo className="w-7 h-7 text-white group-hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)] transition-all" />
        <div className="absolute left-0 w-1 h-0 bg-white rounded-r-full -ml-[12px] group-hover:h-5 transition-all duration-300"></div>
      </Link>
      
      <div className="w-8 h-[2px] bg-white/10 rounded-full mb-2"></div>
      
      <div className="flex flex-col gap-2 w-full items-center">
        {servers.map((server) => {
          const isActive = server.id === activeServerId;
          return (
            <div key={server.id} className="relative group w-full flex justify-center">
              <div className={`absolute left-0 w-1 bg-white rounded-r-full transition-all duration-300 ${
                isActive ? 'h-10' : 'h-0 group-hover:h-5'
              }`}></div>
              
              <button
                onClick={() => setActiveServerId(server.id)}
                className={`w-12 h-12 flex items-center justify-center font-bold text-lg transition-all duration-300 overflow-hidden ${
                  isActive 
                    ? 'rounded-[16px] bg-gradient-to-br from-orange-500 to-rose-500 text-white shadow-[0_0_15px_rgba(255,165,0,0.4)]' 
                    : 'rounded-[24px] hover:rounded-[16px] bg-[#313338] text-gray-300 hover:bg-orange/80 hover:text-white'
                }`}
              >
                {server.icon ? (
                  <img src={server.icon} alt={server.name} className="w-full h-full object-cover" />
                ) : (
                  server.initials
                )}
              </button>
              
              {/* Tooltip */}
              <div className="absolute left-[76px] top-1/2 -translate-y-1/2 px-3 py-1.5 bg-black text-gray-200 text-sm font-semibold rounded-md opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap shadow-xl z-50">
                {server.name}
              </div>
            </div>
          );
        })}
      </div>

      <div className="w-8 h-[2px] bg-white/10 rounded-full my-2"></div>
      
      <button className="relative group flex items-center justify-center w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-[#313338] hover:bg-emerald-500 text-emerald-500 hover:text-white transition-all duration-300 mb-2">
        <Plus size={24} />
      </button>
      
      <button className="relative group flex items-center justify-center w-12 h-12 rounded-[24px] hover:rounded-[16px] bg-[#313338] hover:bg-blue-500 text-blue-500 hover:text-white transition-all duration-300">
        <Compass size={24} />
      </button>
    </div>
  );
}
