import { WithClassName } from '@/types';
import { Payload } from 'recharts/types/component/DefaultTooltipContent';

export type PieChartTooltipProps = WithClassName<{
    title: string;
    currentName: string;
    assessmentAverage: number;
    payload?: Payload<string | number | (string | number)[], string | number>[];
}>;
