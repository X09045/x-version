/**
 * @file colors.ts
 * @description Production-ready design tokens for X Version.
 * Theme: Dark Futuristic AAA Game UI
 * Architecture: Scalable Semantic Token System
 */

type HexColor = `#${string}`;
type RgbaColor = `rgba(${number}, ${number}, ${number}, ${number})`;
type ColorValue = HexColor | RgbaColor;

export interface TokenScale {
  readonly main: ColorValue;
  readonly light?: ColorValue;
  readonly dark?: ColorValue;
  readonly alpha?: RgbaColor;
}

export interface GameThemeColors {
  readonly background: TokenScale;
  readonly surface: TokenScale;
  readonly glass: TokenScale;
  readonly text: {
    readonly primary: ColorValue;
    readonly secondary: ColorValue;
    readonly disabled: ColorValue;
  };
  readonly border: TokenScale;
  
  // Brand & Accent
  readonly primary: TokenScale;
  readonly secondary: TokenScale;
  
  // Status Indicators
  readonly success: TokenScale;
  readonly warning: TokenScale;
  readonly error: TokenScale;
  readonly info: TokenScale;
  
  // Core Gameplay Stats
  readonly xp: TokenScale;
  readonly health: TokenScale;
  readonly mana: TokenScale;
  readonly energy: TokenScale;
  
  // Item Rarity Tiers
  readonly legendary: TokenScale;
  readonly epic: TokenScale;
  readonly rare: TokenScale;
  readonly common: TokenScale;
  
  // Visual Effects
  readonly shadow: TokenScale;
  readonly glow: TokenScale;
}

export const COLORS: GameThemeColors = {
  background: {
    main: '#06080F', // Deep space void
    light: '#0A0D17',
    dark: '#030407',
  },
  surface: {
    main: '#111522', // Elevated panel
    light: '#1A2133',
    dark: '#0D101A',
  },
  glass: {
    main: 'rgba(17, 21, 34, 0.65)', // Frosted dark aerospace glass
    light: 'rgba(26, 33, 51, 0.45)',
  },
  text: {
    primary: '#F8FAFC', // Crisp white for max legibility
    secondary: '#94A3B8', // Muted steel
    disabled: '#475569',
  },
  border: {
    main: '#1E293B', // Subtle structural line
    light: '#334155',
    alpha: 'rgba(30, 41, 59, 0.5)',
  },
  primary: {
    main: '#00E5FF', // Cyber cyan
    light: '#5CFAFF',
    dark: '#008C99',
    alpha: 'rgba(0, 229, 255, 0.2)',
  },
  secondary: {
    main: '#BD00FF', // Neon plasma purple
    light: '#D866FF',
    dark: '#700099',
    alpha: 'rgba(189, 0, 255, 0.2)',
  },
  success: {
    main: '#00FF66', // Biometric green
    dark: '#00993D',
  },
  warning: {
    main: '#FFB800', // Hazard amber
    dark: '#996E00',
  },
  error: {
    main: '#FF2A55', // Critical crimson
    dark: '#991933',
  },
  info: {
    main: '#3B82F6', // Hologram blue
    dark: '#234E93',
  },
  xp: {
    main: '#FFD700', // Aureate gold
    light: '#FFE44D',
  },
  health: {
    main: '#FF1E1E', // Vitality red
    dark: '#991212',
  },
  mana: {
    main: '#0066FF', // Aether stream
    light: '#4D94FF',
  },
  energy: {
    main: '#CCFF00', // Kinetic yellow
    dark: '#7A9900',
  },
  legendary: {
    main: '#FF8A00', // Mythic orange
    light: '#FFAD4D',
    alpha: 'rgba(255, 138, 0, 0.3)',
  },
  epic: {
    main: '#A855F7', // Void violet
    light: '#C084FC',
    alpha: 'rgba(168, 85, 247, 0.3)',
  },
  rare: {
    main: '#0EA5E9', // Azure core
    light: '#38BDF8',
    alpha: 'rgba(14, 165, 233, 0.3)',
  },
  common: {
    main: '#64748B', // Industrial slate
    light: '#94A3B8',
    alpha: 'rgba(100, 116, 139, 0.3)',
  },
  shadow: {
    main: 'rgba(0, 0, 0, 0.75)', // Deep ambient occlusion
    dark: 'rgba(0, 0, 0, 0.90)',
    light: 'rgba(0, 0, 0, 0.40)',
  },
  glow: {
    main: 'rgba(0, 229, 255, 0.40)', // Primary bloom
    light: 'rgba(0, 229, 255, 0.15)',
    dark: 'rgba(0, 229, 255, 0.80)',
  },
} as const;

export type ColorsType = typeof COLORS;