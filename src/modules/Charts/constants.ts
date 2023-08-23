import { faker } from '@faker-js/faker';
import type { DateLineChartItem } from '@/components/DateLineChart';
import type { RadarChartItem } from '@/components/RadarChart';
import { DATE_LINE_CHART_MAX_MARK } from '@/components/DateLineChart/constants';
import { RADAR_CHART_MAX_MARK } from '@/components/RadarChart/constants';

export const CURRENT_NAME = 'AID-FINANCIAL AID';

export const RADAR_CHART_DATA: RadarChartItem[] = Array.from({ length: 24 }, (_, index) => {
    return {
        category: (index + 1).toString(),
        label: faker.lorem.word(),
        current: faker.number.int({
            min: 40,
            max: RADAR_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 40,
            max: RADAR_CHART_MAX_MARK,
        }),
        fullMark: RADAR_CHART_MAX_MARK,
    };
});

export const DATE_LINE_CHART_DATA: DateLineChartItem[] = [
    {
        year: '2019',
        current: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
    },
    {
        year: '2020',
        current: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
    },
    {
        year: '2021',
        current: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
    },
    {
        year: '2022',
        current: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
    },
    {
        year: '2023',
        current: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
        average: faker.number.int({
            min: 0,
            max: DATE_LINE_CHART_MAX_MARK,
        }),
    },
    // NOTE: without this item "2023" column will be hidden due to overflow by scaling for centering dots
    {
        year: '2024',
        current: undefined,
        average: undefined,
    },
];

export const MOCK_SPREAD_MAXIMUM = 50;
export const MOCK_SPREAD_Z_SCORE = -2;
export const MOCK_SPREAD_Z_SCORE_PERCENT = 23;
