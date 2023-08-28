import type { XAxisProps } from 'recharts';

const XAxisZScoreTick: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text dy={-2} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}
                {Number(payload.value) ? 'z' : ''}
            </text>
        </g>
    );
};

export default XAxisZScoreTick;
