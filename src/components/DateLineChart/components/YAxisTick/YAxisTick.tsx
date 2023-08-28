import { YAxisProps } from 'recharts';

const YAxisTick: YAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dx={-8} dy={4} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}
            </text>
        </g>
    );
};

export default YAxisTick;
