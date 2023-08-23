import type { LineProps, XAxisProps, YAxisProps } from 'recharts';
import { LINES_CONFIG, LINES_WIDTH } from '../constants';

export const xAxisTickFormatter: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dx={60} dy={7} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}
            </text>
        </g>
    );
};

export const yAxisTickFormatter: YAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dx={-8} dy={4} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}
            </text>
        </g>
    );
};

export const getLinesConfig = (currentName: string): Omit<LineProps, 'ref'>[] => {
    return Object.entries(LINES_CONFIG).map(([dataKey, item]) => {
        return {
            name: currentName,
            dataKey,
            strokeWidth: LINES_WIDTH,
            ...item,
        };
    });
};
