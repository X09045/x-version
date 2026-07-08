/**
 * @file animations.ts
 * @description Production-ready animation design tokens for X Version.
 * Style: AAA Futuristic RPG UI
 */

export interface AnimationDurations {
  readonly instant: number;
  readonly fast: number;
  readonly normal: number;
  readonly slow: number;
  readonly cinematic: number;
}

export interface AnimationEasing {
  readonly linear: string;
  readonly ease: string;
  readonly easeIn: string;
  readonly easeOut: string;
  readonly easeInOut: string;
  readonly spring: string;
}

export interface AnimationScale {
  readonly hover: number;
  readonly press: number;
  readonly popup: number;
}

export interface AnimationOpacity {
  readonly hidden: number;
  readonly visible: number;
}

export interface AnimationTokens {
  readonly duration: AnimationDurations;
  readonly easing: AnimationEasing;
  readonly scale: AnimationScale;
  readonly opacity: AnimationOpacity;
}

export const ANIMATIONS: AnimationTokens = {
  duration: {
    instant: 0,
    fast: 150,
    normal: 250,
    slow: 400,
    cinematic: 800,
  },

  easing: {
    linear: 'linear',
    ease: 'ease',
    easeIn: 'ease-in',
    easeOut: 'ease-out',
    easeInOut: 'ease-in-out',
    spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
  },

  scale: {
    hover: 1.03,
    press: 0.97,
    popup: 1.08,
  },

  opacity: {
    hidden: 0,
    visible: 1,
  },
} as const;

export type AnimationsType = typeof ANIMATIONS;