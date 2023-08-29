import type { RadarProps, TooltipProps } from 'recharts';
import { CHART_CONFIG } from '@/constants';

export const DEFAULT_RADAR_PROPS: Partial<Omit<RadarProps, 'ref'>> = {
    strokeWidth: 2,
    fill: 'transparent',
    fillOpacity: 0,
};

export const DEFAULT_TOOLTIP_PROPS: Partial<
    Omit<TooltipProps<string | number | (string | number)[], string | number>, 'ref'>
>['cursor'] = {
    stroke: CHART_CONFIG.colors.black,
    strokeWidth: 2,
    strokeDashoffset: 7,
    strokeDasharray: '7, 7',
};

export const RADAR_CHART_MAX_MARK = 100;
export const RADARS_COLORS = [CHART_CONFIG.colors.black, CHART_CONFIG.colors.blue];
export const CHART_MARGIN = { top: 5 };
export const CHART_OUTER_RADIUS = '80%';
export const RADARS_CONFIG = {
    current: {
        stroke: RADARS_COLORS[0],
    },
    average: {
        name: 'Assessment Avg',
        stroke: RADARS_COLORS[1],
    },
};
