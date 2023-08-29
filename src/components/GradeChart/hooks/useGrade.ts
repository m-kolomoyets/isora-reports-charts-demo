import { useMemo } from 'react';
import type { Grades } from '@/types';
import { GRADES_CONFIG, GRADES_RANGES } from '@/constants';

export const useGrade = (grade: number) => {
    const gradeConfig = useMemo(() => {
        const gradeKey = Object.keys(GRADES_CONFIG).find((key) => {
            const { min, max } = GRADES_RANGES[key as Grades];

            return grade >= min && grade <= max;
        }) as Grades;

        return {
            ...GRADES_CONFIG[gradeKey],
            gradeKey,
        };
    }, [grade]);

    return gradeConfig;
};
