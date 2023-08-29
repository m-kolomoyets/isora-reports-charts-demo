import { memo, useMemo, useState } from 'react';
import { produce } from 'immer';
import { PieChart, ResponsiveContainer, Legend, Tooltip, Pie, Cell, Label } from 'recharts';
import clsx from 'clsx';
import type { PieChartGroupProps } from './types';
import { removeDuplicatesFromObjectsArray } from './utils/removeDuplicatesFromObjectsArray';
import { getPercentageSpreadByAmount } from './utils/getPercentageSpreadByAmount';
import { MOCK_PIE_CHART_COLORS_CONFIG } from '@/modules/Charts/constants';
import { PIE_CHART_GRADES_TRANSLATE_BUFFERS, PIE_CHART_OUTER_RADIUS, PIE_CHART_WIDTH } from './constants';
import ChartLegend from '@/ui/ChartLegend';
import PieChartTooltip from './components/PieChartTooltip';
import s from './PieChartGroup.module.css';

const PieChartGroup: React.FC<PieChartGroupProps> = ({ className, dataItems, currentName }) => {
    const [hoveredPie, setHoveredPie] = useState('');
    const [activeGroupCells, setActiveGroupCells] = useState(() => {
        return Object.keys(dataItems).reduce(
            (acc, name) => {
                acc[name] = '';
                return acc;
            },
            {} as Record<string, string>
        );
    });
    const memoizedPieCXPositions = useMemo(() => {
        return getPercentageSpreadByAmount(Object.keys(dataItems).length);
    }, [dataItems]);

    return (
        <div className={clsx(s.wrap, className)}>
            <ResponsiveContainer width="100%" height={250}>
                <PieChart className={s['charts-wrap']} width={603} height={210}>
                    <Tooltip
                        content={(props) => {
                            const { payload } = props;

                            return (
                                <PieChartTooltip
                                    title={(payload?.[0]?.name ?? '-') as string}
                                    currentName={currentName}
                                    payload={payload}
                                    assessmentAverage={payload?.[0]?.payload?.assessmentAverage}
                                />
                            );
                        }}
                    />
                    <Legend
                        className={s.legend}
                        align="left"
                        verticalAlign="top"
                        chartHeight={210}
                        content={(props) => {
                            const { payload } = props;

                            const filteredPayload = removeDuplicatesFromObjectsArray(payload ?? [], 'value');

                            return <ChartLegend payload={filteredPayload} />;
                        }}
                    />
                    {Object.entries(dataItems).map(([name, data], index) => {
                        return (
                            <Pie
                                key={name}
                                data={data}
                                dataKey="value"
                                nameKey="name"
                                cx={`${memoizedPieCXPositions[index]}%`}
                                cy="50%"
                                outerRadius={PIE_CHART_OUTER_RADIUS}
                                innerRadius={PIE_CHART_OUTER_RADIUS - PIE_CHART_WIDTH * 2}
                                fill="#8884d8"
                                cornerRadius={3}
                                height={210}
                                paddingAngle={1}
                                onMouseEnter={(event) => {
                                    setHoveredPie(name);
                                    setActiveGroupCells(
                                        produce((prev) => {
                                            prev[name] = event.colorId;
                                        })
                                    );
                                }}
                                onMouseLeave={() => {
                                    setHoveredPie('');
                                    setActiveGroupCells(
                                        Object.keys(dataItems).reduce(
                                            (acc, name) => {
                                                acc[name] = '';
                                                return acc;
                                            },
                                            {} as Record<string, string>
                                        )
                                    );
                                }}
                            >
                                {data.map((cell, index) => {
                                    return (
                                        <Cell
                                            key={index}
                                            fill={
                                                hoveredPie === name && activeGroupCells[name] !== cell.colorId
                                                    ? '#F4F4F5'
                                                    : MOCK_PIE_CHART_COLORS_CONFIG[cell.colorId]
                                            }
                                            radius={25}
                                        />
                                    );
                                })}
                                <Label
                                    id="category-name"
                                    value={name}
                                    dy={108}
                                    position="center"
                                    fontSize={10}
                                    fontWeight={600}
                                />
                                <Label
                                    id="grade"
                                    position="center"
                                    content={() => {
                                        return (
                                            <svg
                                                viewBox="0 0 28 28"
                                                width="28"
                                                height="28"
                                                x={`calc(${memoizedPieCXPositions[index]}% - 14px - ${PIE_CHART_GRADES_TRANSLATE_BUFFERS[index]}px)`}
                                                y="32%"
                                            >
                                                <g>
                                                    <rect width="28" height="28" fill="#F0F7EF" rx="6" />
                                                    <rect
                                                        width="28"
                                                        height="28"
                                                        stroke="#D9EAD6"
                                                        strokeWidth={1}
                                                        rx="6"
                                                        fill="transparent"
                                                    />
                                                    <text
                                                        x="50%"
                                                        y="53%"
                                                        dominantBaseline="middle"
                                                        textAnchor="middle"
                                                        fontSize="13"
                                                        fontWeight={600}
                                                        fill="#202932"
                                                    >
                                                        A
                                                    </text>
                                                </g>
                                            </svg>
                                        );
                                    }}
                                />
                                <Label
                                    id="percentage"
                                    position="center"
                                    content={() => {
                                        return (
                                            <svg
                                                height="36"
                                                x={`calc(${memoizedPieCXPositions[index]}% - 50%)`}
                                                y="47%"
                                            >
                                                <text
                                                    dx="50%"
                                                    y="50%"
                                                    dominantBaseline="middle"
                                                    textAnchor="middle"
                                                    fontSize={28}
                                                    fontWeight={600}
                                                >
                                                    100%
                                                </text>
                                            </svg>
                                        );
                                    }}
                                />
                                <Label
                                    id="compliance-label"
                                    position="center"
                                    content={() => {
                                        return (
                                            <svg
                                                height="36"
                                                x={`calc(${memoizedPieCXPositions[index]}% - 50%)`}
                                                y="56%"
                                            >
                                                <text
                                                    dx="50%"
                                                    y="50%"
                                                    fill="#5F6E7C"
                                                    fontSize={11}
                                                    fontWeight={400}
                                                    dominantBaseline="middle"
                                                    textAnchor="middle"
                                                >
                                                    compliance
                                                </text>
                                            </svg>
                                        );
                                    }}
                                />
                                <Label
                                    id="history-data"
                                    position="center"
                                    content={() => {
                                        return (
                                            <svg
                                                height="36"
                                                x={`calc(${memoizedPieCXPositions[index]}% - 25px - ${PIE_CHART_GRADES_TRANSLATE_BUFFERS[index]}px)`}
                                                y="70%"
                                            >
                                                <g>
                                                    <rect width="52" height="22" fill="#F0F7EF" rx="4" />
                                                    <rect
                                                        width="52"
                                                        height="22"
                                                        stroke="#D9EAD6"
                                                        strokeWidth={1}
                                                        rx="4"
                                                        fill="transparent"
                                                    />
                                                    <svg
                                                        width="13"
                                                        height="12"
                                                        x="4px"
                                                        y="5px"
                                                        viewBox="0 0 13 12"
                                                        fill="none"
                                                    >
                                                        <path d="M10.5 8L6.5 3L2.5 8H10.5Z" fill="#328721" />
                                                    </svg>
                                                    <text
                                                        x="34px"
                                                        y="12px"
                                                        dominantBaseline="middle"
                                                        textAnchor="middle"
                                                        fontSize="10"
                                                        fontWeight={600}
                                                        fill="#328721"
                                                    >
                                                        56%
                                                    </text>
                                                </g>
                                            </svg>
                                        );
                                    }}
                                />
                            </Pie>
                        );
                    })}
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
};

export default memo(PieChartGroup);
