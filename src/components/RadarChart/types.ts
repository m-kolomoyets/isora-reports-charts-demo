import { WithClassName } from '@/types';

export type RadarChartItem = {
    category: string;
    label: string;
    current: number;
    average: number;
    fullMark: number;
};

export type RadarChartProps = WithClassName<{
    currentName: string;
    data: RadarChartItem[];
}>;
