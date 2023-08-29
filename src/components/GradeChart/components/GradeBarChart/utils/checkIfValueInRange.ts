export const checkIfValueInRange = (value: number, min: number, max: number) => {
    return value - 1 >= min && value - 1 <= max;
};
