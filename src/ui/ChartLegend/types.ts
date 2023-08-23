import type { WithClassName } from '@/types';
import type { Payload as LegendPayload } from 'recharts/types/component/DefaultLegendContent';

export type ChartLegendProps = WithClassName<{
    payload?: LegendPayload[];
}>;
