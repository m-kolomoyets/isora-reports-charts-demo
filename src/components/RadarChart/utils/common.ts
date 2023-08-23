import type { RadarProps } from 'recharts';
import { DEFAULT_RADAR_PROPS, RADARS_CONFIG } from '../constants';

export const radiusAxisTickFormatter = (value: string) => {
    return `${value}%`;
};

export const getRadarsConfig = (currentName: string): Omit<RadarProps, 'ref'>[] => {
    return Object.entries(RADARS_CONFIG).map(([dataKey, item]) => {
        return {
            name: currentName,
            dataKey,
            ...DEFAULT_RADAR_PROPS,
            ...item,
        };
    });
};
