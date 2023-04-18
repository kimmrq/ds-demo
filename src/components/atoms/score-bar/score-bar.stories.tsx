import { Meta, Story } from '@storybook/react';
import React from 'react';

import { ScoreBar, ScoreBarProps } from './score-bar';

export default {
    title: 'Atoms/ScoreBar',
    component: ScoreBar,
} as Meta;

const ScoreBarTemplate: Story<ScoreBarProps> = (args) => {
    return <ScoreBar {...args} />;
};

export const SingleColor = ScoreBarTemplate.bind({});

SingleColor.args = {
    colors: ['green'],
    minValue: 21,
    maxValue: 32,
    value: 28,
};

export const MultipleColors = ScoreBarTemplate.bind({});

MultipleColors.args = {
    colors: ['green', 'light-orange', 'red'],
    minValue: 21,
    maxValue: 32,
    value: 28,
    valueColor: 'light-orange',
};

export const WithColorStops = ScoreBarTemplate.bind({});

WithColorStops.args = {
    colors: ['green', 'light-orange', 'red'],
    colorStops: [20, 90],
    minValue: 21,
    maxValue: 32,
    value: 28,
    valueColor: 'light-orange',
};

export const WithGradient = ScoreBarTemplate.bind({});

WithGradient.args = {
    colors: ['green', 'light-orange', 'red'],
    minValue: 21,
    maxValue: 32,
    value: 28,
    withGradient: true,
    valueColor: 'light-orange',
};
