import { memo, useMemo, useLayoutEffect, useState, useEffect, useCallback } from 'react';
import {
    CartesianGrid,
    Label,
    Legend,
    Line,
    LineChart,
    ReferenceLine,
    ResponsiveContainer,
    XAxis,
    YAxis,
} from 'recharts';
import clsx from 'clsx';
import type { SpreadLineChartProps } from './types';
import { truncateString } from '@/utils/common';
import { getZScoreDistribution, getZScorePositionForGauss } from './utils/common';
import { CHART_CONFIG } from '@/constants';
import {
    CHART_HEIGHT,
    CHART_MARGIN,
    CHART_WIDTH,
    GAUSS_AXIS_INTERVAL,
    MARKER_STROKE_DASH,
    Y_AXIS_DOMAIN,
    Z_SCORE_AXIS_INTERVAL,
    Z_SCORE_LABEL_TRANSLATE_PERCENTAGES,
    Z_SCORE_LABEL_TRANSLATE_VALUE,
} from './constants';
import ChartLegend from '@/ui/ChartLegend';
import XAxisTickWithPercent from './components/XAxisTickWithPercent';
import XAxisZScoreTick from './components/XAxisZScoreTick';
import s from './SpreadLineChart.module.css';

const SpreadLineChart: React.FC<SpreadLineChartProps> = ({ className, gaussMaximum, zScore, currentName }) => {
    const [markerXPosition, setMarkerXPosition] = useState(0);
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

    const calculateMarkerXPosition = useCallback(() => {
        const markerLineElement = document.querySelector('.recharts-reference-line-line') as SVGLineElement;

        if (markerLineElement) {
            setMarkerXPosition(Number(markerLineElement.getAttribute('x1') ?? zScorePercentage));
        }
    }, [zScorePercentage]);

    useLayoutEffect(() => {
        calculateMarkerXPosition();

        window.addEventListener('resize', calculateMarkerXPosition);

        return () => {
            window.removeEventListener('resize', calculateMarkerXPosition);
        };
    }, [calculateMarkerXPosition, markerXPosition, zScorePercentage]);

    useEffect(() => {
        setMarkerXPosition(zScorePercentage);
    }, [zScorePercentage]);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={CHART_HEIGHT}>
                <LineChart width={CHART_WIDTH} height={CHART_HEIGHT} data={zScoreTicksData} margin={CHART_MARGIN}>
                    <CartesianGrid vertical horizontal={false} stroke={CHART_CONFIG.colors.axis} />
                    <XAxis
                        {...CHART_CONFIG.axisReset}
                        dataKey="index"
                        interval={GAUSS_AXIS_INTERVAL}
                        tick={XAxisTickWithPercent}
                    />
                    <XAxis
                        {...CHART_CONFIG.axisReset}
                        dataKey="zScore"
                        orientation="top"
                        xAxisId={1}
                        interval={Z_SCORE_AXIS_INTERVAL}
                        tick={XAxisZScoreTick}
                    />
                    <YAxis {...CHART_CONFIG.axisReset} type="number" domain={Y_AXIS_DOMAIN} />
                    <ReferenceLine
                        label={{
                            position: 'bottom',
                            value: truncateString(currentName, 20),
                            ...CHART_CONFIG.tickTypography,
                            fill: CHART_CONFIG.colors.black,
                            dx: markerTranslateX,
                            dy: 2,
                        }}
                        x={Math.round(zScorePercentage)}
                        strokeDasharray={MARKER_STROKE_DASH}
                        stroke={CHART_CONFIG.colors.black}
                    >
                        <Label
                            id="triangle"
                            position="center"
                            content={() => {
                                return (
                                    <svg
                                        x={markerXPosition - 7}
                                        y="85%"
                                        width="14"
                                        height="6"
                                        viewBox="0 0 14 6"
                                        fill="none"
                                    >
                                        <path d="M13.5 6L0.5 6L7 3.85426e-07L13.5 6Z" fill="currentColor" />
                                    </svg>
                                );
                            }}
                        />
                    </ReferenceLine>
                    <Legend
                        className={s.legend}
                        align="left"
                        verticalAlign="top"
                        chartWidth={390}
                        chartHeight={200}
                        wrapperStyle={{
                            left: 20,
                        }}
                        content={(props) => {
                            const { payload } = props;

                            return <ChartLegend payload={payload} />;
                        }}
                    />
                    <Line name="Assessment Avg" dataKey="gauss" dot={false} stroke="#0D86F8" strokeWidth={2} />
                    <Line
                        dataKey="z-Score"
                        opacity={0}
                        dot={false}
                        label={false}
                        xAxisId={1}
                        stroke={CHART_CONFIG.colors.black}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(SpreadLineChart);
