export const getShiftPercent = (value: number, min: number, max: number) => {
    return (value - 1 - min) / (max - min);
};
