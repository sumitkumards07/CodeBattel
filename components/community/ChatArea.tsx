"use client";

import React, { useState, useRef, useEffect } from 'react';
import { useCommunity } from './CommunityContext';
import { Hash, Search, Bell, Users, HelpCircle, PlusCircle, Smile, Gift, FileUp } from 'lucide-react';

export default function ChatArea() {
  const { channels, messages, users, activeChannelId, sendMessage } = useCommunity();
  const [inputText, setInputText] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const activeChannel = channels.find(c => c.id === activeChannelId);
  const channelMessages = messages.filter(m => m.channelId === activeChannelId);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [channelMessages]);

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputText);
    setInputText('');
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const isToday = date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
    
    if (isToday) {
      return `Today at ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
    }
    return `${date.toLocaleDateString()} ${date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`;
  };

  if (!activeChannel) {
    return (
      <div className="flex-1 bg-[#313338] flex flex-col items-center justify-center text-gray-500">
        <Hash size={48} className="mb-4 opacity-20" />
        <h2 className="text-xl font-bold">No channel selected</h2>
      </div>
    );
  }

  return (
    <div className="flex-1 bg-[#313338] flex flex-col h-full overflow-hidden relative">
      {/* Chat Header */}
      <div className="h-14 px-4 flex items-center justify-between border-b border-white/5 shadow-sm shrink-0 z-10 bg-[#313338]">
        <div className="flex items-center gap-3">
          <Hash size={24} className="text-gray-400" />
          <h2 className="font-bold text-white text-base">{activeChannel.name}</h2>
          <div className="w-px h-6 bg-white/10 mx-2"></div>
          <span className="text-sm text-gray-400 font-medium hidden sm:block">Welcome to #{activeChannel.name}!</span>
        </div>
        
        <div className="flex items-center gap-4 text-gray-300">
          <Bell size={20} className="hover:text-white cursor-pointer transition-colors" />
          <Users size={20} className="hover:text-white cursor-pointer transition-colors hidden sm:block" />
          
          <div className="relative hidden md:block">
            <input 
              type="text" 
              placeholder="Search" 
              className="bg-[#1E1F22] text-sm text-gray-200 px-3 py-1.5 rounded-md w-36 focus:w-48 outline-none transition-all placeholder-gray-500"
            />
            <Search size={16} className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
          </div>
          
          <HelpCircle size={20} className="hover:text-white cursor-pointer transition-colors hidden sm:block" />
        </div>
      </div>

      {/* Message Feed */}
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4 flex flex-col gap-1">
        <div className="mb-10 mt-10">
          <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4">
            <Hash size={40} className="text-white" />
          </div>
          <h1 className="text-3xl font-extrabold text-white mb-2">Welcome to #{activeChannel.name}!</h1>
          <p className="text-gray-400 text-base">This is the start of the <span className="font-bold">#{activeChannel.name}</span> channel.</p>
        </div>

        <div className="flex flex-col gap-4">
          {channelMessages.map((msg, idx) => {
            const user = users[msg.userId];
            const prevMsg = channelMessages[idx - 1];
            const isConsecutive = prevMsg && prevMsg.userId === msg.userId && (new Date(msg.timestamp).getTime() - new Date(prevMsg.timestamp).getTime() < 300000); // 5 minutes

            return (
              <div key={msg.id} className={`group flex gap-4 px-2 py-1 -mx-2 hover:bg-black/20 rounded-md ${isConsecutive ? 'mt-0' : 'mt-2'}`}>
                {!isConsecutive ? (
                  <img src={user?.avatar} alt={user?.name} className="w-10 h-10 rounded-full mt-0.5 bg-gray-700 cursor-pointer hover:shadow-md transition-all" />
                ) : (
                  <div className="w-10 flex items-center justify-center opacity-0 group-hover:opacity-100">
                    <span className="text-[10px] text-gray-500">{new Date(msg.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</span>
                  </div>
                )}
                
                <div className="flex flex-col flex-1">
                  {!isConsecutive && (
                    <div className="flex items-baseline gap-2 mb-1">
                      <span className="font-medium text-red-400 hover:underline cursor-pointer">{user?.name}</span>
                      <span className="text-xs text-gray-500 font-medium">{formatDate(msg.timestamp)}</span>
                    </div>
                  )}
                  <span className="text-[15px] text-gray-200 leading-relaxed whitespace-pre-wrap">{msg.text}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div ref={messagesEndRef} />
      </div>

      {/* Input Area */}
      <div className="px-4 pb-6 pt-2 shrink-0">
        <form onSubmit={handleSend} className="bg-[#383A40] rounded-lg px-4 py-2.5 flex items-start gap-4">
          <button type="button" className="text-gray-400 hover:text-gray-200 mt-1 transition-colors">
            <PlusCircle size={22} />
          </button>
          
          <textarea 
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) {
                e.preventDefault();
                handleSend(e);
              }
            }}
            placeholder={`Message #${activeChannel.name}`}
            className="flex-1 bg-transparent text-gray-200 placeholder-gray-500 outline-none resize-none max-h-[50vh] min-h-[24px]"
            rows={1}
          />
          
          <div className="flex items-center gap-3 text-gray-400 mt-1">
            <button type="button" className="hover:text-gray-200 transition-colors"><Gift size={22} /></button>
            <button type="button" className="hover:text-gray-200 transition-colors"><FileUp size={22} /></button>
            <button type="button" className="hover:text-gray-200 transition-colors"><Smile size={22} /></button>
          </div>
        </form>
        <div className="text-xs text-gray-500 font-medium mt-1.5 px-1">
          <span className="font-bold text-gray-400">ProTip:</span> Press Enter to send, Shift+Enter to drop a line.
        </div>
      </div>
    </div>
  );
}
