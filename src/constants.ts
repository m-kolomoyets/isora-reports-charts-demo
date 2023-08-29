import { Grades } from './types';

/**
 * Environment variables
 */
export const IS_DEV = import.meta.env.DEV;
export const API_URL = import.meta.env.VITE_API_URL;
export const BASE_PUBLIC_PATH = import.meta.env.VITE_BASE_PUBLIC_PATH;

/**
 * Common constants
 */
export const DEFAULT_TRANSITION = { type: 'linear', duration: 0.15 };

/**
 * Grades constants
 */
export const GRADES_LABELS = {
    aPlus: 'A+',
    a: 'A',
    b: 'B',
    c: 'C',
    d: 'D',
    f: 'F',
} as const;

export const GRADES_CONFIG = {
    aPlus: {
        label: GRADES_LABELS.aPlus,
        className: 'bg-light-blue-100 border-light-blue-200',
    },
    a: {
        label: GRADES_LABELS.a,
        className: 'bg-light-blue-0 border-light-blue-100',
    },
    b: {
        label: GRADES_LABELS.b,
        className: 'bg-green-0 border-green-100',
    },
    c: {
        label: GRADES_LABELS.c,
        className: 'bg-orange-0 border-orange-100',
    },
    d: {
        label: GRADES_LABELS.d,
        className: 'bg-red-0 border-red-100',
    },
    f: {
        label: GRADES_LABELS.f,
        className: 'bg-red-100 border-red-200',
    },
} as const;

export const GRADES_RANGES: Record<Grades, { min: number; max: number }> = {
    f: {
        min: 0,
        max: 59,
    },
    d: {
        min: 60,
        max: 69,
    },
    c: {
        min: 70,
        max: 79,
    },
    b: {
        min: 80,
        max: 89,
    },
    a: {
        min: 90,
        max: 99,
    },
    aPlus: {
        min: 100,
        max: 100,
    },
};

/**
 * Routing constants
 */
export const ROUTES = {
    notFound: '/404',
} as const;
