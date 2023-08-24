export const removeDuplicatesFromObjectsArray = <T = Record<string, unknown>>(arr: T[], key: keyof T) => {
    return [
        ...new Map(
            arr.map((item) => {
                return [item[key], item];
            })
        ).values(),
    ];
};
