import { Grades } from '@/types';

export const GRADES_DESCRIPTIONS: Record<Grades, { title: string; subtitle: string; titleClassName: string }> = {
    f: {
        title: 'Needs Attention',
        subtitle: 'We`ll get there!',
        titleClassName: 'text-red-1000',
    },
    d: {
        title: 'Up & Coming',
        subtitle: 'Let`s step it up!',
        titleClassName: 'text-red-600',
    },
    c: {
        title: 'Making Progress',
        subtitle: 'We`ll get there!',
        titleClassName: 'text-orange-700',
    },
    b: {
        title: 'Doing good',
        subtitle: 'Let`s keep going!',
        titleClassName: 'text-green-600',
    },
    a: {
        title: 'Brilliant',
        subtitle: 'Don`t stop now!',
        titleClassName: 'text-light-blue-600',
    },
    aPlus: {
        title: 'Perfect',
        subtitle: 'No gaps identified!',
        titleClassName: 'text-light-blue-900',
    },
};
