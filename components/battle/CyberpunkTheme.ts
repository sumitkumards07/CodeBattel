import { createTheme } from "@uiw/codemirror-themes";
import { tags as t } from "@lezer/highlight";

export const cyberpunkTheme = createTheme({
    theme: "dark",
    settings: {
        background: "#050505",
        backgroundImage: "",
        foreground: "#e5e5e5",
        caret: "#00F0FF",
        selection: "#00F0FF33",
        selectionMatch: "#00F0FF33",
        lineHighlight: "#1a1a1a",
        gutterBackground: "#111111",
        gutterForeground: "#444444",
    },
    styles: [
        { tag: t.comment, color: "#5c6370" },
        { tag: t.variableName, color: "#ffffff" },
        { tag: [t.string, t.special(t.brace)], color: "#00ff41" }, // Neon Green for strings
        { tag: t.number, color: "#bd93f9" },
        { tag: t.bool, color: "#bd93f9" },
        { tag: t.null, color: "#bd93f9" },
        { tag: t.keyword, color: "#ff0080" }, // Hot Pink for keywords
        { tag: t.operator, color: "#ff0033" }, // Neon Red for operators
        { tag: t.className, color: "#00F0FF" }, // Neon Blue for classes
        { tag: t.definition(t.typeName), color: "#00F0FF" },
        { tag: t.typeName, color: "#00F0FF" },
        { tag: t.angleBracket, color: "#5c6370" },
        { tag: t.tagName, color: "#ff0080" },
        { tag: t.attributeName, color: "#00ff41" },
    ],
});
