import { memo } from 'react';
import clsx from 'clsx';
import type { GradeLabelProps } from './types';
import s from './GradeLabel.module.css';

const GradeLabel: React.FC<GradeLabelProps> = ({ className, label, size = 'sm' }) => {
    return (
        <span className={clsx(s.wrap, s[size], className)}>
            <span className={s.label}>{label}</span>
        </span>
    );
};

export default memo(GradeLabel);
