import {
    BraveBrowser,
    Bun,
    Discord,
    Docker,
    Firefox,
    Ghostty,
    GitHubCopilotDark,
    GitHubDark,
    Linux,
    MarkdownDark,
    Nextjs,
    Nodejs,
    Notion,
    Obsidian,
    PostgreSQL,
    Raindropio,
    ReactDark,
    RustDark,
    TailwindCSS,
    TypeScript,
    VercelDark,
    VisualStudioCode,
    Warp,
    ZedDark,
    ZenBrowserDark,
} from "@ridemountainpig/svgl-react";
import type { ComponentType, SVGProps } from "react";

import { cn } from "#/lib/utils";

const wordSplitExpression = /\s+/;

const brandGlyphs: Record<string, ComponentType<SVGProps<SVGSVGElement>>> = {
    Brave: BraveBrowser,
    "Brave Browser": BraveBrowser,
    Bun,
    Discord,
    Docker,
    Firefox,
    Ghostty,
    GitHub: GitHubDark,
    "GitHub Actions": GitHubDark,
    "GitHub Copilot": GitHubCopilotDark,
    Linux,
    MDX: MarkdownDark,
    Nextjs,
    "Next.js": Nextjs,
    Nodejs,
    "Node.js": Nodejs,
    Notion,
    Obsidian,
    PostgreSQL,
    Raindrop: Raindropio,
    Raindropio,
    React: ReactDark,
    Rust: RustDark,
    "Tailwind CSS": TailwindCSS,
    TailwindCSS,
    TypeScript,
    Vercel: VercelDark,
    "Visual Studio Code": VisualStudioCode,
    "Visual Studio Code Insiders": VisualStudioCode,
    Warp,
    Zed: ZedDark,
    "Zen Browser": ZenBrowserDark,
};

export type BrandGlyphProps = Readonly<{
    className?: string;
    fallback?: "monogram" | "none";
    name: string;
    title?: string;
}>;

function monogramFor(name: string) {
    const tokens = name.replaceAll("+", " ").replaceAll(".", " ").split(wordSplitExpression).filter(Boolean);

    if (tokens.length === 0) {
        return "--";
    }

    return tokens
        .slice(0, 2)
        .map((token) => token[0])
        .join("")
        .toUpperCase();
}

export function BrandGlyph({ className, fallback = "monogram", name, title }: BrandGlyphProps) {
    const Icon = brandGlyphs[name];

    if (Icon) {
        return <Icon aria-hidden={title ? undefined : true} className={className} focusable="false" />;
    }

    if (fallback === "none") {
        return null;
    }

    return (
        <span
            aria-hidden={title ? undefined : true}
            className={cn(
                "inline-flex items-center justify-center rounded-[0.2rem] border border-white/10 bg-card/24 font-mono text-[9px] text-muted-foreground/72 uppercase tracking-[0.18em]",
                className
            )}
        >
            {monogramFor(name)}
        </span>
    );
}
