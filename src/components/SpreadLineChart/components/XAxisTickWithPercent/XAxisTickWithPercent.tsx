import type { XAxisProps } from 'recharts';

const XAxisTickWithPercent: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text dy={10} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}%
            </text>
        </g>
    );
};

export default XAxisTickWithPercent;
