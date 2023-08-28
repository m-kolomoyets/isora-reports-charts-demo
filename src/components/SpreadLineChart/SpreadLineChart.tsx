import { memo, useMemo } from 'react';
import { CartesianGrid, Legend, Line, LineChart, ReferenceLine, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import clsx from 'clsx';
import type { SpreadLineChartProps } from './types';
import { xAxisTickFormatter, getGaussianSequence } from './utils/common';
import ChartLegend from '@/ui/ChartLegend';
import s from './SpreadLineChart.module.css';
import { useZScoreGauss } from './hooks/useZScoreGauss';

const SpreadLineChart: React.FC<SpreadLineChartProps> = ({ className, gaussMaximum, zScore, currentName }) => {
    const gaussianSequence = useMemo(() => {
        return getGaussianSequence(gaussMaximum + 1);
    }, [gaussMaximum]);

    const zScorePercentage = useZScoreGauss(gaussMaximum, zScore);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={230}>
                <LineChart width={730} height={250} data={gaussianSequence} margin={{ right: 20, left: -35 }}>
                    <CartesianGrid vertical horizontal={false} stroke="#EAEDF0" />
                    <XAxis axisLine={false} tickLine={false} interval={24} tick={xAxisTickFormatter} />
                    <YAxis type="number" axisLine={false} tickLine={false} tick={false} />
                    <ReferenceLine
                        label={{
                            position: 'top',
                            value: `${currentName} (${zScore})`,
                            fontSize: 10,
                            fontWeight: 600,
                            fill: '#202932',
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

                            return <ChartLegend payload={payload} />;
                        }}
                    />
                    <Line name="Assessment Avg" dataKey="gauss" dot={false} stroke="#0D86F8" strokeWidth={2} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(SpreadLineChart);
