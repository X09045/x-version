/**
 * @file shadows.ts
 * @description Production-ready shadow and lighting design tokens for X Version.
 * Design System: Modern Futuristic UI
 * Architecture: Scalable, semantic, strongly typed.
 */

export interface ShadowsTokens {
  /** No shadow */
  readonly none: "none";

  /** Minimal elevation */
  readonly xs: string;

  /** Small components */
  readonly sm: string;

  /** Standard cards and panels */
  readonly md: string;

  /** Large floating components */
  readonly lg: string;

  /** Maximum elevation */
  readonly xl: string;

  /** Primary accent glow */
  readonly primaryGlow: string;

  /** Secondary accent glow */
  readonly secondaryGlow: string;

  /** Success state glow */
  readonly successGlow: string;

  /** Warning state glow */
  readonly warningGlow: string;

  /** Error state glow */
  readonly errorGlow: string;

  /** XP / Achievement glow */
  readonly xpGlow: string;

  /** Glassmorphism effect */
  readonly glass: string;

  /** Floating panels and popovers */
  readonly floating: string;

  /** Dialogs and overlays */
  readonly overlay: string;
}

export const SHADOWS: ShadowsTokens = {
  // Elevation
  none: "none",

  xs: "0 1px 2px rgba(0,0,0,0.6)",

  sm: "0 2px 8px rgba(0,0,0,0.75)",

  md: "0 4px 16px rgba(0,0,0,0.85), inset 0 0 1px rgba(255,255,255,0.10)",

  lg: "0 12px 32px rgba(0,0,0,0.90), inset 0 0 2px rgba(255,255,255,0.15)",

  xl: "0 24px 64px rgba(0,0,0,0.95), inset 0 0 4px rgba(255,255,255,0.20)",

  // Accent Glows
  primaryGlow:
    "0 0 8px rgba(0,229,255,0.40), 0 0 24px rgba(0,229,255,0.15)",

  secondaryGlow:
    "0 0 8px rgba(189,0,255,0.40), 0 0 24px rgba(189,0,255,0.15)",

  successGlow:
    "0 0 8px rgba(0,255,102,0.35), 0 0 20px rgba(0,255,102,0.10)",

  warningGlow:
    "0 0 8px rgba(255,184,0,0.35), 0 0 20px rgba(255,184,0,0.10)",

  errorGlow:
    "0 0 10px rgba(255,42,85,0.45), 0 0 28px rgba(255,42,85,0.20)",

  xpGlow:
    "0 0 12px rgba(255,215,0,0.40), 0 0 24px rgba(255,215,0,0.15)",

  // Glass Effects
  glass:
    "0 8px 32px rgba(0,0,0,0.70), inset 0 1px 0 rgba(255,255,255,0.12), inset 0 -1px 2px rgba(0,0,0,0.50)",

  floating:
    "0 20px 48px rgba(0,0,0,0.85), inset 0 0 1px rgba(255,255,255,0.20), 0 0 16px rgba(0,229,255,0.04)",

  overlay:
    "0 32px 80px rgba(0,0,0,0.98), inset 0 0 0 1px rgba(255,255,255,0.05), 0 0 120px rgba(0,0,0,0.50)",
} as const;

export type ShadowsType = typeof SHADOWS;