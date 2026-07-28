"use client";

import React, { useEffect, useState, forwardRef } from 'react';
import * as Babel from '@babel/standalone';

const PreviewPanel = forwardRef(({ code }, ref) => {
  const [srcDoc, setSrcDoc] = useState('');
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      setError(null);
      
      const compiledCode = Babel.transform(code, {
        presets: ['react'],
      }).code;
      
      const iframeHtml = `
        <!DOCTYPE html>
        <html>
        <head>
          <script crossorigin src="https://unpkg.com/react@18/umd/react.development.js"></script>
          <script crossorigin src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
          <style>
            :root {
              color-scheme: dark !important;
            }
            body { 
              font-family: system-ui, -apple-system, sans-serif !important; 
              padding: 16px !important; 
              margin: 0 !important; 
              background-color: #050505 !important;
              color: #f1f5f9 !important;
            }
          </style>
        </head>
        <body>
          <div id="root"></div>
          <script>
            try {
              ${compiledCode}
              if (typeof App !== 'undefined') {
                ReactDOM.createRoot(document.getElementById('root')).render(React.createElement(App));
              }
            } catch (err) {
              document.getElementById('root').innerHTML = '<div style="color: red; padding: 10px; border: 1px solid red; border-radius: 4px;">' + err.toString() + '</div>';
            }
          </script>
        </body>
        </html>
      `;
      setSrcDoc(iframeHtml);
    } catch (err) {
      setError(err.message);
    }
  }, [code]);

  return (
    <div className="h-full flex flex-col bg-bg-2">
      <div className="h-8 border-b border-border flex items-center px-4 shrink-0 bg-bg-2">
        <div className="flex items-center gap-2">
          <span className="text-[11px] uppercase tracking-wider text-[#555] font-semibold">PREVIEW</span>
          <div className="w-2 h-2 rounded-full bg-green ml-2"></div>
          <span className="text-xs text-[#888]">Running</span>
        </div>
      </div>
      
      <div className="flex-1 relative bg-bg-0">
        {error ? (
          <div className="absolute inset-0 p-4 overflow-auto text-red font-mono text-sm bg-bg-1 border-t border-red/30">
            {error}
          </div>
        ) : (
          <iframe
            ref={ref}
            srcDoc={srcDoc}
            title="preview"
            sandbox="allow-scripts allow-same-origin"
            className="w-full h-full border-none outline-none bg-bg-0"
          />
        )}
      </div>
    </div>
  );
});

PreviewPanel.displayName = 'PreviewPanel';
export default PreviewPanel;
