import React from 'react';
import { BookOpen, CheckCircle2 } from 'lucide-react';

export default function ChapterSidebar({ curriculum, activeItemId, onSelectItem }: any) {
  const renderItem = (item: any) => {
    const isActive = item.id === activeItemId;
    return (
      <button 
        key={item.id}
        className={`chapter-item ${isActive ? 'active' : ''}`}
        onClick={() => onSelectItem(item.id)}
      >
        <span className="chapter-icon">
          {isActive ? <BookOpen size={18} /> : <CheckCircle2 size={18} color="var(--text-muted)" />}
        </span>
        <div className="chapter-item-content">
          <span className="chapter-title">{item.title}</span>
          {(item.difficulty || item.time) && (
            <div className="chapter-meta">
              {item.difficulty && <span className={`badge difficulty-${item.difficulty}`}>{item.difficulty}</span>}
              {item.time && <span className="badge time">{item.time}</span>}
            </div>
          )}
        </div>
      </button>
    );
  };

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <h2>Curriculum</h2>
      </div>
      <div className="chapter-list">
        {curriculum.lessons.length > 0 && (
          <div className="sidebar-section">
            <h3 className="section-title">Concepts</h3>
            {curriculum.lessons.map(renderItem)}
          </div>
        )}
        
        {curriculum.challenges.length > 0 && (
          <div className="sidebar-section">
            <h3 className="section-title">Challenges</h3>
            {curriculum.challenges.map(renderItem)}
          </div>
        )}

        {curriculum.projects.length > 0 && (
          <div className="sidebar-section">
            <h3 className="section-title">Projects</h3>
            {curriculum.projects.map(renderItem)}
          </div>
        )}
      </div>
    </aside>
  );
}
