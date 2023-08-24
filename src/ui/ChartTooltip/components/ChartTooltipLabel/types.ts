import type { Payload } from 'recharts/types/component/DefaultTooltipContent';

export type ChartTooltipLabelProps = Payload<string | number | (string | number)[], string | number>;
