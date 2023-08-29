import { memo, useMemo, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';
import type { DateLineChartProps } from './types';
import { getLinesConfig } from './utils/common';
import { CHART_CONFIG } from '@/constants';
import { CHART_WIDTH, CHART_HEIGHT, CHART_MARGIN, HOVERED_COLUMN_COLOR, Y_AXIS_DOMAIN } from './constants';
import ChartTooltip from '@/ui/ChartTooltip';
import ChartLegend from '@/ui/ChartLegend';
import XAxisTick from './components/XAxisTick';
import YAxisTick from './components/YAxisTick';
import s from './DateLineChart.module.css';

const DateLineChart: React.FC<DateLineChartProps> = ({ className, data, currentName }) => {
    const [hoveredColumnIndex, setHoveredColumnIndex] = useState<number | undefined>(undefined);
    const [hoveredColumnCoords, setHoveredColumnCoords] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

    const columnsColors = useMemo(() => {
        return Array.from({ length: data.length }, (_, index) => {
            return index === hoveredColumnIndex ? HOVERED_COLUMN_COLOR : CHART_CONFIG.colors.transparent;
        });
    }, [data.length, hoveredColumnIndex]);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={CHART_WIDTH}
                    height={CHART_HEIGHT}
                    data={data}
                    margin={CHART_MARGIN}
                    onMouseMove={(event) => {
                        setHoveredColumnIndex(event.activeTooltipIndex ?? undefined);
                        setHoveredColumnCoords(
                            event.activeCoordinate
                                ? {
                                      x: event.activeCoordinate.x - 30,
                                      y: event.activeCoordinate.y - 200,
                                  }
                                : { x: 0, y: 0 }
                        );
                    }}
                >
                    <CartesianGrid verticalFill={columnsColors} stroke={CHART_CONFIG.colors.axis} />
                    <XAxis
                        type="category"
                        dataKey="year"
                        {...CHART_CONFIG.axisReset}
                        tickMargin={7}
                        dx={60}
                        scale="linear"
                        tick={XAxisTick}
                    />
                    <YAxis
                        type="number"
                        {...CHART_CONFIG.axisReset}
                        tickCount={6}
                        domain={Y_AXIS_DOMAIN}
                        tick={YAxisTick}
                    />
                    <Tooltip
                        cursor={{ strokeWidth: 0 }}
                        position={hoveredColumnCoords}
                        content={(props) => {
                            const { payload, label } = props;

                            return <ChartTooltip title={`${label} Questionnaire Score`} payload={payload} />;
                        }}
                    />
                    <Legend
                        className={s.legend}
                        align="left"
                        verticalAlign="top"
                        chartWidth={390}
                        chartHeight={200}
                        height={40}
                        wrapperStyle={{
                            left: 0,
                        }}
                        content={(props) => {
                            const { payload } = props;

                            return <ChartLegend payload={payload} />;
                        }}
                    />
                    {getLinesConfig(currentName).map((props) => {
                        return <Line key={props.name} {...props} />;
                    })}
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(DateLineChart);
