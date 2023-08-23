import { WithClassName } from '@/types';

export type DateLineChartItem = {
    year: string;
    current: number | undefined;
    average: number | undefined;
};

export type DateLineChartProps = WithClassName<{
    currentName: string;
    data: DateLineChartItem[];
}>;
