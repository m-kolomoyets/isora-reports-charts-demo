import { WithClassName } from '@/types';

export type GradeChartProps = WithClassName<{
    currentName: string;
    grade: number;
    assessmentAverage: number;
}>;
