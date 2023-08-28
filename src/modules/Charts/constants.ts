import { faker } from '@faker-js/faker';
import type { DateLineChartItem } from '@/components/DateLineChart';
import type { RadarChartItem } from '@/components/RadarChart';
import { DATE_LINE_CHART_MAX_MARK } from '@/components/DateLineChart/constants';
import { RADAR_CHART_MAX_MARK } from '@/components/RadarChart/constants';
import { PieChartGroupProps } from '@/components/PieChartGroup';

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

export const MOCK_PIE_GROUP_DATA_ITEM_MAX = 100;
export const PIE_GROUP_DATA_ITEMS: PieChartGroupProps['dataItems'] = {
    CMMC1: [
        {
            name: 'Planned & Tracked',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'planned-and-tracked',
        },
        {
            name: 'Quantitatively Controlled',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'quantitatively-controlled',
        },

        {
            name: 'Continuously Improving',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'continuously-improving',
        },
    ],
    CMMC2: [
        {
            name: 'Not Performed',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'not-performed',
        },
        {
            name: 'Performed Informally',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'performed-informally',
        },
        {
            name: 'Quantitatively Controlled',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'quantitatively-controlled',
        },
        {
            name: 'Continuously Improving',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'continuously-improving',
        },
    ],
    CMMC3: [
        {
            name: 'Not Performed',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'not-performed',
        },
        {
            name: 'Performed Informally',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'performed-informally',
        },
        {
            name: 'Quantitatively Controlled',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'quantitatively-controlled',
        },
        {
            name: 'Continuously Improving',
            value: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            assessmentAverage: faker.number.int({
                min: 0,
                max: MOCK_PIE_GROUP_DATA_ITEM_MAX,
            }),
            colorId: 'continuously-improving',
        },
    ],
};

export const MOCK_PIE_CHART_COLORS_CONFIG: Record<string, string> = {
    'not-performed': '#890101',
    'performed-informally': '#F00505',
    'planned-and-tracked': '#EC720E',
    'quantitatively-controlled': '#3B932A',
    'continuously-improving': '#0D86F8',
};
