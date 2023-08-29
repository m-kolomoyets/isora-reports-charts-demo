import type { XAxisProps } from 'recharts';
import { CHART_CONFIG } from '@/constants';

const XAxisZScoreTick: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y})`}>
            <text dy={-2} fill={CHART_CONFIG.colors.black} {...CHART_CONFIG.tickTypography}>
                {payload.value}
            </text>
        </g>
    );
};

export default XAxisZScoreTick;
