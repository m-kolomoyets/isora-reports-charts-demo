export const DATE_LINE_CHART_MAX_MARK = 100;
export const LINES_COLORS = ['#0D86F8', '#000000'];
export const LINES_WIDTH = 2;

export const LINES_CONFIG = {
    average: {
        name: 'Assessment Avg',
        stroke: LINES_COLORS[0],
        dot: { fill: LINES_COLORS[0] },
    },
    current: {
        stroke: LINES_COLORS[1],
        dot: { fill: LINES_COLORS[1] },
    },
};

export const CHART_WIDTH = 730;
export const CHART_HEIGHT = 250;
export const CHART_MARGIN = { right: 20, left: -35 };
export const HOVERED_COLUMN_COLOR = 'rgba(0, 0, 0, 0.05)';
export const Y_AXIS_DOMAIN = [0, 100];
