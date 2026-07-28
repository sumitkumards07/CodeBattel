"use client";

import React, { useState, useRef, useEffect } from 'react';
import TopNav from './TopNav';
import Sidebar from './Sidebar';
import LessonContent from './LessonContent';
import EditorPanel from './EditorPanel';
import PreviewPanel from './PreviewPanel';
import TestsPanel from './TestsPanel';
import { chapters, lessonContentMap } from '../../data/react-labs/chapters';

function Splitter({ direction, onDrag }) {
  const handlePointerDown = (e) => {
    e.preventDefault();
    
    // Add overlay to block iframes from stealing pointer events during drag
    const overlay = document.createElement('div');
    overlay.id = 'drag-overlay';
    overlay.style.position = 'fixed';
    overlay.style.inset = '0';
    overlay.style.zIndex = '9999';
    overlay.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';
    document.body.appendChild(overlay);
    document.body.style.cursor = direction === 'horizontal' ? 'col-resize' : 'row-resize';

    const handlePointerMove = (e) => {
      onDrag(e);
    };

    const handlePointerUp = () => {
      document.body.style.cursor = '';
      const existingOverlay = document.getElementById('drag-overlay');
      if (existingOverlay) existingOverlay.remove();
      window.removeEventListener('pointermove', handlePointerMove);
      window.removeEventListener('pointerup', handlePointerUp);
    };

    window.addEventListener('pointermove', handlePointerMove);
    window.addEventListener('pointerup', handlePointerUp);
  };

  return (
    <div
      onPointerDown={handlePointerDown}
      className={`relative z-20 flex items-center justify-center group transition-all duration-300 ${
        direction === 'horizontal' ? 'w-[6px] h-full cursor-col-resize hover:bg-red-500/20' : 'w-full h-[6px] cursor-row-resize hover:bg-red-500/20'
      }`}
    >
      <div
        className={`bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all duration-300 ${
          direction === 'horizontal' ? 'w-[2px] h-full group-hover:w-[4px] group-hover:bg-red-400' : 'w-full h-[2px] group-hover:h-[4px] group-hover:bg-red-400'
        }`}
      />
    </div>
  );
}

export default function ReactLabsApp() {
  const [activeChapterId, setActiveChapterId] = useState(1);
  const [code, setCode] = useState('');
  const [showHint, setShowHint] = useState(false);
  const iframeRef = useRef(null);
  
  const mainContainerRef = useRef(null);
  const leftContainerRef = useRef(null);
  const rightContainerRef = useRef(null);

  const [mainSplit, setMainSplit] = useState(57);
  const [leftSplit, setLeftSplit] = useState(58);
  const [rightSplit, setRightSplit] = useState(58);

  const activeChapter = chapters.find(c => c.id === activeChapterId) || chapters[0];
  const activeContent = lessonContentMap[activeChapterId] || {
    description: "Coming soon...",
    starterCode: "// Code not available",
    tests: [],
    verify: () => ({})
  };

  useEffect(() => {
    setCode(activeContent.starterCode || '');
    setShowHint(false);
  }, [activeChapterId, activeContent.starterCode]);

  const handleReset = () => setCode(activeContent.starterCode || '');
  
  const handleToggleHint = () => setShowHint(!showHint);
  
  const handleShowSolution = () => {
    if (activeContent.solutionCode) {
      setCode(activeContent.solutionCode);
    } else {
      alert("No solution available for this chapter yet!");
    }
  };
  
  const handleNext = () => {
    const nextId = activeChapterId < chapters.length ? activeChapterId + 1 : 1;
    setActiveChapterId(nextId);
  };

  const onMainDrag = (e) => {
    if (!mainContainerRef.current) return;
    const rect = mainContainerRef.current.getBoundingClientRect();
    let newSplit = ((e.clientX - rect.left) / rect.width) * 100;
    setMainSplit(Math.min(Math.max(newSplit, 25), 80));
  };

  const onLeftDrag = (e) => {
    if (!leftContainerRef.current) return;
    const rect = leftContainerRef.current.getBoundingClientRect();
    let newSplit = ((e.clientY - rect.top) / rect.height) * 100;
    setLeftSplit(Math.min(Math.max(newSplit, 20), 80));
  };

  const onRightDrag = (e) => {
    if (!rightContainerRef.current) return;
    const rect = rightContainerRef.current.getBoundingClientRect();
    let newSplit = ((e.clientY - rect.top) / rect.height) * 100;
    setRightSplit(Math.min(Math.max(newSplit, 20), 80));
  };

  return (
    <div className="flex flex-col h-screen w-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1a0b2e] via-[#090514] to-black text-gray-200 overflow-hidden font-sans">
      <TopNav 
        activeChapter={activeChapter} 
        onReset={handleReset} 
        onNext={handleNext} 
        onShowSolution={handleShowSolution}
        onToggleHint={handleToggleHint}
        showHint={showHint}
      />
      
      <div className="flex flex-1 overflow-hidden backdrop-blur-3xl">
        <Sidebar 
          chapters={chapters} 
          activeChapterId={activeChapterId} 
          onSelectChapter={setActiveChapterId} 
        />
        
        <div ref={mainContainerRef} className="flex-1 flex flex-row bg-white/[0.02] shadow-2xl h-full overflow-hidden border-t border-white/[0.05]">
          {/* LEFT PANEL: Content + Editor */}
          <div style={{ width: `${mainSplit}%` }} className="flex flex-col h-full overflow-hidden">
            <div ref={leftContainerRef} className="flex-1 flex flex-col h-full w-full overflow-hidden">
              <div style={{ height: `${leftSplit}%` }} className="w-full overflow-hidden">
                <LessonContent chapter={activeChapter} content={activeContent} showHint={showHint} />
              </div>
              <Splitter direction="vertical" onDrag={onLeftDrag} />
              <div style={{ height: `${100 - leftSplit}%` }} className="w-full overflow-hidden">
                <EditorPanel code={code} setCode={setCode} />
              </div>
            </div>
          </div>
          
          <Splitter direction="horizontal" onDrag={onMainDrag} />
          
          {/* RIGHT PANEL: Preview + Tests */}
          <div style={{ width: `${100 - mainSplit}%` }} className="flex flex-col h-full overflow-hidden">
            <div ref={rightContainerRef} className="flex-1 flex flex-col h-full w-full overflow-hidden">
              <div style={{ height: `${rightSplit}%` }} className="w-full overflow-hidden">
                <PreviewPanel code={code} ref={iframeRef} />
              </div>
              <Splitter direction="vertical" onDrag={onRightDrag} />
              <div style={{ height: `${100 - rightSplit}%` }} className="w-full overflow-hidden">
                <TestsPanel 
                  tests={activeContent.tests} 
                  iframeRef={iframeRef}
                  verifyFunction={activeContent.verify}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
