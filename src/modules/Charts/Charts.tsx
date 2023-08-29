import { memo } from 'react';
import {
    CURRENT_NAME,
    DATE_LINE_CHART_DATA,
    MOCK_GRADE_CHART_AVERAGE,
    MOCK_GRADE_CHART_GRADE,
    MOCK_SPREAD_MAXIMUM,
    MOCK_SPREAD_Z_SCORE,
    PIE_GROUP_DATA_ITEMS,
    RADAR_CHART_DATA,
} from './constants';
import SpreadLineChart from '@/components/SpreadLineChart';
import PieChartGroup from '@/components/PieChartGroup';
import DateLineChart from '@/components/DateLineChart';
import RadarChart from '@/components/RadarChart';
import GradeChart from '@/components/GradeChart';
import s from './Charts.module.css';

const Charts: React.FC = () => {
    return (
        <section className={s.wrap}>
            <div className={s.block}>
                <h2 className={s.title}>Overall Questionnaire Score</h2>
                <GradeChart
                    currentName={CURRENT_NAME}
                    assessmentAverage={MOCK_GRADE_CHART_AVERAGE}
                    grade={MOCK_GRADE_CHART_GRADE}
                />
            </div>
            <div className={s.block}>
                <h2 className={s.title}>Questionnaire Categorical Overview</h2>
                <RadarChart currentName={CURRENT_NAME} data={RADAR_CHART_DATA} />
            </div>
            <div className={s['two-cols']}>
                <div className={s.block}>
                    <h2 className={s.title}>Questionnaire Score Over Time</h2>
                    <DateLineChart currentName={CURRENT_NAME} data={DATE_LINE_CHART_DATA} />
                </div>
                <div className={s.block}>
                    <h2 className={s.title}>Questionnaire Score Distribution</h2>
                    <SpreadLineChart
                        currentName={CURRENT_NAME}
                        gaussMaximum={MOCK_SPREAD_MAXIMUM}
                        zScore={MOCK_SPREAD_Z_SCORE}
                    />
                </div>
            </div>
            <div className={s.block}>
                <h2 className={s.title}>Progress by Grouping</h2>
                <PieChartGroup dataItems={PIE_GROUP_DATA_ITEMS} currentName={CURRENT_NAME} />
            </div>
        </section>
    );
};

export default memo(Charts);
