import { cn } from "#/lib/utils";

type SectionAtmosphereVariant =
    | "aboutHero"
    | "aboutNarrative"
    | "portfolioArchive"
    | "portfolioHero"
    | "writingArchive"
    | "writingHero"
    | "featured"
    | "tech"
    | "contact";

type PositionedGlyph = Readonly<{
    left?: string;
    right?: string;
    size?: number;
    top?: string;
}>;

type PhantomLine = Readonly<{
    angle?: number;
    color?: "primary" | "secondary" | "neutral";
    left?: string;
    right?: string;
    top?: string;
    width: string;
}>;

type DataBitCluster = Readonly<{
    bits: string;
    left?: string;
    right?: string;
    top: string;
}>;

type HexCode = Readonly<{
    left?: string;
    right?: string;
    top: string;
    value: string;
}>;

type TextureLayer = Readonly<{
    kind: "grid" | "halftone" | "scanline";
    mask: string;
    opacity: number;
    size: string;
}>;

type GlowPatch = Readonly<{
    background: string;
    opacity: number;
}>;

type DataColumn = Readonly<{
    align?: "center" | "left" | "right";
    left?: string;
    lines: readonly string[];
    right?: string;
    top: string;
}>;

type RadarRing = Readonly<{
    color?: "primary" | "secondary" | "neutral";
    left: string;
    opacity: number;
    size: string;
    top: string;
}>;

type RadarSweep = Readonly<{
    angle: string;
    color?: "primary" | "secondary" | "neutral";
    left: string;
    opacity: number;
    size: string;
    top: string;
}>;

type AtmosphereConfig = Readonly<{
    bitClusters: readonly DataBitCluster[];
    crosshairs: readonly PositionedGlyph[];
    dataColumns?: readonly DataColumn[];
    glows: readonly GlowPatch[];
    hexCodes: readonly HexCode[];
    lines: readonly PhantomLine[];
    nodes: readonly PositionedGlyph[];
    radarRings?: readonly RadarRing[];
    radarSweeps?: readonly RadarSweep[];
    shadowMask: string;
    textures: readonly TextureLayer[];
}>;

const variantConfigs: Record<SectionAtmosphereVariant, AtmosphereConfig> = {
    aboutHero: {
        textures: [
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 14%, black 82%, transparent 100%)",
                opacity: 0.014,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 76% 28%, black 0%, black 18%, transparent 58%), radial-gradient(circle at 18% 64%, black 0%, black 14%, transparent 46%)",
                opacity: 0.02,
                size: "8px 8px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 78% 26%, hsla(4, 100%, 60%, 0.08) 0%, transparent 28%)",
                opacity: 0.035,
            },
            {
                background: "radial-gradient(circle at 22% 70%, hsla(263, 70%, 58%, 0.06) 0%, transparent 26%)",
                opacity: 0.03,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "6%", top: "18%", width: "22%" },
            { angle: 0, color: "primary", right: "12%", top: "22%", width: "12%" },
            { angle: -45, color: "neutral", left: "14%", top: "70%", width: "9%" },
            { angle: 0, color: "secondary", right: "8%", top: "76%", width: "16%" },
        ],
        nodes: [
            { left: "18%", size: 6, top: "18%" },
            { right: "16%", size: 7, top: "22%" },
            { left: "14%", size: 5, top: "70%" },
        ],
        crosshairs: [{ right: "10%", size: 16, top: "58%" }],
        bitClusters: [
            { bits: "SUBJ:ABOUT_01", left: "10%", top: "12%" },
            { bits: "ID:YEH-4742", right: "14%", top: "16%" },
        ],
        hexCodes: [
            { left: "22%", top: "58%", value: "0xD055" },
            { right: "20%", top: "64%", value: "FILE.AB" },
        ],
        shadowMask:
            "radial-gradient(150% 124% at 50% 46%, transparent 0%, transparent 42%, hsl(0 0% 1% / 0.08) 78%, hsl(0 0% 1% / 0.24) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.08) 0%, transparent 16%, transparent 86%, hsl(0 0% 1% / 0.12) 100%)",
    },
    aboutNarrative: {
        textures: [
            {
                kind: "grid",
                mask: "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                opacity: 0.014,
                size: "56px 56px",
            },
            {
                kind: "scanline",
                mask: "linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%), linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                opacity: 0.012,
                size: "auto",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 16% 24%, hsla(4, 100%, 60%, 0.06) 0%, transparent 30%)",
                opacity: 0.028,
            },
            {
                background: "radial-gradient(circle at 76% 72%, hsla(263, 70%, 58%, 0.05) 0%, transparent 28%)",
                opacity: 0.026,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "8%", top: "14%", width: "14%" },
            { angle: 0, color: "neutral", right: "10%", top: "18%", width: "18%" },
            { angle: 45, color: "secondary", left: "72%", top: "64%", width: "8%" },
            { angle: 0, color: "primary", left: "12%", top: "82%", width: "20%" },
        ],
        nodes: [
            { left: "22%", size: 6, top: "14%" },
            { right: "16%", size: 5, top: "18%" },
            { left: "70%", size: 6, top: "64%" },
        ],
        crosshairs: [{ left: "86%", size: 12, top: "30%" }],
        bitClusters: [
            { bits: "DOSSIER.LORE", left: "9%", top: "10%" },
            { bits: "CHAPTER_02", right: "12%", top: "74%" },
        ],
        hexCodes: [
            { left: "18%", top: "68%", value: "0xA17B" },
            { right: "18%", top: "22%", value: "NOTE.04" },
        ],
        shadowMask:
            "radial-gradient(160% 126% at 50% 50%, transparent 0%, transparent 44%, hsl(0 0% 1% / 0.07) 80%, hsl(0 0% 1% / 0.22) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 14%, transparent 90%, hsl(0 0% 1% / 0.12) 100%)",
    },
    portfolioHero: {
        textures: [
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 14%, black 84%, transparent 100%)",
                opacity: 0.01,
                size: "auto",
            },
            {
                kind: "grid",
                mask: "radial-gradient(circle at 22% 38%, black 0%, black 22%, transparent 62%), linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
                opacity: 0.008,
                size: "52px 52px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 14% 40%, hsla(4, 100%, 60%, 0.08) 0%, transparent 30%)",
                opacity: 0.016,
            },
            {
                background: "radial-gradient(circle at 78% 30%, hsla(263, 70%, 58%, 0.06) 0%, transparent 28%)",
                opacity: 0.014,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "6%", top: "22%", width: "16%" },
            { angle: 0, color: "primary", right: "12%", top: "26%", width: "12%" },
            { angle: 0, color: "secondary", left: "54%", top: "74%", width: "18%" },
            { angle: -45, color: "neutral", left: "24%", top: "60%", width: "8%" },
        ],
        nodes: [
            { left: "18%", size: 6, top: "22%" },
            { right: "18%", size: 6, top: "26%" },
            { left: "72%", size: 5, top: "74%" },
        ],
        crosshairs: [{ left: "88%", size: 12, top: "40%" }],
        bitClusters: [
            { bits: "ARCHIVE.PORTFOLIO", left: "8%", top: "12%" },
            { bits: "WORK.LOG_02", right: "10%", top: "16%" },
        ],
        hexCodes: [
            { left: "18%", top: "54%", value: "IDX.A01" },
            { right: "22%", top: "62%", value: "0xF17E" },
        ],
        shadowMask:
            "radial-gradient(150% 124% at 50% 44%, transparent 0%, transparent 42%, hsl(0 0% 1% / 0.08) 80%, hsl(0 0% 1% / 0.24) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 16%, transparent 88%, hsl(0 0% 1% / 0.12) 100%)",
    },
    portfolioArchive: {
        textures: [
            {
                kind: "grid",
                mask: "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                opacity: 0.007,
                size: "54px 54px",
            },
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                opacity: 0.007,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 18% 24%, black 0%, black 16%, transparent 48%), radial-gradient(circle at 82% 74%, black 0%, black 14%, transparent 46%)",
                opacity: 0.009,
                size: "8px 8px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 20% 20%, hsla(4, 100%, 60%, 0.05) 0%, transparent 26%)",
                opacity: 0.012,
            },
            {
                background: "radial-gradient(circle at 74% 64%, hsla(263, 70%, 58%, 0.05) 0%, transparent 28%)",
                opacity: 0.012,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "8%", top: "12%", width: "18%" },
            { angle: 0, color: "primary", right: "10%", top: "18%", width: "12%" },
            { angle: 0, color: "neutral", left: "12%", top: "80%", width: "20%" },
            { angle: 45, color: "secondary", right: "24%", top: "72%", width: "8%" },
        ],
        nodes: [
            { left: "26%", size: 5, top: "12%" },
            { right: "16%", size: 6, top: "18%" },
            { left: "30%", size: 5, top: "80%" },
        ],
        crosshairs: [
            { right: "8%", size: 12, top: "34%" },
            { left: "6%", size: 10, top: "58%" },
        ],
        dataColumns: [
            {
                left: "10%",
                lines: ["ARCHIVE", "FILTER.STATE", "NODE:GRID"],
                top: "10%",
            },
            {
                align: "right",
                right: "10%",
                lines: ["IDX.02", "PAGE.CURSOR", "SYNC.OK"],
                top: "72%",
            },
        ],
        bitClusters: [
            { bits: "110010 001101 101011", left: "12%", top: "26%" },
            { bits: "0101 1110 0011", right: "12%", top: "68%" },
        ],
        hexCodes: [
            { left: "20%", top: "64%", value: "0xC287" },
            { right: "18%", top: "42%", value: "PAGE.02" },
        ],
        shadowMask:
            "radial-gradient(160% 126% at 50% 50%, transparent 0%, transparent 46%, hsl(0 0% 1% / 0.07) 82%, hsl(0 0% 1% / 0.22) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 14%, transparent 90%, hsl(0 0% 1% / 0.1) 100%)",
    },
    writingHero: {
        textures: [
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 14%, black 84%, transparent 100%)",
                opacity: 0.009,
                size: "auto",
            },
            {
                kind: "grid",
                mask: "radial-gradient(circle at 78% 26%, black 0%, black 18%, transparent 56%), linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)",
                opacity: 0.007,
                size: "58px 58px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 18% 28%, hsla(4, 100%, 60%, 0.07) 0%, transparent 32%)",
                opacity: 0.014,
            },
            {
                background: "radial-gradient(circle at 76% 26%, hsla(263, 70%, 58%, 0.055) 0%, transparent 28%)",
                opacity: 0.013,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "8%", top: "18%", width: "16%" },
            { angle: 0, color: "primary", right: "12%", top: "24%", width: "12%" },
            { angle: 0, color: "secondary", left: "56%", top: "72%", width: "18%" },
            { angle: -45, color: "neutral", left: "24%", top: "60%", width: "8%" },
        ],
        nodes: [
            { left: "22%", size: 6, top: "18%" },
            { right: "18%", size: 6, top: "24%" },
            { left: "74%", size: 5, top: "72%" },
        ],
        crosshairs: [{ left: "84%", size: 12, top: "42%" }],
        dataColumns: [
            {
                left: "10%",
                lines: ["DRAFT.LOG", "RSS.INPUT", "ESSAY.NODE"],
                top: "12%",
            },
        ],
        bitClusters: [
            { bits: "WRITE:1010 0111", left: "10%", top: "30%" },
            { bits: "SYNC:0011 1100", right: "14%", top: "70%" },
        ],
        hexCodes: [
            { left: "18%", top: "58%", value: "TXT.01" },
            { right: "20%", top: "52%", value: "0xE55A" },
        ],
        shadowMask:
            "radial-gradient(150% 124% at 50% 44%, transparent 0%, transparent 42%, hsl(0 0% 1% / 0.08) 80%, hsl(0 0% 1% / 0.24) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 16%, transparent 88%, hsl(0 0% 1% / 0.12) 100%)",
    },
    writingArchive: {
        textures: [
            {
                kind: "grid",
                mask: "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                opacity: 0.006,
                size: "54px 54px",
            },
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 12%, black 88%, transparent 100%)",
                opacity: 0.006,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 20% 24%, black 0%, black 15%, transparent 46%), radial-gradient(circle at 80% 72%, black 0%, black 14%, transparent 44%)",
                opacity: 0.008,
                size: "8px 8px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 18% 20%, hsla(4, 100%, 60%, 0.05) 0%, transparent 26%)",
                opacity: 0.01,
            },
            {
                background: "radial-gradient(circle at 74% 66%, hsla(263, 70%, 58%, 0.05) 0%, transparent 28%)",
                opacity: 0.01,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "8%", top: "14%", width: "18%" },
            { angle: 0, color: "primary", right: "10%", top: "18%", width: "12%" },
            { angle: 0, color: "neutral", left: "12%", top: "80%", width: "20%" },
            { angle: 45, color: "secondary", right: "24%", top: "70%", width: "8%" },
        ],
        nodes: [
            { left: "24%", size: 5, top: "14%" },
            { right: "16%", size: 6, top: "18%" },
            { left: "30%", size: 5, top: "80%" },
        ],
        crosshairs: [
            { right: "8%", size: 12, top: "36%" },
            { left: "6%", size: 10, top: "58%" },
        ],
        dataColumns: [
            {
                left: "10%",
                lines: ["ARCHIVE", "RSS.PARSE", "ENTRY.LOG"],
                top: "10%",
            },
            {
                align: "right",
                right: "10%",
                lines: ["ESSAY.IDX", "LATEST.POST", "SYNC.OK"],
                top: "72%",
            },
        ],
        bitClusters: [
            { bits: "ESSAY:1101 0011", left: "12%", top: "28%" },
            { bits: "NOTES:0101 1110", right: "12%", top: "68%" },
        ],
        hexCodes: [
            { left: "20%", top: "64%", value: "ISSUE.02" },
            { right: "18%", top: "42%", value: "0xC6AF" },
        ],
        shadowMask:
            "radial-gradient(160% 126% at 50% 50%, transparent 0%, transparent 46%, hsl(0 0% 1% / 0.07) 82%, hsl(0 0% 1% / 0.22) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 14%, transparent 90%, hsl(0 0% 1% / 0.1) 100%)",
    },
    featured: {
        textures: [
            {
                kind: "grid",
                mask: "radial-gradient(circle at 34% 42%, black 0%, black 28%, transparent 74%), linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                opacity: 0.014,
                size: "46px 46px",
            },
            {
                kind: "scanline",
                mask: "linear-gradient(180deg, transparent 0%, black 18%, black 72%, transparent 100%)",
                opacity: 0.009,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 82% 24%, black 0%, black 18%, transparent 62%)",
                opacity: 0.01,
                size: "8px 8px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 14% 28%, hsla(4, 100%, 60%, 0.14) 0%, transparent 34%)",
                opacity: 0.018,
            },
            {
                background: "radial-gradient(circle at 82% 70%, hsla(263, 70%, 58%, 0.08) 0%, transparent 28%)",
                opacity: 0.014,
            },
            {
                background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.12) 33%, transparent 72%)",
                opacity: 0.01,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "6%", top: "18%", width: "18%" },
            { angle: 45, color: "primary", left: "11%", top: "56%", width: "12%" },
            { angle: -45, color: "secondary", right: "10%", top: "25%", width: "14%" },
            { angle: 0, color: "neutral", right: "6%", top: "72%", width: "12%" },
            { angle: 0, color: "neutral", left: "28%", top: "34%", width: "8%" },
            { angle: 45, color: "neutral", right: "24%", top: "58%", width: "7%" },
        ],
        nodes: [
            { left: "24%", size: 8, top: "18%" },
            { right: "22%", size: 6, top: "25%" },
            { left: "19%", size: 7, top: "59%" },
            { right: "30%", size: 6, top: "58%" },
        ],
        crosshairs: [{ left: "8%", size: 16, top: "64%" }],
        bitClusters: [{ bits: "001101 110010", left: "8%", top: "12%" }],
        hexCodes: [
            { left: "16%", top: "44%", value: "0x7A3F" },
            { right: "18%", top: "56%", value: "#14C9" },
        ],
        shadowMask:
            "radial-gradient(160% 122% at 50% 48%, transparent 0%, transparent 44%, hsl(0 0% 1% / 0.08) 82%, hsl(0 0% 1% / 0.18) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.06) 0%, transparent 18%, transparent 86%, hsl(0 0% 1% / 0.08) 100%)",
    },
    tech: {
        textures: [
            {
                kind: "scanline",
                mask: "linear-gradient(90deg, transparent 0%, black 4%, black 96%, transparent 100%), linear-gradient(180deg, transparent 0%, black 18%, black 84%, transparent 100%)",
                opacity: 0.008,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 84% 34%, black 0%, black 18%, transparent 62%), radial-gradient(circle at 14% 78%, black 0%, black 14%, transparent 48%)",
                opacity: 0.01,
                size: "7px 7px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 20% 22%, hsla(4, 100%, 60%, 0.12) 0%, transparent 30%)",
                opacity: 0.014,
            },
            {
                background: "radial-gradient(circle at 76% 58%, hsla(263, 70%, 58%, 0.1) 0%, transparent 34%)",
                opacity: 0.014,
            },
            {
                background: "linear-gradient(135deg, transparent 0%, rgba(255,255,255,0.08) 28%, transparent 64%)",
                opacity: 0.007,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "7%", top: "14%", width: "12%" },
            { angle: 0, color: "primary", left: "54%", top: "18%", width: "10%" },
            { angle: -45, color: "secondary", right: "14%", top: "22%", width: "10%" },
            { angle: 0, color: "neutral", right: "10%", top: "68%", width: "14%" },
        ],
        nodes: [
            { left: "20%", size: 6, top: "14%" },
            { left: "63%", size: 6, top: "18%" },
            { right: "22%", size: 7, top: "68%" },
        ],
        crosshairs: [
            { right: "8%", size: 14, top: "30%" },
            { left: "68%", size: 11, top: "82%" },
        ],
        dataColumns: [
            {
                left: "8%",
                lines: ["10110101", "00101110", "STACK.LOG", "0xA17F"],
                top: "12%",
            },
            {
                align: "center",
                left: "50%",
                lines: ["BIN/IDX", "11001001", "01011100"],
                top: "8%",
            },
            {
                align: "right",
                right: "9%",
                lines: ["SYS.NODE", "11100101", "0101 0110"],
                top: "70%",
            },
        ],
        bitClusters: [
            { bits: "110101 001011 111000", left: "10%", top: "32%" },
            { bits: "0101 1001 1100", right: "11%", top: "74%" },
            { bits: "0011 1100 1010", left: "58%", top: "28%" },
            { bits: "1110 0101", right: "16%", top: "16%" },
        ],
        hexCodes: [
            { left: "24%", top: "62%", value: "0xB71C" },
            { right: "18%", top: "46%", value: "#A4FF" },
            { left: "61%", top: "56%", value: "7F-2D" },
        ],
        shadowMask:
            "radial-gradient(155% 126% at 50% 48%, transparent 0%, transparent 40%, hsl(0 0% 1% / 0.08) 80%, hsl(0 0% 1% / 0.26) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.08) 0%, transparent 14%, transparent 88%, hsl(0 0% 1% / 0.12) 100%)",
    },
    contact: {
        textures: [
            {
                kind: "scanline",
                mask: "radial-gradient(circle at 50% 34%, black 0%, black 28%, transparent 76%), linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)",
                opacity: 0.01,
                size: "auto",
            },
            {
                kind: "halftone",
                mask: "radial-gradient(circle at 22% 24%, black 0%, black 16%, transparent 52%), radial-gradient(circle at 80% 74%, black 0%, black 14%, transparent 52%)",
                opacity: 0.01,
                size: "8px 8px",
            },
        ],
        glows: [
            {
                background: "radial-gradient(circle at 50% 18%, hsla(4, 100%, 60%, 0.14) 0%, transparent 38%)",
                opacity: 0.02,
            },
            {
                background: "radial-gradient(circle at 18% 74%, hsla(263, 70%, 58%, 0.08) 0%, transparent 26%)",
                opacity: 0.014,
            },
        ],
        lines: [
            { angle: 0, color: "neutral", left: "10%", top: "28%", width: "18%" },
            { angle: 0, color: "neutral", right: "12%", top: "28%", width: "18%" },
            { angle: 0, color: "secondary", left: "36%", top: "52%", width: "28%" },
            { angle: -45, color: "primary", left: "18%", top: "64%", width: "10%" },
            { angle: 45, color: "secondary", right: "16%", top: "62%", width: "10%" },
        ],
        nodes: [
            { left: "29%", size: 7, top: "28%" },
            { left: "50%", size: 8, top: "52%" },
            { right: "30%", size: 7, top: "28%" },
        ],
        crosshairs: [
            { left: "50%", size: 20, top: "34%" },
            { left: "8%", size: 13, top: "38%" },
            { right: "9%", size: 13, top: "44%" },
        ],
        radarRings: [
            { color: "neutral", left: "50%", opacity: 0.05, size: "18rem", top: "34%" },
            { color: "primary", left: "50%", opacity: 0.04, size: "28rem", top: "34%" },
            { color: "secondary", left: "50%", opacity: 0.03, size: "40rem", top: "34%" },
        ],
        radarSweeps: [
            { angle: "210deg", color: "primary", left: "50%", opacity: 0.03, size: "30rem", top: "34%" },
            { angle: "26deg", color: "secondary", left: "50%", opacity: 0.02, size: "40rem", top: "34%" },
        ],
        bitClusters: [
            { bits: "SIG:0011 1110 1001", left: "12%", top: "82%" },
            { bits: "PING:1100 0101", right: "13%", top: "14%" },
        ],
        hexCodes: [
            { left: "18%", top: "16%", value: "0xC0DE" },
            { right: "18%", top: "78%", value: "#7E1A" },
        ],
        shadowMask:
            "radial-gradient(150% 120% at 50% 36%, transparent 0%, transparent 28%, hsl(0 0% 1% / 0.18) 70%, hsl(0 0% 1% / 0.56) 100%), linear-gradient(180deg, hsl(0 0% 1% / 0.14) 0%, transparent 14%, transparent 88%, hsl(0 0% 1% / 0.22) 100%)",
    },
};

function textureBackground(kind: TextureLayer["kind"]) {
    if (kind === "grid") {
        return "linear-gradient(hsl(0 0% 100% / 0.08) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100% / 0.08) 1px, transparent 1px)";
    }

    if (kind === "halftone") {
        return "radial-gradient(circle, hsl(0 0% 100% / 0.14) 1px, transparent 1px)";
    }

    return "repeating-linear-gradient(0deg, transparent, transparent 2px, hsl(0 0% 100% / 0.1) 2px, hsl(0 0% 100% / 0.1) 3px)";
}

function lineGradient(color: PhantomLine["color"]) {
    if (color === "primary") {
        return "from-primary/9 via-primary/4 to-transparent";
    }

    if (color === "secondary") {
        return "from-secondary/8 via-secondary/4 to-transparent";
    }

    return "from-white/5 via-white/2 to-transparent";
}

function radarBorder(color: RadarRing["color"]) {
    if (color === "primary") {
        return "border-primary/8";
    }

    if (color === "secondary") {
        return "border-secondary/7";
    }

    return "border-white/4";
}

function radarSweepColor(color: RadarSweep["color"]) {
    if (color === "primary") {
        return "hsla(4, 100%, 60%, 0.08)";
    }

    if (color === "secondary") {
        return "hsla(263, 70%, 58%, 0.07)";
    }

    return "hsla(0, 0%, 100%, 0.05)";
}

function Crosshair({ glyph }: Readonly<{ glyph: PositionedGlyph }>) {
    const size = glyph.size ?? 16;

    return (
        <div
            className="absolute text-white/5"
            style={{
                height: `${size}px`,
                left: glyph.left,
                right: glyph.right,
                top: glyph.top,
                width: `${size}px`,
            }}
        >
            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
            <div className="absolute top-1/2 left-1/2 h-1.5 w-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
        </div>
    );
}

function StarGlyph({ glyph }: Readonly<{ glyph: PositionedGlyph }>) {
    const size = glyph.size ?? 7;

    return (
        <div
            className="absolute text-white/6"
            style={{
                height: `${size}px`,
                left: glyph.left,
                right: glyph.right,
                top: glyph.top,
                width: `${size}px`,
            }}
        >
            <div className="absolute top-0 left-1/2 h-full w-px -translate-x-1/2 bg-current" />
            <div className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2 bg-current" />
            <div className="absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 rotate-45 bg-current" />
            <div className="absolute top-1/2 left-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 -rotate-45 bg-current" />
        </div>
    );
}

function PhantomBracket({ line }: Readonly<{ line: PhantomLine }>) {
    return (
        <div className="absolute" style={{ left: line.left, right: line.right, top: line.top, width: line.width }}>
            <div className="relative h-px origin-left" style={{ transform: `rotate(${line.angle ?? 0}deg)` }}>
                <div className={cn("h-px w-full bg-linear-to-r", lineGradient(line.color))} />
                <div className="absolute -top-1 left-0 h-3 w-px bg-white/5" />
                <div className="absolute -top-1 right-0 h-3 w-px bg-white/4" />
            </div>
        </div>
    );
}

type SectionAtmosphereProps = Readonly<{
    bleed?: "frame" | "viewport";
    className?: string;
    variant: SectionAtmosphereVariant;
}>;

const bleedMaskImage =
    "linear-gradient(180deg, transparent 0%, black 10%, black 90%, transparent 100%), linear-gradient(90deg, transparent 0%, black 8%, black 92%, transparent 100%)";

const detailMaskImage =
    "linear-gradient(180deg, transparent 0%, black 6%, black 94%, transparent 100%), linear-gradient(90deg, transparent 0%, black 6%, black 94%, transparent 100%)";

const fieldMeltOverlay =
    "linear-gradient(180deg, hsl(0 0% 1% / 0.035) 0%, transparent 14%, transparent 88%, hsl(0 0% 1% / 0.05) 100%), linear-gradient(90deg, transparent 0%, hsl(0 0% 1% / 0.03) 8%, transparent 24%, transparent 76%, hsl(0 0% 1% / 0.03) 92%, transparent 100%)";

const viewportBleedWidth = "var(--viewport-width)";
const viewportBleedLeft = "calc(50% - (var(--viewport-width) / 2))";

export function SectionAtmosphere({ bleed = "viewport", className, variant }: SectionAtmosphereProps) {
    const config = variantConfigs[variant];
    const rootStyle =
        bleed === "frame"
            ? { bottom: 0, left: 0, right: 0, top: 0 }
            : {
                  bottom: 0,
                  left: viewportBleedLeft,
                  top: 0,
                  width: viewportBleedWidth,
              };

    return (
        <div
            aria-hidden="true"
            className={cn("pointer-events-none absolute overflow-visible", className)}
            style={rootStyle}
        >
            <div
                className="pointer-events-none absolute opacity-12 blur-2xl"
                style={{
                    bottom: "-6rem",
                    left: "0",
                    maskImage: bleedMaskImage,
                    right: "0",
                    top: "-6rem",
                    WebkitMaskImage: bleedMaskImage,
                }}
            >
                {config.textures.map((texture) => (
                    <div
                        className="absolute inset-0"
                        key={`bleed-texture-${variant}-${texture.kind}-${texture.size}`}
                        style={{
                            backgroundImage: textureBackground(texture.kind),
                            backgroundSize: texture.size,
                            maskImage: texture.mask,
                            opacity: texture.opacity * 0.24,
                            WebkitMaskImage: texture.mask,
                        }}
                    />
                ))}

                {config.glows.map((glow) => (
                    <div
                        className="absolute inset-0"
                        key={`bleed-glow-${variant}-${glow.background.slice(0, 28)}`}
                        style={{ background: glow.background, opacity: glow.opacity * 0.46 }}
                    />
                ))}
            </div>

            {config.textures.map((texture) => (
                <div
                    className="absolute inset-0"
                    key={`texture-${variant}-${texture.kind}-${texture.size}`}
                    style={{
                        backgroundImage: textureBackground(texture.kind),
                        backgroundSize: texture.size,
                        maskImage: texture.mask,
                        opacity: texture.opacity * 0.32,
                        WebkitMaskImage: texture.mask,
                    }}
                />
            ))}

            {config.glows.map((glow) => (
                <div
                    className="absolute inset-0"
                    key={`glow-${variant}-${glow.background.slice(0, 28)}`}
                    style={{ background: glow.background, opacity: glow.opacity * 0.5 }}
                />
            ))}

            {config.lines.map((line) => (
                <PhantomBracket
                    key={`line-${variant}-${line.top}-${line.left ?? line.right ?? "auto"}-${line.width}-${line.angle ?? 0}`}
                    line={line}
                />
            ))}
            {config.nodes.map((glyph) => (
                <StarGlyph
                    glyph={glyph}
                    key={`node-${variant}-${glyph.top}-${glyph.left ?? glyph.right ?? "auto"}-${glyph.size ?? 0}`}
                />
            ))}
            {config.crosshairs.map((glyph) => (
                <Crosshair
                    glyph={glyph}
                    key={`crosshair-${variant}-${glyph.top}-${glyph.left ?? glyph.right ?? "auto"}-${glyph.size ?? 0}`}
                />
            ))}

            {config.dataColumns?.map((column) => (
                <div
                    className={cn(
                        "absolute flex flex-col gap-1 font-mono text-[7px] text-white/4 tracking-[0.22em]",
                        column.align === "center"
                            ? "items-center text-center"
                            : column.align === "right"
                              ? "items-end text-right"
                              : "items-start"
                    )}
                    key={`column-${variant}-${column.top}-${column.left ?? column.right ?? "auto"}`}
                    style={{ left: column.left, right: column.right, top: column.top }}
                >
                    {column.lines.map((line) => (
                        <span key={`column-line-${column.top}-${line}`}>{line}</span>
                    ))}
                </div>
            ))}

            {config.radarRings?.map((ring) => (
                <div
                    className={cn(
                        "absolute -translate-x-1/2 -translate-y-1/2 rounded-full border",
                        radarBorder(ring.color)
                    )}
                    key={`ring-${variant}-${ring.top}-${ring.left}-${ring.size}`}
                    style={{
                        height: ring.size,
                        left: ring.left,
                        opacity: ring.opacity,
                        top: ring.top,
                        width: ring.size,
                    }}
                />
            ))}

            {config.radarSweeps?.map((sweep) => (
                <div
                    className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full"
                    key={`sweep-${variant}-${sweep.top}-${sweep.left}-${sweep.size}-${sweep.angle}`}
                    style={{
                        background: `conic-gradient(from ${sweep.angle}, transparent 0deg, ${radarSweepColor(sweep.color)} 20deg, transparent 46deg)`,
                        height: sweep.size,
                        left: sweep.left,
                        maskImage: "radial-gradient(circle, black 0%, black 56%, transparent 76%)",
                        opacity: sweep.opacity,
                        top: sweep.top,
                        width: sweep.size,
                        WebkitMaskImage: "radial-gradient(circle, black 0%, black 56%, transparent 76%)",
                    }}
                />
            ))}

            {config.bitClusters.map((cluster) => (
                <div
                    className="absolute font-mono text-[8px] text-white/4 tracking-[0.24em]"
                    key={`bits-${variant}-${cluster.top}-${cluster.left ?? cluster.right ?? "auto"}-${cluster.bits}`}
                    style={{ left: cluster.left, right: cluster.right, top: cluster.top }}
                >
                    {cluster.bits}
                </div>
            ))}
            {config.hexCodes.map((hex) => (
                <div
                    className="absolute font-mono text-[8px] text-white/5 tracking-[0.2em]"
                    key={`hex-${variant}-${hex.top}-${hex.left ?? hex.right ?? "auto"}-${hex.value}`}
                    style={{ left: hex.left, right: hex.right, top: hex.top }}
                >
                    {hex.value}
                </div>
            ))}
            <div
                className="absolute inset-0"
                style={{
                    background: config.shadowMask,
                    maskImage: detailMaskImage,
                    opacity: 0.32,
                    WebkitMaskImage: detailMaskImage,
                }}
            />
        </div>
    );
}
