import { memo } from 'react';
import clsx from 'clsx';
import type { GradeVerticalMarkerProps } from './types';
import s from './GradeVerticalMarker.module.css';

const GradeVerticalMarker: React.FC<GradeVerticalMarkerProps> = ({ className, label, left, markerHeight }) => {
    return (
        <span
            className={clsx(s.wrap, className)}
            style={{
                left,
            }}
        >
            <svg
                id="line"
                className={s.line}
                width="2"
                height={markerHeight}
                viewBox={`0 0 2 ${markerHeight}`}
                fill="none"
            >
                <path d={`M1 0V${markerHeight}`} stroke="currentColor" strokeDasharray="4 4" />
            </svg>
            <svg id="triangle" width="14" height="6" viewBox="0 0 14 6" fill="none">
                <path d="M13.5 6L0.5 6L7 3.85426e-07L13.5 6Z" fill="currentColor" />
            </svg>
            <span className={clsx(s.label, 'grade-marker-label')} title={label}>
                {label}
            </span>
        </span>
    );
};

export default memo(GradeVerticalMarker);
