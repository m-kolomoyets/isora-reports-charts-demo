import { memo } from 'react';
import clsx from 'clsx';
import type { PieChartTooltipProps } from './types';
import ChartTooltipLabel from '@/ui/ChartTooltip/components/ChartTooltipLabel';
import s from './PieChartTooltip.module.css';

const ChartTooltip: React.FC<PieChartTooltipProps> = ({
    className,
    title,
    payload,
    currentName,
    assessmentAverage,
}) => {
    return (
        <div className={clsx(s.wrap, className)}>
            <h4 className={s.title}>
                <span
                    style={{
                        backgroundColor: payload?.[0]?.payload?.fill,
                    }}
                    className={s.tag}
                />
                {title}
            </h4>

            <ul className={s.list}>
                <ChartTooltipLabel color="transparent" {...payload?.[0]} name={currentName} />
                <ChartTooltipLabel color="transparent" name="Assessment Average" value={assessmentAverage} />
            </ul>
        </div>
    );
};

export default memo(ChartTooltip);
