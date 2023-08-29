import { memo, useMemo } from 'react';
import clsx from 'clsx';
import type { GradeChartProps } from './types';
import { useGrade } from './hooks/useGrade';
import { GRADES_DESCRIPTIONS } from './constants';
import GradeLabel from '@/ui/GradeLabel';
import GradeBarChart from './components/GradeBarChart';
import s from './GradeChart.module.css';

const GradeChart: React.FC<GradeChartProps> = ({ grade, currentName, assessmentAverage }) => {
    const { gradeKey, ...gradeProps } = useGrade(grade);

    const memoizedGradeDescription = useMemo(() => {
        return GRADES_DESCRIPTIONS[gradeKey];
    }, [gradeKey]);

    return (
        <div className={s.wrap}>
            <section className={s['info-wrap']}>
                <GradeLabel {...gradeProps} size="lg" />
                <div className={s.info}>
                    <h4 className={s.grade}>{grade}%</h4>
                    <p className={clsx(s.title, memoizedGradeDescription.titleClassName)}>
                        {memoizedGradeDescription.title}
                    </p>
                    <p className={s.subtitle}>{memoizedGradeDescription.subtitle}</p>
                </div>
            </section>
            <section className={s['chart-wrap']}>
                <GradeBarChart currentName={currentName} assessmentAverage={assessmentAverage} grade={grade} />
            </section>
        </div>
    );
};

export default memo(GradeChart);
