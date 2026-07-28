"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

export type User = {
  id: string;
  name: string;
  avatar: string;
  status: 'online' | 'offline' | 'idle' | 'dnd';
};

export type Server = {
  id: string;
  name: string;
  icon: string | null;
  initials: string;
};

export type Channel = {
  id: string;
  serverId: string;
  name: string;
  type: 'text' | 'voice';
};

export type Message = {
  id: string;
  channelId: string;
  text: string;
  userId: string;
  timestamp: string;
};

type CommunityContextType = {
  servers: Server[];
  channels: Channel[];
  messages: Message[];
  users: Record<string, User>;
  currentUser: User;
  activeServerId: string | null;
  activeChannelId: string | null;
  setActiveServerId: (id: string) => void;
  setActiveChannelId: (id: string) => void;
  sendMessage: (text: string) => void;
};

const MOCK_USERS: Record<string, User> = {
  'u1': { id: 'u1', name: 'CodeNinja', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Felix', status: 'online' },
  'u2': { id: 'u2', name: 'ReactWizard', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Aneka', status: 'idle' },
  'u3': { id: 'u3', name: 'CSSMaster', avatar: 'https://api.dicebear.com/7.x/avataaars/svg?seed=Oliver', status: 'dnd' },
};

const CURRENT_USER = MOCK_USERS['u1'];

const MOCK_SERVERS: Server[] = [
  { id: 's1', name: 'CodeBattle Official', icon: null, initials: 'CB' },
  { id: 's2', name: 'React Developers', icon: null, initials: 'RD' },
  { id: 's3', name: 'UI/UX Designers', icon: null, initials: 'UI' },
];

const MOCK_CHANNELS: Channel[] = [
  { id: 'c1', serverId: 's1', name: 'general', type: 'text' },
  { id: 'c2', serverId: 's1', name: 'announcements', type: 'text' },
  { id: 'c3', serverId: 's1', name: 'help-me', type: 'text' },
  { id: 'c4', serverId: 's2', name: 'react-hooks', type: 'text' },
  { id: 'c5', serverId: 's2', name: 'nextjs', type: 'text' },
  { id: 'c6', serverId: 's3', name: 'tailwind-css', type: 'text' },
];

const MOCK_MESSAGES: Message[] = [
  { id: 'm1', channelId: 'c1', text: 'Welcome to CodeBattle Official!', userId: 'u2', timestamp: new Date(Date.now() - 3600000).toISOString() },
  { id: 'm2', channelId: 'c1', text: 'Glad to be here! How do I start the React curriculum?', userId: 'u1', timestamp: new Date(Date.now() - 3500000).toISOString() },
  { id: 'm3', channelId: 'c1', text: 'Just click the "React Labs" button on the home page.', userId: 'u3', timestamp: new Date(Date.now() - 3400000).toISOString() },
];

const CommunityContext = createContext<CommunityContextType | undefined>(undefined);

export function CommunityProvider({ children }: { children: React.ReactNode }) {
  const [servers] = useState<Server[]>(MOCK_SERVERS);
  const [channels] = useState<Channel[]>(MOCK_CHANNELS);
  const [messages, setMessages] = useState<Message[]>(MOCK_MESSAGES);
  const [activeServerId, setActiveServerId] = useState<string | null>('s1');
  const [activeChannelId, setActiveChannelId] = useState<string | null>('c1');

  // When server changes, auto-select its first text channel
  useEffect(() => {
    if (activeServerId) {
      const serverChannels = channels.filter(c => c.serverId === activeServerId && c.type === 'text');
      if (serverChannels.length > 0) {
        setActiveChannelId(serverChannels[0].id);
      } else {
        setActiveChannelId(null);
      }
    }
  }, [activeServerId, channels]);

  const sendMessage = (text: string) => {
    if (!activeChannelId || !text.trim()) return;
    
    const newMessage: Message = {
      id: `m${Date.now()}`,
      channelId: activeChannelId,
      text: text.trim(),
      userId: CURRENT_USER.id,
      timestamp: new Date().toISOString(),
    };
    
    setMessages(prev => [...prev, newMessage]);
  };

  return (
    <CommunityContext.Provider value={{
      servers,
      channels,
      messages,
      users: MOCK_USERS,
      currentUser: CURRENT_USER,
      activeServerId,
      activeChannelId,
      setActiveServerId,
      setActiveChannelId,
      sendMessage
    }}>
      {children}
    </CommunityContext.Provider>
  );
}

export function useCommunity() {
  const context = useContext(CommunityContext);
  if (context === undefined) {
    throw new Error('useCommunity must be used within a CommunityProvider');
  }
  return context;
}
