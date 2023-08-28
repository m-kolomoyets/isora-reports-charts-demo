import type { LineProps } from 'recharts';
import { LINES_CONFIG, LINES_WIDTH } from '../constants';

export const getLinesConfig = (currentName: string): Omit<LineProps, 'ref'>[] => {
    return Object.entries(LINES_CONFIG).map(([dataKey, item]) => {
        return {
            name: currentName,
            dataKey,
            strokeWidth: LINES_WIDTH,
            ...item,
        };
    });
};
