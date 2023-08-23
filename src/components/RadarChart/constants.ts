import type { RadarProps, TooltipProps } from 'recharts';

export const RADAR_CHART_MAX_MARK = 100;
export const RADARS_COLORS = ['#000000', '#0D86F8'];

export const DEFAULT_RADAR_PROPS: Partial<Omit<RadarProps, 'ref'>> = {
    strokeWidth: 2,
    fill: 'transparent',
    fillOpacity: 0,
};

export const DEFAULT_TOOLTIP_PROPS: Partial<
    Omit<TooltipProps<string | number | (string | number)[], string | number>, 'ref'>
>['cursor'] = {
    stroke: '#000000',
    strokeWidth: 2,
    strokeDashoffset: 7,
    strokeDasharray: '7, 7',
};

export const RADARS_CONFIG = {
    current: {
        stroke: RADARS_COLORS[0],
    },
    average: {
        name: 'Assessment Avg',
        stroke: RADARS_COLORS[1],
    },
};
