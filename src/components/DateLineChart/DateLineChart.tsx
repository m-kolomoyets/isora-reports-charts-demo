import { memo, useMemo, useState } from 'react';
import { LineChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Line, ResponsiveContainer } from 'recharts';
import clsx from 'clsx';
import type { DateLineChartProps } from './types';
import { getLinesConfig } from './utils/common';
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
            return index === hoveredColumnIndex ? 'rgba(0, 0, 0, 0.05)' : 'transparent';
        });
    }, [data.length, hoveredColumnIndex]);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={300}>
                <LineChart
                    width={730}
                    height={250}
                    data={data}
                    margin={{ right: 20, left: -35 }}
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
                    <CartesianGrid verticalFill={columnsColors} stroke="#EAEDF0" />
                    <XAxis
                        type="category"
                        dataKey="year"
                        axisLine={false}
                        tickLine={false}
                        tickMargin={7}
                        dx={60}
                        scale="linear"
                        tick={XAxisTick}
                    />
                    <YAxis type="number" axisLine={false} tickLine={false} tickCount={6} tick={YAxisTick} />
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
