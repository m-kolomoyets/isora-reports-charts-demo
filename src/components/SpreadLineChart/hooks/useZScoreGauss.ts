import { useMemo } from 'react';
import { getZScorePositionForGauss } from '../utils/common';

export const useZScoreGauss = (gaussMaximum: number, zScore: number) => {
    const zScoreGauss = useMemo(() => {
        if (zScore === 0) {
            return Math.round(gaussMaximum);
        }

        return getZScorePositionForGauss(gaussMaximum, zScore);
    }, [gaussMaximum, zScore]);

    return zScoreGauss;
};
