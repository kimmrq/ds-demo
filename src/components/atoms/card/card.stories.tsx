import { Meta, Story } from '@storybook/react';
import React from 'react';

import { Card, CardProps } from './card';

export default {
    title: 'Atoms/Card',
    component: Card,
} as Meta;

const CardTemplate: Story<CardProps> = (args) => {
    return <Card {...args} />;
};

export const Default = CardTemplate.bind({});
Default.args = {
    heading: 'heading',
    children: 'content',
};
