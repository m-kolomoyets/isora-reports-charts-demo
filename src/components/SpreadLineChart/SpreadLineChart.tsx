import { memo, useMemo } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import clsx from 'clsx';
import type { SpreadLineChartProps } from './types';
import { truncateString } from '@/utils/common';
import { getZScoreDistribution, getZScorePositionForGauss } from './utils/common';
import { Z_SCORE_LABEL_TRANSLATE_PERCENTAGES, Z_SCORE_LABEL_TRANSLATE_VALUE } from './constants';
import ChartLegend from '@/ui/ChartLegend';
import XAxisTickWithPercent from './components/XAxisTickWithPercent';
import XAxisZScoreTick from './components/XAxisZScoreTick';
import s from './SpreadLineChart.module.css';

const SpreadLineChart: React.FC<SpreadLineChartProps> = ({ className, gaussMaximum, zScore, currentName }) => {
    const zScorePercentage = useMemo(() => {
        return getZScorePositionForGauss(gaussMaximum, zScore);
    }, [gaussMaximum, zScore]);

    const zScoreTicksData = useMemo(() => {
        return getZScoreDistribution(gaussMaximum);
    }, [gaussMaximum]);

    const markerTranslateX = useMemo(() => {
        switch (true) {
            case zScorePercentage < Z_SCORE_LABEL_TRANSLATE_PERCENTAGES.min:
                return Z_SCORE_LABEL_TRANSLATE_VALUE;
            case zScorePercentage > Z_SCORE_LABEL_TRANSLATE_PERCENTAGES.max:
                return -Z_SCORE_LABEL_TRANSLATE_VALUE;
            default:
                return 0;
        }
    }, [zScorePercentage]);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={230}>
                <LineChart width={730} height={250} data={zScoreTicksData} margin={{ right: 20, left: -35 }}>
                    <CartesianGrid vertical horizontal={false} stroke="#EAEDF0" />
                    <XAxis
                        axisLine={false}
                        dataKey="index"
                        tickLine={false}
                        interval={24}
                        tick={XAxisTickWithPercent}
                    />
                    <XAxis
                        axisLine={false}
                        dataKey="zScore"
                        tickLine={false}
                        xAxisId={1}
                        interval={0}
                        tickMargin={2}
                        tick={XAxisZScoreTick}
                    />
                    <YAxis type="number" axisLine={false} tickLine={false} tick={false} domain={[0, 100]} />
                    <ReferenceLine
                        label={{
                            position: 'top',
                            value: `${truncateString(currentName, 20)} (${zScore})`,
                            fontSize: 10,
                            fontWeight: 600,
                            fill: '#202932',
                            dx: markerTranslateX,
                        }}
                        x={Math.round(zScorePercentage)}
                        strokeDasharray="3 3"
                        stroke="#000000"
                    />
                    <Legend
                        className={s.legend}
                        align="left"
                        verticalAlign="top"
                        chartWidth={390}
                        chartHeight={200}
                        height={40}
                        wrapperStyle={{
                            left: 20,
                        }}
                        content={(props) => {
                            const { payload } = props;

                            return <ChartLegend payload={payload?.slice(0, 1)} />;
                        }}
                    />
                    <Line name="Assessment Avg" dataKey="gauss" dot={false} stroke="#0D86F8" strokeWidth={2} />
                    <Line dataKey="name" opacity={0} dot={false} label={false} xAxisId={1} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(SpreadLineChart);
