import { memo } from 'react';
import {
    Radar,
    RadarChart as ReRadarChart,
    PolarGrid,
    Legend,
    PolarAngleAxis,
    PolarRadiusAxis,
    ResponsiveContainer,
    Tooltip,
} from 'recharts';
import clsx from 'clsx';
import type { RadarChartProps } from './types';
import { getRadarsConfig, radiusAxisTickFormatter } from './utils/common';
import { DEFAULT_TOOLTIP_PROPS, RADAR_CHART_MAX_MARK } from './constants';
import ChartTooltip from '@/ui/ChartTooltip';
import ChartLegend from '@/ui/ChartLegend';
import s from './RadarChart.module.css';

const RadarChart: React.FC<RadarChartProps> = ({ className, data, currentName }) => {
    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height="100%">
                <ReRadarChart cx="50%" cy="50%" outerRadius="80%" data={data} margin={{ top: 5 }}>
                    <PolarGrid stroke="#EAEDF0" />
                    <PolarAngleAxis dataKey="category" className={s['categories-labels-wrap']} />
                    <PolarRadiusAxis
                        angle={90}
                        domain={[0, RADAR_CHART_MAX_MARK]}
                        orientation="middle"
                        axisLine={false}
                        tickFormatter={radiusAxisTickFormatter}
                    />

                    <Legend
                        className={s.legend}
                        align="left"
                        verticalAlign="top"
                        chartWidth={390}
                        chartHeight={350}
                        content={(props) => {
                            const { payload } = props;

                            return <ChartLegend payload={payload} />;
                        }}
                    />
                    <Tooltip
                        cursor={DEFAULT_TOOLTIP_PROPS}
                        content={(props) => {
                            const { payload, label } = props;
                            const name = data[Number((label ?? 1) - 1)].label;

                            return <ChartTooltip title={`(${label}) ${name}`} payload={payload} />;
                        }}
                    />
                    {getRadarsConfig(currentName).map((radar) => {
                        return <Radar key={radar.name} {...radar} />;
                    })}
                </ReRadarChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(RadarChart);
