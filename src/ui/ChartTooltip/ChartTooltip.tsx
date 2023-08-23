import { memo } from 'react';
import clsx from 'clsx';
import type { ChartTooltipProps } from './types';
import s from './ChartTooltip.module.css';

const ChartTooltip: React.FC<ChartTooltipProps> = ({ className, title, payload }) => {
    return (
        <div className={clsx(s.wrap, className)}>
            <h4 className={s.title}>{title}</h4>

            <ul className={s.list}>
                {payload?.map((item) => {
                    return (
                        <li className={s.item} key={item.color}>
                            <span
                                className={s.color}
                                style={{
                                    backgroundColor: item.color,
                                }}
                            />
                            <span className={s['value-wrap']}>
                                <span className={s.label}>{item.name}</span>
                                <span className={s.value}>{item.value}%</span>
                            </span>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default memo(ChartTooltip);
