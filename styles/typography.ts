/**
 * @file typography.ts
 * @description Production-ready typography design tokens for X Version.
 * Style: Modern Premium UI / High-Fidelity Gaming & Web Viewports
 * Architecture: Strongly typed, scale-optimized, responsive ready
 */
const FONT_STACK =
  '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

const MONO_STACK =
  '"JetBrains Mono", "Fira Code", "SF Mono", Monaco, Consolas, monospace';
export interface FontFamilies {
  readonly display: string;
  readonly heading: string;
  readonly body: string;
  readonly mono: string;
}

export interface FontSizes {
  readonly xs: number;
  readonly sm: number;
  readonly md: number;
  readonly lg: number;
  readonly xl: number;
  readonly '2xl': number;
  readonly '3xl': number;
  readonly '4xl': number;
  readonly '5xl': number;
  readonly '6xl': number;
}

export interface FontWeights {
  readonly light: number;
  readonly regular: number;
  readonly medium: number;
  readonly semibold: number;
  readonly bold: number;
  readonly black: number;
}

export interface LineHeights {
  readonly tight: number;
  readonly normal: number;
  readonly relaxed: number;
}

export interface LetterSpacing {
  readonly tighter: string;
  readonly tight: string;
  readonly normal: string;
  readonly wide: string;
  readonly wider: string;
}

export interface TypographySystem {
  readonly families: FontFamilies;
  readonly sizes: FontSizes;
  readonly weights: FontWeights;
  readonly lineHeights: LineHeights;
  readonly letterSpacing: LetterSpacing;
}

export const TYPOGRAPHY: TypographySystem = {
  /**
   * Premium high-performance typographic stacks optimized for cross-platform anti-aliasing.
   * Leverages clean geometric shapes for data-heavy and cinematic user interfaces.
   */
 families: {
  display: FONT_STACK,
  heading: FONT_STACK,
  body: FONT_STACK,
  mono: MONO_STACK,
},
  /**
   * Precise numeric pixel values. Scalable for both mobile responsive viewports
   * and 4K desktop display matrices.
   */
  sizes: {
    xs: 12,    // Micro telemetry data, structural labels
    sm: 14,    // Secondary text, status pill captions
    md: 16,    // Body copy, primary interactive component actions
    lg: 18,    // Sub-headers, prominent menu item titles
    xl: 20,    // Segment headers, card titles
    '2xl': 24, // Minor dialogue titles, notification alert titles
    '3xl': 30, // Section headlines, module titles
    '4xl': 36, // Main viewport panel overlays, summary values
    '5xl': 48, // Cinematic display level flags, massive numbers
    '6xl': 60, // Critical progression events, milestone alerts
  },

  /**
   * Explicit OpenType/TrueType numerical font weights.
   */
  weights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    black: 900,
  },

  /**
   * Unitless dynamic multipliers preventing overflow scaling issues across screen breakpoints.
   */
  lineHeights: {
    tight: 1.2,   // Optimized for display headers and multi-line titles
    normal: 1.5,   // Default calculation for layout components and lists
    relaxed: 1.7,  // High legibility ratio for narrative prose or logs
  },

  /**
   * Standard EM values ensuring relative text tracking scales symmetrically with size adjustments.
   */
  letterSpacing: {
    tighter: '-0.03em', // Dense formatting for massive display sizes
    tight: '-0.01em',   // Modern sleek touch for standard headers
    normal: '0em',       // Default layout tracking
    wide: '0.04em',     // Enhanced tracking for capsule tabs & micro captions
    wider: '0.08em',    // Sci-fi sub-captions, forced uppercase telemetry tracking
  },
} as const;
// TODO (X Version v2):
// Add responsive typography scale for mobile, tablet and desktop.  
export type TypographyType = typeof TYPOGRAPHY;