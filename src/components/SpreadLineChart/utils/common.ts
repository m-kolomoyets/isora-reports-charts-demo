import { GAUSS_CONFIG } from '../constants';

export const gauss = (z: number) => {
    return Math.pow(Math.E, -Math.pow(z, 2) / GAUSS_CONFIG.nu) / Math.sqrt(GAUSS_CONFIG.sigma * Math.PI);
};

export const gaussByIndex = (index: number, gaussMaximum: number) => {
    return gauss((index - gaussMaximum + 1) / GAUSS_CONFIG.defaultDeviation);
};

export const getZScorePositionForGauss = (gaussMaximum: number, zScore: number) => {
    const isZScorePositive = zScore > 0;
    const sidePercents = isZScorePositive ? 100 - gaussMaximum : gaussMaximum;
    const position = Math.round(gaussMaximum + (zScore * sidePercents) / 4);

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
            gauss: result * 1000,
            index,
        };
    });
};

export const getZScoreDistribution = (gaussMaximum: number) => {
    let foundZScoreCount = 0;
    const zScores = [-4, -3, -2, -1, 0, 1, 2, 3, 4];

    const gaussianSequence = getGaussianSequence(gaussMaximum + 1);
    const zScorePercentages = zScores.map((zScore) => {
        return getZScorePositionForGauss(gaussMaximum, zScore);
    });

    return gaussianSequence.map((point) => {
        const foundZScore = zScorePercentages.find((percentage) => {
            return percentage === point.index;
        });
        const isShowZScore = foundZScore !== undefined;
        const isOverlappingWithMaximumLessThanMinimumGaps = gaussMaximum < 15 && foundZScoreCount < 4;
        const isOverlappingWithMaximumMoreThanMaximumGaps = gaussMaximum > 85 && foundZScoreCount > 4;

        if (isShowZScore) {
            foundZScoreCount++;
        }

        return {
            ...point,
            zScore:
                isShowZScore &&
                !isOverlappingWithMaximumLessThanMinimumGaps &&
                !isOverlappingWithMaximumMoreThanMaximumGaps
                    ? zScores[foundZScoreCount - 1]
                    : undefined,
        };
    });
};
