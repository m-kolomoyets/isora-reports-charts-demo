import { memo } from 'react';
import clsx from 'clsx';
import type { Grades } from '@/types';
import type { GradeBarChartProps } from './types';
import { checkIfValueInRange } from './utils/checkIfValueInRange';
import { getShiftPercent } from './utils/getShiftPercent';
import { GRADES_CONFIG, GRADES_RANGES } from '@/constants';
import { GRADES_BAR_COLORS } from './constants';
import GradeLabel from '@/ui/GradeLabel';
import GradeVerticalMarker from './components/GradeVerticalMarker';
import s from './GradeBarChart.module.css';

const GradeBarChart: React.FC<GradeBarChartProps> = ({ grade, currentName, assessmentAverage }) => {
    return (
        <div className={s.wrap}>
            {Object.entries(GRADES_RANGES).map(([key, value]) => {
                const isGradeInCurrentSection = checkIfValueInRange(grade, value.min, value.max);
                const isAverageInCurrentSection = checkIfValueInRange(assessmentAverage, value.min, value.max);

                const gradeMarkerShiftPercent = getShiftPercent(grade, value.min, value.max);
                const averageMarkerShiftPercent = getShiftPercent(assessmentAverage, value.min, value.max);

                return (
                    <section key={key} className={s['grade-section']}>
                        <div className={s.vertical}>
                            <GradeLabel {...GRADES_CONFIG[key as Grades]} />
                            <span className={s.divider} />
                            <span className={s['grade-percent']}>{value.min}%</span>
                        </div>
                        {key !== 'aPlus' ? (
                            <div className={clsx(s.bar, GRADES_BAR_COLORS[key as Grades])}>
                                {isGradeInCurrentSection ? (
                                    <GradeVerticalMarker
                                        className={clsx(s['grade-marker'], s.current, {
                                            [s['label-overflow']]: grade > 95,
                                        })}
                                        left={`${gradeMarkerShiftPercent * 100}%`}
                                        markerHeight={48}
                                        label={currentName}
                                    />
                                ) : null}
                                {isAverageInCurrentSection ? (
                                    <GradeVerticalMarker
                                        className={clsx(s['grade-marker'], s.avg, {
                                            [s['label-overflow']]: assessmentAverage > 95,
                                        })}
                                        left={`${averageMarkerShiftPercent * 100}%`}
                                        markerHeight={82}
                                        label="Assessment AVG"
                                    />
                                ) : null}
                            </div>
                        ) : null}
                    </section>
                );
            })}
        </div>
    );
};

export default memo(GradeBarChart);
