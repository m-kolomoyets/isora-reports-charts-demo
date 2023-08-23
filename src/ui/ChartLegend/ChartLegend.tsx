import { memo } from 'react';
import clsx from 'clsx';
import type { ChartLegendProps } from './types';
import s from './ChartLegend.module.css';

const ChartLegend: React.FC<ChartLegendProps> = ({ className, payload }) => {
    return (
        <ul className={clsx(s.list, className)}>
            {payload?.map((item) => {
                return (
                    <li className={s.item} key={item.id}>
                        <span
                            className={s.color}
                            style={{
                                backgroundColor: item.color,
                            }}
                        />
                        <span className={s.label}>{item.value}</span>
                    </li>
                );
            })}
        </ul>
    );
};

export default memo(ChartLegend);
