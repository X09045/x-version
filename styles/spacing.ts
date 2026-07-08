/**
 * @file spacing.ts
 * @description Production-ready spacing design tokens for X Version.
 * System: 8pt Grid System (Fluid / Game UI Layout Optimized)
 * Architecture: Strongly typed, strictly unique value composition
 */

export interface SpacingTokens {
  // Core Scale
  readonly xs: number;          // Sub-grid micro spacing (e.g., tight label text)
  readonly sm: number;          // Grid base unit (e.g., button inner padding)
  readonly md: number;          // 2x Grid base (e.g., elements within card)
  readonly lg: number;          // 3x Grid base (e.g., component-to-component padding)
  readonly xl: number;          // 4x Grid base (e.g., small panel margins)
  readonly '2xl': number;        // 6x Grid base (e.g., major modal body padding)
  readonly '3xl': number;        // 8x Grid base (e.g., HUD widget separation)
  readonly '4xl': number;        // 12x Grid base (e.g., huge spatial boundaries)

  // Layout & Semantic Viewport Scale
  readonly screenPadding: number; // Viewport safe-area inset for display edges
  readonly section: number;       // Generous spacing to delineate massive content blocks
  readonly container: number;     // Absolute structural max-width layout boundary
}

/**
 * Unique mathematical steps scaling smoothly through the 8pt grid matrix.
 * Every value is calculated uniquely to enforce zero-duplication rules.
 */
export const BASE_GRID = 8 as const;

export const SPACING: SpacingTokens = {
  // Core Scale
  xs: BASE_GRID * 0.5, // 4
  sm: BASE_GRID,       // 8
  md: BASE_GRID * 2,   // 16
  lg: BASE_GRID * 3,   // 24
  xl: BASE_GRID * 4,   // 32
  '2xl': BASE_GRID * 6, // 48
  '3xl': BASE_GRID * 8, // 64
  '4xl': BASE_GRID * 12, // 96

  // Layout & Semantic Scale (Unique functional step values)
  screenPadding: BASE_GRID * 5,  // 40  -> Adaptive HUD screen border gap
  section: BASE_GRID * 15,       // 120 -> Dynamic block-level flow separation
  container: BASE_GRID * 180,    // 1440 -> Optimal AAA viewport safe layout container limit
} as const;
// TODO (X Version v2):
// Add responsive spacing tokens for mobile, tablet and desktop.
export type SpacingType = typeof SPACING;