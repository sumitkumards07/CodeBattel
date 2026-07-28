"use client";

import React from 'react';
import { useCommunity } from './CommunityContext';
import { Hash, Volume2, ChevronDown, Plus } from 'lucide-react';

export default function ChannelSidebar() {
  const { servers, channels, activeServerId, activeChannelId, setActiveChannelId } = useCommunity();

  const activeServer = servers.find(s => s.id === activeServerId);
  const serverChannels = channels.filter(c => c.serverId === activeServerId);

  const textChannels = serverChannels.filter(c => c.type === 'text');
  const voiceChannels = serverChannels.filter(c => c.type === 'voice');

  if (!activeServer) return null;

  return (
    <div className="w-[240px] bg-[#2B2D31] flex flex-col h-full shrink-0 border-r border-white/5 shadow-xl z-10">
      {/* Server Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-[#1E1F22] hover:bg-white/5 cursor-pointer transition-colors shadow-sm">
        <h2 className="font-extrabold text-gray-200 truncate">{activeServer.name}</h2>
        <ChevronDown size={18} className="text-gray-400" />
      </div>
      
      {/* Channels List */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-3 space-y-4">
        
        {/* Text Channels */}
        {textChannels.length > 0 && (
          <div>
            <div className="flex items-center justify-between px-1 mb-1 group cursor-pointer">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors">Text Channels</h3>
              <Plus size={14} className="text-gray-400 hover:text-gray-200" />
            </div>
            <div className="space-y-0.5">
              {textChannels.map((channel) => {
                const isActive = channel.id === activeChannelId;
                return (
                  <button
                    key={channel.id}
                    onClick={() => setActiveChannelId(channel.id)}
                    className={`w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 ${
                      isActive 
                        ? 'bg-white/10 text-white' 
                        : 'text-gray-400 hover:bg-white/5 hover:text-gray-300'
                    }`}
                  >
                    <Hash size={18} className="text-gray-500" />
                    <span className={`text-[15px] truncate ${isActive ? 'font-semibold' : 'font-medium'}`}>
                      {channel.name}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Voice Channels */}
        {voiceChannels.length > 0 && (
          <div>
            <div className="flex items-center justify-between px-1 mb-1 group cursor-pointer">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-wider group-hover:text-gray-300 transition-colors">Voice Channels</h3>
              <Plus size={14} className="text-gray-400 hover:text-gray-200" />
            </div>
            <div className="space-y-0.5">
              {voiceChannels.map((channel) => (
                <button
                  key={channel.id}
                  className="w-full flex items-center gap-2 px-2 py-1.5 rounded-md transition-all duration-200 text-gray-400 hover:bg-white/5 hover:text-gray-300"
                >
                  <Volume2 size={18} className="text-gray-500" />
                  <span className="text-[15px] truncate font-medium">
                    {channel.name}
                  </span>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Current User Profile (Bottom) */}
      <div className="h-14 bg-[#232428] p-2 flex items-center justify-between">
        <div className="flex items-center gap-2 px-2 py-1 hover:bg-white/5 rounded-md cursor-pointer transition-colors overflow-hidden">
          <div className="relative">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" alt="avatar" className="w-8 h-8 rounded-full bg-gray-700" />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-[#232428]"></div>
          </div>
          <div className="flex flex-col truncate">
            <span className="text-sm font-bold text-white leading-tight">CodeNinja</span>
            <span className="text-[11px] text-gray-400 leading-tight truncate">Online</span>
          </div>
        </div>
      </div>
    </div>
  );
}
