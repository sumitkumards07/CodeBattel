"use client";

import React from "react";

export default function Logo({ className }: { className?: string }) {
    return (
        <div className={`relative ${className}`}>
            <svg
                width="60"
                height="60"
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full"
            >
                {/* Red Dot (Top left, outside) */}
                <circle cx="10" cy="10" r="4" fill="#FF0000" />

                {/* Shield Outline */}
                <path
                    d="M20 25 L80 25 L80 55 L50 85 L20 55 Z"
                    stroke="white"
                    strokeWidth="3.5"
                    fill="none"
                    strokeLinejoin="round"
                />

                {/* Cross Hilt (Top) */}
                <path
                    d="M50 15 V35 M38 32 H62"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="square"
                />

                {/* Sword Blade */}
                <path
                    d="M50 35 L50 75 L50 78"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                />

                {/* Tech Bits (Left) */}
                <rect x="30" y="42" width="3" height="3" fill="white" />
                <rect x="34" y="42" width="3" height="3" fill="white" />
                <rect x="30" y="46" width="3" height="3" fill="white" />
                <rect x="34" y="50" width="3" height="3" fill="white" />
                <path d="M38 48 H45" stroke="white" strokeWidth="1" />
                <circle cx="45" cy="48" r="1.5" fill="white" />

                {/* Tech Bits (Right) */}
                <rect x="63" y="42" width="3" height="3" fill="white" />
                <rect x="67" y="42" width="3" height="3" fill="white" />
                <rect x="67" y="46" width="3" height="3" fill="white" />
                <rect x="63" y="50" width="3" height="3" fill="white" />
                <path d="M62 48 H55" stroke="white" strokeWidth="1" />
                <circle cx="55" cy="48" r="1.5" fill="white" />

                {/* Bottom Tip (Detail) */}
                <circle cx="50" cy="85" r="1" fill="white" opacity="0.5" />
            </svg>
        </div>
    );
}
