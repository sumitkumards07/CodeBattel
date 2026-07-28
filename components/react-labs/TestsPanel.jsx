"use client";

import React, { useState } from 'react';

export default function TestsPanel({ tests, iframeRef, verifyFunction }) {
  const [results, setResults] = useState({});

  const checkTests = () => {
    if (!iframeRef.current || !verifyFunction) return;
    try {
      const iframeDoc = iframeRef.current.contentDocument || iframeRef.current.contentWindow?.document;
      if (iframeDoc) {
        const newResults = verifyFunction(iframeDoc);
        setResults(newResults);
      }
    } catch (e) {
      console.error("Test execution failed:", e);
    }
  };

  const totalTests = tests ? tests.length : 0;
  const passingTests = tests ? tests.filter(t => results[t.id]).length : 0;
  const hasRun = Object.keys(results).length > 0;

  return (
    <div className="h-full bg-bg-1 flex flex-col">
      <div className="h-10 border-b border-border flex items-center justify-between px-4 shrink-0 bg-bg-2">
        <span className="text-[11px] uppercase tracking-wider text-[#555] font-semibold">TESTS</span>
        <button 
          onClick={checkTests}
          className="px-3 py-1 text-xs font-bold text-black bg-orange rounded-md hover:bg-orange/90 transition-colors"
        >
          Check
        </button>
      </div>
      
      <div className="flex-1 overflow-y-auto custom-scrollbar p-4">
        {hasRun && (
          <div className="text-xs text-[#555] mb-4">
            {passingTests}/{totalTests} tests passing
          </div>
        )}
        
        <div className="flex flex-col gap-3">
          {tests?.map((test) => {
            const status = hasRun ? (results[test.id] ? 'passing' : 'failing') : 'pending';
            
            let dotClass = "w-2.5 h-2.5 rounded-full shrink-0 mt-[3px] border border-[#333] bg-[#222]";
            let textClass = "text-[13px] text-text-secondary leading-tight";
            
            if (status === 'passing') {
              dotClass = "w-2.5 h-2.5 rounded-full shrink-0 mt-[3px] bg-green";
              textClass = "text-[13px] text-[#6EE7A0] leading-tight";
            } else if (status === 'failing') {
              dotClass = "w-2.5 h-2.5 rounded-full shrink-0 mt-[3px] bg-red";
              textClass = "text-[13px] text-[#FC8181] leading-tight";
            }
            
            return (
              <div key={test.id} className="flex items-start gap-3">
                <div className={dotClass}></div>
                <div className={textClass}>
                  {test.label}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
