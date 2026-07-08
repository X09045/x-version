/**
 * @file radius.ts
 * @description Production-ready corner radius design tokens for X Version.
 * Design System: Modern Futuristic UI
 * Architecture: Scalable, semantic, strongly typed.
 */

export interface RadiusTokens {
  /** Sharp edges (dividers, grids, technical elements) */
  readonly none: number;

  /** Small indicators, tags, compact components */
  readonly xs: number;

  /** Small buttons, inputs, chips */
  readonly sm: number;

  /** Default buttons, cards, form controls */
  readonly md: number;

  /** Glass panels, widgets, information cards */
  readonly lg: number;

  /** Dialogs, drawers, major containers */
  readonly xl: number;

  /** Hero panels, overlays, large system windows */
  readonly "2xl": number;

  /** Fully rounded (avatars, badges, pills, status indicators) */
  readonly full: number;
}

export const RADIUS: RadiusTokens = {
  /** Sharp geometric elements */
  none: 0,

  /** Minimal rounding */
  xs: 2,

  /** Small interactive components */
  sm: 4,

  /** Default UI components */
  md: 6,

  /** Cards and glass panels */
  lg: 10,

  /** Large containers */
  xl: 16,

  /** Hero sections and overlays */
  "2xl": 24,

  /** Perfect circle / pill */
  full: 9999,
} as const;

export type RadiusType = typeof RADIUS;