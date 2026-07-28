"use client";

import React from 'react';
import Editor from '@monaco-editor/react';

export default function EditorPanel({ code, setCode }) {
  const handleEditorWillMount = (monaco) => {
    monaco.editor.defineTheme('codebattel', {
      base: 'vs-dark',
      inherit: true,
      rules: [
        { token: 'comment', foreground: '555555', fontStyle: 'italic' },
        { token: 'keyword', foreground: 'FF0033' }, // neon-red
        { token: 'string', foreground: '00F0FF' }, // neon-blue
        { token: 'number', foreground: 'FF6B6B' }, // red-soft
        { token: 'identifier', foreground: 'f1f5f9' }, // primary text
        { token: 'type.identifier', foreground: '00F0FF' }, // neon-blue
      ],
      colors: {
        'editor.background': '#050505', // bg-void
        'editor.foreground': '#f1f5f9', // text-primary
        'editorLineNumber.foreground': '#555555', // text-muted
        'editorCursor.foreground': '#FF0033', // neon-red
        'editor.selectionBackground': '#333333',
        'editor.lineHighlightBackground': '#080808', // obsidian
        'editor.inactiveSelectionBackground': '#222222',
        'editorIndentGuide.background': '#111111',
        'editorIndentGuide.activeBackground': '#333333',
      }
    });
  };

  return (
    <div className="h-full w-full bg-bg-2 relative flex flex-col">
      <div className="flex-1 overflow-hidden relative">
        <Editor
          height="100%"
          defaultLanguage="javascript"
          value={code}
          onChange={(val) => setCode(val || "")}
          beforeMount={handleEditorWillMount}
          theme="codebattel"
          options={{
            fontSize: 13,
            fontFamily: "'JetBrains Mono', 'Fira Code', Consolas, monospace",
            lineHeight: 1.65,
            minimap: { enabled: false },
            scrollBeyondLastLine: false,
            padding: { top: 12 },
            wordWrap: "off",
            renderLineHighlight: "all",
            overviewRulerLanes: 0,
            glyphMargin: false,
            lineNumbersMinChars: 3,
            lineDecorationsWidth: 10,
          }}
        />
      </div>
    </div>
  );
}
