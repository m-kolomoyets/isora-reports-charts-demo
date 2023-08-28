import type { XAxisProps } from 'recharts';

const XAxisTick: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dx={60} dy={7} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}
            </text>
        </g>
    );
};

export default XAxisTick;
