import type { XAxisProps } from 'recharts';

export const xAxisTickFormatter: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dy={10} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}%
            </text>
        </g>
    );
};

export const getGaussianSequence = (maximum: number, precision = 101) => {
    const a = 52;
    const c = 12.5;

    return Array.from({ length: precision }, (_, index) => {
        const result = a / Math.E ** ((index + 1 - maximum) ** 2 / (2 * c ** 2));
        return {
            name: result.toString(),
            gauss: result,
        };
    });
};
