import { memo } from 'react';
import type { ChartTooltipLabelProps } from './types';
import s from './ChartTooltipLabel.module.css';

const ChartTooltipLabel: React.FC<ChartTooltipLabelProps> = ({ color, name, value }) => {
    return (
        <li className={s.wrap} key={color}>
            <span
                className={s.color}
                style={{
                    backgroundColor: color,
                }}
            />
            <span className={s['value-wrap']}>
                <span className={s.label}>{name}</span>
                <span className={s.value}>{value}%</span>
            </span>
        </li>
    );
};

export default memo(ChartTooltipLabel);
