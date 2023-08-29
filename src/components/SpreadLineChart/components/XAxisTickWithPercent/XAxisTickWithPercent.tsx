import type { XAxisProps } from 'recharts';
import { CHART_CONFIG } from '@/constants';

const XAxisTickWithPercent: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;

    return (
        <g transform={`translate(${x},${y + 12})`}>
            <text dy={10} fill={CHART_CONFIG.colors.grey} {...CHART_CONFIG.tickTypography}>
                {payload.value}%
            </text>
        </g>
    );
};

export default XAxisTickWithPercent;
