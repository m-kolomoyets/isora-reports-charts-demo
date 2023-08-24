export const getPercentageSpreadByAmount = (amount: number) => {
    const divider = Math.round(100 / (amount + 1));

    return Array.from({ length: amount }, (_, index) => {
        return (index + 1) * divider;
    });
};
