"use client";

import React from "react";

interface LivePreviewProps {
    htmlCode: string;
}

export default function LivePreview({ htmlCode }: LivePreviewProps) {
    // srcDoc allows us to render HTML string directly in the iframe
    return (
        <div className="w-full h-full bg-white rounded-md overflow-hidden relative border border-white/10">
            <div className="absolute top-0 left-0 right-0 h-8 bg-zinc-100 border-b border-zinc-200 flex items-center px-4">
                <div className="flex gap-1.5 mr-4">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-400"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 bg-white h-5 rounded text-[10px] text-zinc-400 flex items-center px-2 font-mono">
                    localhost:3000/preview
                </div>
            </div>
            <iframe
                className="w-full h-full pt-8"
                srcDoc={htmlCode}
                title="Live Preview"
                sandbox="allow-scripts"
            />
        </div>
    );
}
