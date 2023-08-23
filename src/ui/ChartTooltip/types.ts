import { WithClassName } from '@/types';
import { Payload } from 'recharts/types/component/DefaultTooltipContent';

export type ChartTooltipProps = WithClassName<{
    title: string;
    payload?: Payload<string | number | (string | number)[], string | number>[];
}>;
