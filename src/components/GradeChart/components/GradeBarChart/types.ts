import { WithClassName } from '@/types';

export type GradeBarChartProps = WithClassName<{
    currentName: string;
    grade: number;
    assessmentAverage: number;
}>;
