import { memo } from 'react';
import clsx from 'clsx';
import type { ChartTooltipProps } from './types';
import s from './ChartTooltip.module.css';
import ChartTooltipLabel from './components/ChartTooltipLabel';

const ChartTooltip: React.FC<ChartTooltipProps> = ({ className, title, payload }) => {
    return (
        <div className={clsx(s.wrap, className)}>
            <h4 className={s.title}>{title}</h4>

            <ul className={s.list}>
                {payload?.map((item) => {
                    return <ChartTooltipLabel key={item.color} {...item} />;
                })}
            </ul>
        </div>
    );
};

export default memo(ChartTooltip);
