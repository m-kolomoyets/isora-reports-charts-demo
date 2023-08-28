import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...values: ClassValue[]) => {
    return twMerge(clsx(values));
};

export const noop = () => {};

export const truncateString = (value: string, length = 15) => {
    if (value.length <= length) {
        return value;
    }

    return `${value.slice(0, length)}...`;
};
