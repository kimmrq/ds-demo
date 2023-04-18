import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Box, BoxProps } from './box';

export default {
    title: 'Layouts/Box',
    component: Box,
} as Meta;

const BoxTemplate: Story<BoxProps> = (args) => {
    return <Box {...args} />;
};

export const Default = BoxTemplate.bind({});
Default.args = {
    children: 'Hi there',
    height: '100px',
    width: [1, 1 / 2, 1 / 4],
    m: 1,
    p: 2,
    display: 'flex',
};
