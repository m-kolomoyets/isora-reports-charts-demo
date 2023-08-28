import type { XAxisProps } from 'recharts';
import { GAUSS_CONFIG } from '../constants';

export const xAxisTickFormatter: XAxisProps['tick'] = (props) => {
    const { x, y, payload } = props;
    return (
        <g transform={`translate(${x},${y})`}>
            <text dy={10} textAnchor="middle" fill="#5F6E7C" fontSize={10} fontWeight={600}>
                {payload.value}%
            </text>
        </g>
    );
};

export const gauss = (z: number) => {
    return Math.pow(Math.E, -Math.pow(z, 2) / GAUSS_CONFIG.nu) / Math.sqrt(GAUSS_CONFIG.sigma * Math.PI);
};

export const gaussByIndex = (index: number, gaussMaximum: number) => {
    return gauss((index - gaussMaximum + 1) / GAUSS_CONFIG.defaultDeviation);
};

export const getZScorePositionForGauss = (gaussMaximum: number, zScore: number) => {
    const position = gaussMaximum + zScore * GAUSS_CONFIG.defaultDeviation;

    switch (true) {
        case position < 0:
            return 0;
        case position > 100:
            return 100;
        default:
            return position;
    }
};

export const getGaussianSequence = (maximum: number, precision = 101) => {
    return Array.from({ length: precision }, (_, index) => {
        const result = gaussByIndex(index, maximum);
        return {
            name: result.toString(),
            gauss: result,
        };
    });
};
