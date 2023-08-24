import type { WithClassName } from '@/types';

export type PieChartDataItem = {
    name: string;
    value: number;
    assessmentAverage: number;
    colorId: string;
};

export type PieChartGroupProps = WithClassName<{
    currentName: string;
    dataItems: {
        [name: string]: PieChartDataItem[];
    };
}>;
