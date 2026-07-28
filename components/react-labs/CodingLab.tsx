import React from 'react';
import { Sandpack } from "@codesandbox/sandpack-react";
import ReactMarkdown from 'react-markdown';

export default function CodingLab({ item }: any) {
  if (!item) return null;

  return (
    <section className="editor-area">
      <div className="instructions-panel">
        <div className="instructions-header">
          <h1>{item.title}</h1>
          {item.tags && item.tags.length > 0 && (
            <div className="tags-container">
              {item.tags.map((tag: string) => (
                <span key={tag} className="tag-badge">{tag}</span>
              ))}
            </div>
          )}
        </div>
        <div className="markdown-content">
          {item.instructions ? (
            <ReactMarkdown>{item.instructions}</ReactMarkdown>
          ) : (
            <p>{item.description}</p>
          )}
        </div>
      </div>
      <div className="sandpack-container">
        <Sandpack
          template="react"
          theme="dark"
          files={item.files}
          options={{
            showNavigator: false,
            showLineNumbers: true,
            showTabs: true,
            editorHeight: "100%",
            editorWidthPercentage: 55,
          }}
          customSetup={{
            dependencies: {
              "react": "^18.0.0",
              "react-dom": "^18.0.0"
            }
          }}
        />
      </div>
    </section>
  );
}
