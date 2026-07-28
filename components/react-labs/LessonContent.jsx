"use client";

import React from 'react';

export default function LessonContent({ chapter, content, showHint }) {
  if (!content) return <div className="p-5 text-[#666]">Lesson content not available.</div>;

  const renderText = (text) => {
    if (!text) return null;
    const parts = text.split(/```/g);
    return parts.map((part, index) => {
      if (index % 2 === 1) {
        const codeLines = part.split('\n');
        if (codeLines[0] && codeLines[0].trim().length < 15 && !codeLines[0].includes(' ')) {
          codeLines.shift();
        }
        const cleanCode = codeLines.join('\n').trim();
        return (
          <div key={index} className="my-5 bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.5)]">
            <div className="px-4 py-2.5 bg-white/[0.03] border-b border-white/5 flex items-center gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-rose-500/80 shadow-[0_0_5px_rgba(244,63,94,0.4)]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80 shadow-[0_0_5px_rgba(245,158,11,0.4)]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 shadow-[0_0_5px_rgba(16,185,129,0.4)]"></div>
            </div>
            <pre className="p-4 overflow-x-auto text-[13.5px] font-mono text-gray-300 leading-relaxed whitespace-pre custom-scrollbar">
              <code>{cleanCode}</code>
            </pre>
          </div>
        );
      }
      
      const inlineParts = part.split(/`([^`]+)`/g);
      return (
        <span key={index}>
          {inlineParts.map((inlinePart, i) => {
            if (i % 2 === 1) {
              return <code key={i} className="px-1.5 py-0.5 rounded text-xs mx-0.5 font-mono bg-white/10 text-orange-200 border border-white/10 shadow-inner">{inlinePart}</code>;
            }
            return <span key={i}>{inlinePart}</span>;
          })}
        </span>
      );
    });
  };

  return (
    <div className="bg-black/20 h-full overflow-y-auto custom-scrollbar p-6 sm:p-8 text-gray-300">
      <div className="flex flex-wrap gap-2 mb-8">
        {chapter?.tags?.map((tag) => (
          <span 
            key={tag} 
            className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-gray-400 text-xs font-bold tracking-wide shadow-sm"
          >
            {tag}
          </span>
        ))}
      </div>
      
      <h1 className="text-3xl font-extrabold bg-gradient-to-r from-orange-400 to-amber-500 text-transparent bg-clip-text mb-6 drop-shadow-[0_0_10px_rgba(255,165,0,0.2)]">{chapter?.title}</h1>
      
      <div className="text-[14.5px] leading-relaxed mb-8 whitespace-pre-wrap text-gray-300 font-medium">
        {renderText(content.description)}
      </div>
      
      {content.rules && content.rules.length > 0 && (
        <div className="mb-8">
          <h2 className="text-sm font-bold text-white uppercase tracking-widest mb-4">Key Rules</h2>
          <ul className="list-none space-y-3">
            {content.rules.map((rule, idx) => {
              const parts = rule.split(/`([^`]+)`/g);
              return (
                <li key={idx} className="flex items-start gap-3 text-[14px] leading-relaxed">
                  <div className="mt-1 w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.8)] shrink-0"></div>
                  <div>
                    {parts.map((part, i) => {
                      if (i % 2 === 1) {
                        let className = "px-1.5 py-0.5 rounded text-xs mx-0.5 font-mono shadow-inner";
                        if (part.includes('<') || part.includes('/>')) {
                          className += " bg-orange-500/10 text-orange-400 border border-orange-500/20";
                        } else if (part.match(/^[A-Z][a-zA-Z]*$/)) {
                          className += " bg-emerald-500/10 text-emerald-400 border border-emerald-500/20";
                        } else {
                          className += " bg-blue-500/10 text-blue-400 border border-blue-500/20";
                        }
                        return <code key={i} className={className}>{part}</code>;
                      }
                      return <span key={i}>{part}</span>;
                    })}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      )}
      
      {content.taskDescription && (
        <div className="mb-8 bg-gradient-to-b from-orange-500/10 to-transparent border border-orange-500/20 rounded-xl p-5 shadow-[0_0_20px_rgba(255,165,0,0.05)] relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-500 via-amber-500 to-yellow-500 opacity-50"></div>
          <h2 className="text-[13px] font-black text-orange-400 uppercase tracking-widest mb-3 flex items-center gap-2">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            Your Task
          </h2>
          <div className="text-[14.5px] leading-relaxed text-gray-200 whitespace-pre-wrap font-medium">
            {renderText(content.taskDescription)}
          </div>
          {content.taskHint && showHint && (
            <div className="mt-4 bg-blue-500/5 border border-blue-500/20 rounded-lg px-4 py-3 text-[14px] text-gray-300 shadow-[inset_0_0_15px_rgba(59,130,246,0.05)] animate-in fade-in slide-in-from-top-2 duration-300">
              <span className="text-blue-400 font-bold mr-2 uppercase text-xs tracking-wider">Hint:</span>
              {content.taskHint}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
